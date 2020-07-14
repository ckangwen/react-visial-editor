import React, { useState } from 'react';
import { Collapse } from 'antd';
import {
  CLEAR_SELECT_STATUS,
  CompKeysProps,
  CompSelectedInfo,
  SELECT_COMPONENT,
  VirtualComp,
} from '@/types';
import { CaretRightFilled } from '@ant-design/icons';
import SortableTree from './SortableTree';
import { Dispatch } from 'redux';
import styles from './style.css';
import { ContextMenuTrigger } from 'react-contextmenu';
import { treeContextmenuKey } from '@/config';
import { ACTION_TYPES } from '@/models';

let dispatch: Dispatch;
interface SortItemPropsType {
  dispatch?: Dispatch;
  selectedInfo: CompSelectedInfo;
  compKeys?: CompKeysProps;
  hoverKey?: string;
  path: string;
  componentSchema: VirtualComp;
}

const handleSelectNode = (
  componentSchema: VirtualComp,
  compKeys: string[],
  path: string,
  isSelected: boolean,
) => {
  let type = ACTION_TYPES[SELECT_COMPONENT];
  const { key } = componentSchema;
  if (isSelected) {
    type = ACTION_TYPES[CLEAR_SELECT_STATUS];
  }
  dispatch({
    type,
    payload: {
      componentSchema,
      compKeys: [...compKeys, key],
      path,
    },
  });
};

export default function SortableItem(props: SortItemPropsType) {
  const [isUnfold, setIsUnfold] = useState(false);
  const { selectedInfo, path, compKeys = [], componentSchema, hoverKey } = props;
  const { children, tag, key, text } = componentSchema;
  const { selectedKey } = selectedInfo;
  dispatch = props.dispatch!;

  const renderHeader = (showArrow: boolean = true) => {
    // const isHovered = hoverKey === key;
    const selectedColor = '#1890ff';
    const hoveredColor = '#45b97c';
    const unSelectedColor = '#555555';
    const selectedBGColor = '#F2F2F2';
    const isSelected = selectedKey === key;
    const style = {
      color: isSelected ? selectedColor : hoverKey === key ? hoveredColor : unSelectedColor,
      backgroundColor: isSelected ? selectedBGColor : 'inherit',
      paddingLeft: showArrow ? undefined : 26,
    };

    return (
      <ContextMenuTrigger id={treeContextmenuKey} holdToDisplay={1000}>
        <div key={key} className={styles['header-container']} style={style} onClick={() => handleSelectNode(componentSchema, compKeys, path, isSelected)}>
          <span>
            {showArrow && (
              <CaretRightFilled
                className={styles['caret-right-icon']}
                style={{
                  transform: isUnfold ? 'rotate(90deg)' : undefined,
                }}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setIsUnfold(!isUnfold);
                }}
              />
            )}
            <span>{tag || text}</span>
          </span>
        </div>
      </ContextMenuTrigger>
    );
  };
  let sortTree = null;
  if (children && children.length > 0) {
    sortTree =
      children.length === 0 ? (
        <div style={{ marginLeft: 24 }}>
          <SortableTree
            path={path}
            compKeys={[...compKeys, key]}
            selectedInfo={selectedInfo}
            componentSchema={componentSchema}
            dispatch={dispatch}
          />
        </div>
      ) : (
        <Collapse activeKey={isUnfold ? ['1'] : []} bordered={false}>
          <Collapse.Panel
            showArrow={false}
            key="1"
            header={<div />}
            style={{ border: 0, backgroundColor: '#fff' }}
          >
            <SortableTree
              path={path}
              compKeys={[...compKeys, key]}
              selectedInfo={selectedInfo}
              componentSchema={componentSchema}
              dispatch={dispatch}
            />
          </Collapse.Panel>
        </Collapse>
      );
  }

  // 文本元素没有设置tag属性
  return (
    <div
      className={styles['sortable-tree-item']}
      id={key}
      data-name={tag}
      data-info={JSON.stringify(componentSchema)}
    >
      {renderHeader(!!tag)}
      {sortTree}
    </div>
  );
}
