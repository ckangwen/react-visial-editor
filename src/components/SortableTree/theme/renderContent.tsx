import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { ContextMenuTrigger } from 'react-contextmenu';
import { treeContextmenuKey } from '@/config'
import styles from './index.css'


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
    ...otherProps
  } = props;

  const nodeTitle = title || node.title;
  const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
  const nodeContent = connectDragPreview(
    <div className={styles["row-content"]}>
      <div className={styles["row-label"]}>
        <span className={styles["row-title"]}>
          {typeof nodeTitle === 'function' ? nodeTitle({ node, path, treeIndex }) : nodeTitle}
        </span>
      </div>
    </div>,
  );

  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }} {...otherProps}>
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
      {!node.children && (
        <span style={{ width: 20, height: 14 }} />
      )}
      <ContextMenuTrigger id={treeContextmenuKey} holdToDisplay={1000}>
        <div className={styles["row-wrapper"]}>
          <div
            className={styles["row"]}
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
  );
}

function isDescendant(older: any, younger: any) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some((child: any) => child === younger || isDescendant(child, younger))
  );
}
