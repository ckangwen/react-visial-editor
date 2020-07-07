import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { ContextMenuTrigger } from 'react-contextmenu';
import { treeContextmenuKey } from '@/config';
import styles from './index.css';

export default function NodeContentRenderer(props: any) {
  const {
    scaffoldBlockPxWidth,
    toggleChildrenVisibility,
    connectDragPreview,
    connectDragSource,
    isDragging,
    canDrop,
    canDrag,
    node,
    title,
    draggedNode,
    path,
    treeIndex,
    isSearchMatch,
    isSearchFocus,
    icons,
    buttons,
    className,
    style,
    didDrop,
    swapFrom,
    swapLength,
    swapDepth,
    treeId, // Not needed, but preserved for other renderers
    isOver, // Not needed, but preserved for other renderers
    parentNode, // Needed for dndManager
    rowDirection,
    onClick,
    selectedKey,
    ...otherProps
  } = props;
  const isSelected = node.key === selectedKey;
  const nodeTitle = title || node.title;
  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
  const nodeContent = connectDragPreview(
    <div className={styles['row-content']}>
      <div className={styles['row-label']}>
        <span className={styles['row-title']}>
          {typeof nodeTitle === 'function' ? nodeTitle({ node, path, treeIndex }) : nodeTitle}
        </span>
      </div>
    </div>,
  );

  const labelStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isSelected ? '#e6f7ff' : '#fff',
    color: isSelected ? '#1890ff' : '#000',
  };
  return (
    <div style={labelStyle} {...otherProps}>
      {toggleChildrenVisibility &&
        node.children &&
        (node.children.length > 0 || typeof node.children === 'function') && (
          <CaretRightOutlined
            style={{ transform: node.expanded ? 'rotate(90deg)' : undefined }}
            onClick={() =>
              toggleChildrenVisibility({
                node,
                path,
                treeIndex,
              })
            }
          />
        )}
      {!node.children && <span style={{ width: 20, height: 14 }} />}
      <div style={{ flex: 1 }} onClick={onClick}>
        <ContextMenuTrigger id={treeContextmenuKey} holdToDisplay={1000}>
          <div className={styles['row-wrapper']}>
            <div
              className={styles['row']}
              style={{
                opacity: isDraggedDescendant ? 0.5 : 1,
                paddingLeft: scaffoldBlockPxWidth,
                ...style,
              }}
            >
              {canDrag ? connectDragSource(nodeContent, { dropEffect: 'copy' }) : nodeContent}
            </div>
          </div>
        </ContextMenuTrigger>
      </div>
    </div>
  );
}

function isDescendant(older: any, younger: any) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some((child: any) => child === younger || isDescendant(child, younger))
  );
}
