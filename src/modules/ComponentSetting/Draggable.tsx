import React, { memo, useRef } from 'react';
import { Dispatch } from 'redux';
import styles from './style.css';

export interface DraggableProps {
  dispatch: Dispatch;
  dragData: {
    tag: string;
    defaultProps?: any;
    text?: string;
  }
}

const defaultColors = [
  '#5237D8',
  '#46BD6F',
  '#AF4A86',
  '#FF8C00',
  '#EE3A8C',
  '#8470FF',
  '#FFD700',
  '#7D26CD',
  '#7FFFD4',
  '#008B8B',
];

function Draggable(props: DraggableProps) {
  const {
    dispatch,
    dragData
  } = props

  let {
    tag,
    ...rest
  } = dragData;
  tag = tag.indexOf('-') > -1 ? tag.slice(0, tag.indexOf('-')) : tag;

  const randomIndex: number = useRef(Math.floor(Math.random() * 10)).current;
  return (
    <div
      draggable
      className={styles['draggable-item']}
      style={{
        backgroundColor: defaultColors[randomIndex]
      }}
      onDragStart={() => {
        // dispatch({
        //   type: ACTION_TYPES[GET_DRAG_DATA],
        //   payload: {
        //     dragData: { ...rest, tag }
        //   }
        // })
      }}
    >
      { tag }
    </div>
  )
}

export default memo(Draggable)
