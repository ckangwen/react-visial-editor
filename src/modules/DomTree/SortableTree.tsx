import React from 'react';
import Sortable from '@/components/Sortable';
import SortableItem from './SortableTreeItem';
import { v4 as uuid } from 'uuid';
import { getPath } from '@/utils';
import { ACTION_TYPES } from '@/models';
import { CompKeysProps, CompSelectedInfo, LAYOUT_RESORT, VirtualComp } from '@/types';
import { Dispatch } from 'redux';
import styles from './style.css';

interface SortTreeProps {
  componentSchema: VirtualComp;
  path?: string;
  dispatch?: any;
  selectedInfo?: CompSelectedInfo;
  compKeys?: CompKeysProps;
  hoverKey?: string;
}

let dispatch: Dispatch;

const onLayoutResort = (sortKeys: string[], evt: any, props: any) => {
  const { path } = props;
  const dragData = JSON.parse(evt.clone.dataset.info);

  dispatch({
    type: ACTION_TYPES[LAYOUT_RESORT],
    payload: {
      dragData,
      path: getPath({ path, isContainer: true }),
      sortKeys,
    },
  });
};

export default function SortableTree(props: SortTreeProps) {
  const { componentSchema, compKeys = [], selectedInfo, hoverKey, path } = props;
  dispatch = props.dispatch!;
  const { children = [] } = componentSchema;

  return (
    <Sortable
      options={{
        group: { name: 'nested' },
        animation: 200,
        dataIdAttr: 'id',
        ghostClass: styles['sortable-class-demo'],
        swapThreshold: 0.5,
      }}
      onChange={(sortKeys: string[], _: any, evt: any) => {
        onLayoutResort(sortKeys, evt, props);
      }}
    >
      {children.map((node: VirtualComp | string, index: number) => {
        let key = uuid();
        let curComponentSchema = node;
        // 如果children是文本元素
        if (typeof node === 'string') {
          curComponentSchema = {
            key,
            text: node,
            children: [],
          };
        } else {
          key = node.key;
        }

        const newPath = getPath({ path, index });
        return (
          <SortableItem
            key={key}
            path={newPath}
            componentSchema={curComponentSchema as VirtualComp}
            selectedInfo={Object.assign(selectedInfo || {}) as CompSelectedInfo}
            hoverKey={hoverKey}
            compKeys={[...compKeys, key]}
            dispatch={dispatch}
          />
        );
      })}
    </Sortable>
  );
}
