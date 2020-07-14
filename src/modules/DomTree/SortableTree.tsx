import React, { useRef } from 'react';
import { getPath } from '@/utils';
import Sortable from '@/components/Sortable';
import SortableItem from './SortableTreeItem';
import { CompKeysProps, CompSelectedInfo, LAYOUT_RESORT, VirtualComp } from '@/types';
import { v4 as uuid } from 'uuid';
import styles from '@/modules/DomTree/style.css';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from '@/models';

interface SortTreeProps {
  componentSchema: VirtualComp;
  path?: string;
  dispatch?: any;
  selectedInfo?: CompSelectedInfo;
  compKeys?: CompKeysProps;
  hoverKey?: string;
}
interface storeType {
  [propName: string]: any;
}

let dispatch: Dispatch;
const store: storeType = {
  nextSibling: '',
  activeSortable: {},
};

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
