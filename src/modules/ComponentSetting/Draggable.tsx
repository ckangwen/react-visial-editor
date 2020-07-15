import React, { memo, useRef } from 'react';
import { Dispatch } from 'dva';
import styles from './style.css';
import { ACTION_TYPES } from '@/models';
import { GET_DRAG_DATA } from '@/types';
import { useDispatch } from 'dva'

export interface DraggableProps {
  dragData: {
    tag: string;
    defaultProps?: any;
    text?: string;
  };
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
  const { dragData } = props;
  const dispatch = useDispatch();
  let { tag, ...rest } = dragData;
  const text = tag
  // TODO 拖拽菜单的文本显示有待改善
  tag = tag.indexOf('-') > -1 ? tag.slice(0, tag.indexOf('-')) : tag;

  const randomIndex: number = useRef(Math.floor(Math.random() * 10)).current;
  return (
    <div
      draggable
      className={styles['draggable-item']}
      style={{
        backgroundColor: defaultColors[randomIndex],
      }}
      onDragStart={(e: any) => {
        dispatch({
          type: ACTION_TYPES[GET_DRAG_DATA],
          payload: {
            dragData: { ...rest, tag },
          },
        });
      }}
    >
      {text}
    </div>
  );
}

export default memo(Draggable, (prev, next) => prev.dragData.tag === next.dragData.tag);
