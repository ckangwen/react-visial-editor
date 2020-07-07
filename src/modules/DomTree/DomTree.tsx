import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import SortableTree from '@/components/SortableTree';
import DrawerPanel from '@/components/DrawerPanel';
import { getPath, reduxConnect } from '@/utils';
import { blocksCategory, treeContextmenuKey } from '@/config';
import { CompKeysProps, CompSelectedInfo, VirtualComp } from '@/types/data';
import { AdditionalProps, SortableTreeData } from 'react-sortable-tree';
import { ACTION_TYPES } from '@/models';

import {
  CLEAR_SELECT_STATUS,
  DELETE_COMPONENT,
  INSERT_COMPONENT,
  SELECT_COMPONENT,
} from '@/types/store';

let dispatch: Dispatch;
interface DomTreeProps {
  projectSchema?: VirtualComp[];
  dispatch?: Dispatch;
  selectedInfo?: CompSelectedInfo;
  compKeys: CompKeysProps;
  hoverKey?: string;
}

function toTreeData(projectSchema: VirtualComp[] = [], parentPath?: string): SortableTreeData[] {
  return projectSchema.map((item: VirtualComp, index: number) => {
    let children = item.children as any;
    let path: string = getPath({ path: parentPath, index });
    if (item.children && item.children.length > 0) {
      children = toTreeData(item.children || [], path);
    }
    return {
      title: item.tag || item,
      expanded: false,
      path,
      key: item.key,
      children: children,
    };
  }) as SortableTreeData[];
}

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
  const { projectSchema, selectedInfo, compKeys = [] } = props;

  dispatch = props.dispatch!;
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');
  let _treeData: SortableTreeData[] = toTreeData(projectSchema);
  const [treeData, setTreeData] = useState<SortableTreeData[]>(_treeData);
  useEffect(() => {
    // FIX: treeData不会主动更新
    setTreeData(_treeData);
  }, [projectSchema]);

  const handleChange = (value: any) => {
    setTreeData(value);
  };
  const handleContextmenuClick = (e: Event, data: any) => {
    const { selectedInfo } = props;
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
  };
  // 在Drawer中选中组件之后，进行dispatch，修改整个页面的结构
  const handleSelect = (data: any) => {
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
  };

  // 点击DomTree中某一个行，设置为选中状态，并更新selectedInfo
  const handleClickTitle = (data: AdditionalProps) => {
    const { key, path } = data.node;
    const { selectedKey } = selectedInfo || {};
    let type = ACTION_TYPES[SELECT_COMPONENT];
    if (selectedKey === key) {
      type = ACTION_TYPES[CLEAR_SELECT_STATUS];
    }

    dispatch({
      type,
      payload: {
        componentConfig: data.node,
        compKeys: [...compKeys, key],
        path,
      },
    });
  };

  return (
    <>
      <SortableTree
        data={treeData}
        onChange={handleChange}
        onClick={handleClickTitle}
        additionalProps={{ selectedKey: selectedInfo?.selectedKey }}
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
        handleSelect={handleSelect}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
      />
    </>
  );
}

export default reduxConnect(['projectSchema', 'selectedInfo', 'compKeys'])(DomTree);
