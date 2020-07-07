import React, { Children, cloneElement } from 'react';
import styles from './index.css';

export default function TreeNodeRenderer(props: any) {
  const {
    children,
    swapFrom,
    swapLength,
    swapDepth,
    scaffoldBlockPxWidth,
    lowerSiblingCounts,
    connectDropTarget,
    isOver,
    draggedNode,
    canDrop,
    treeIndex,
    treeId,
    listIndex,
    rowDirection,
    getPrevRow, // Delete from otherProps
    node, // Delete from otherProps
    path,
    onClick,
    style,
    ...otherProps
  } = props;
  // const scaffoldBlockCount = lowerSiblingCounts.length - 1;
  // let dropType
  // if (canDrop && !isOver) {
  //   dropType = 'validDrop'
  // } else if (!canDrop && isOver) {
  //   dropType = 'invalidDrop'
  // }

  return connectDropTarget(
    <div {...otherProps}>
      <div
        className={styles['nodeContent']}
        style={{ paddingLeft: scaffoldBlockPxWidth * path.length }}
      >
        {Children.map(children, child =>
          cloneElement(child, {
            isOver,
            canDrop,
            draggedNode,
          }),
        )}
      </div>
    </div>,
  );
}
