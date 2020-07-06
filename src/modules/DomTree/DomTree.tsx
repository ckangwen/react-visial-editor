import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import SortableTree from '@/components/SortableTree';
import DrawerPanel from '@/components/DrawerPanel';
import { reduxConnect } from '@/utils';
import { blocksCategory, treeContextmenuKey } from '@/config';
import { CompSelectedInfo, VirtualComp } from '@/types/data';
import { SortableTreeData } from '@/components/SortableTree/SortableTree';
import { ACTION_TYPES } from '@/models';
import { DELETE_COMPONENT, INSERT_COMPONENT } from '@/types/store';

let dispatch: Dispatch;
interface DomTreeProps {
  projectSchema?: VirtualComp[];
  dispatch?: Dispatch;
  selectedInfo?: CompSelectedInfo;
  hoverKey?: string;
}

function toTreeData(projectSchema: VirtualComp[] = []): SortableTreeData[] {
  return projectSchema.map((item: VirtualComp) => {
    let children = item.children as any;
    if (item.children && item.children.length > 0) {
      children = toTreeData(item.children || []);
    }
    return {
      title: item.tag || item,
      expanded: false,
      children: children,
    };
  }) as SortableTreeData[];
}


function handleInsertComponent(data: string, path: string, parentPath: string, index: number) {
  // Breadcrumb.Item => Breadcrumb，用于判断选中组件是否被注册
  let key = (data.indexOf('.') > -1) ? data.slice(0, data.indexOf('.')) : data;
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
  const { projectSchema, selectedInfo, hoverKey } = props;

  dispatch = props.dispatch!;
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');
  const _treeData = toTreeData(projectSchema);
  const [treeData, setTreeData] = useState(_treeData);

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
    setVisible(true);
  };
  const handleSelect = (data: any) => {
    setVisible(false);
    const { path } = selectedInfo || {};
    if (!path) {
      return message.warning('目标未选中或路径不存在')
    }
    switch (action) {
      case 'removeNode': {
        dispatch({
          type: ACTION_TYPES[DELETE_COMPONENT],
        });
        break;
      }
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

  return (
    <>
      <SortableTree data={treeData} onChange={handleChange} />
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

export default reduxConnect(['projectSchema', 'selectedInfo'])(DomTree);
