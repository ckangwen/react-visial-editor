import SortableTree from './SortableTree';
import React, { useCallback, useState } from 'react';
import { reduxConnect } from '@/utils';
import {
  CompKeysProps,
  CompSelectedInfo,
  DELETE_COMPONENT,
  INSERT_COMPONENT,
  VirtualComp,
} from '@/types';
import { Dispatch } from 'redux';
import styles from './style.css';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import { blocksCategory, treeContextmenuKey } from '@/config';
import DrawerPanel from '@/components/DrawerPanel';
import { message } from 'antd';
import { ACTION_TYPES } from '@/models';

interface DomTreeProps {
  projectSchema?: VirtualComp[];
  dispatch?: Dispatch;
  selectedInfo?: CompSelectedInfo;
  compKeys?: CompKeysProps;
  hoverKey?: string;
}
let dispatch: Dispatch;

function handleInsertComponent(data: string, path: string, parentPath: string, index: number) {
  // Breadcrumb.Item => Breadcrumb，用于判断选中组件是否被注册
  let key = data.indexOf('.') > -1 ? data.slice(0, data.indexOf('.')) : data;
  if (Object.keys(blocksCategory).indexOf(key) < 0) {
    message.warning('该组件不存在');
    return;
  }
  const defaultProps = (blocksCategory as any)[key][data];
  dispatch({
    type: ACTION_TYPES[INSERT_COMPONENT],
    payload: {
      index,
      parentPath,
      defaultProps,
      tag: data,
    },
  });
}

function DomTree(props: DomTreeProps) {
  const { projectSchema, compKeys = [], selectedInfo, hoverKey } = props;
  dispatch = props.dispatch!;
  const componentSchema = {
    children: projectSchema,
  };

  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');

  // 在Drawer中选中组件之后，进行dispatch，修改整个页面的结构
  const handleInsertNode = useCallback(
    (data: any) => {
      setVisible(false);
      const { path } = selectedInfo || {};
      if (!path) {
        return message.warning('目标未选中或路径不存在');
      }
      switch (action) {
        case 'insertBefore': {
          const parentPath = path.slice(0, path.lastIndexOf('.'));
          const index = parseInt(path.charAt(path.length - 2));
          handleInsertComponent(data, path, parentPath, index);
          break;
        }
        case 'insertAfter': {
          const parentPath = path.slice(0, path.lastIndexOf('.'));
          const index = parseInt(path.charAt(path.length - 2)) + 1;
          handleInsertComponent(data, path, parentPath, index);
          break;
        }
        case 'insertToChild': {
          handleInsertComponent(data, path, path, 0);
          break;
        }
        default:
          break;
      }
    },
    [action, selectedInfo],
  );

  const handleContextmenuClick = useCallback(
    (e: Event, data: any) => {
      if (!selectedInfo || (selectedInfo && !selectedInfo.selectedKey)) {
        message.warning('请选择你需要操作的组件');
        return;
      }
      const { action } = data;
      setAction(action);
      if (action === 'removeNode') {
        dispatch({
          type: ACTION_TYPES[DELETE_COMPONENT],
        });
      } else {
        setVisible(true);
      }
    },
    [selectedInfo],
  );

  return (
    <div className={styles['sortable-tree-container']}>
      <SortableTree
        dispatch={dispatch}
        hoverKey={hoverKey}
        componentSchema={componentSchema as VirtualComp}
        compKeys={compKeys}
        selectedInfo={selectedInfo as CompSelectedInfo}
      />
      <ContextMenu id={treeContextmenuKey} rtl>
        <MenuItem onClick={handleContextmenuClick} data={{ action: 'removeNode' }}>
          删除节点
        </MenuItem>
        <SubMenu title="插入节点" rtl>
          <MenuItem onClick={handleContextmenuClick} data={{ action: 'insertBefore' }}>
            向上插入兄弟节点
          </MenuItem>
          <MenuItem onClick={handleContextmenuClick} data={{ action: 'insertAfter' }}>
            向下插入兄弟节点
          </MenuItem>
          <MenuItem onClick={handleContextmenuClick} data={{ action: 'insertToChild' }}>
            插入子节点
          </MenuItem>
        </SubMenu>
      </ContextMenu>
      <DrawerPanel
        visible={visible}
        handleSelect={handleInsertNode}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}
export default reduxConnect(['projectSchema', 'selectedInfo'])(DomTree);
