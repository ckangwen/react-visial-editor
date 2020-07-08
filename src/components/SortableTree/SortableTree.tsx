import React, { useState } from 'react';
import ReactSortableTree, {
  AdditionalProps,
  SortableTreeData,
  map,
  OnVisibilityToggleProps,
} from 'react-sortable-tree';
import CustomTheme from './theme';
import 'react-sortable-tree/style.css';
import { getPath, noop, usePrevious } from '@/utils';
import { VirtualComp } from '@/types/data';

interface SortableTreeProps {
  data: SortableTreeData[];
  onChange: (data: SortableTreeData[]) => void;
  onClick?: (data: AdditionalProps) => void;
  additionalProps?: any;
  expandedPaths: string[];
  onVisibilityToggle?: (data: OnVisibilityToggleProps) => void;
}

function fuseSeatch(arr: string[], str: string) {


}


export default function SortableTree(props: SortableTreeProps) {
  const { data, onChange, onClick = noop, additionalProps = {}, expandedPaths, onVisibilityToggle = noop } = props;
  const generateNodeProps = (data: AdditionalProps) => {
    return {
      onClick: () => onClick(data),
      ...additionalProps,
    };
  };
  const newData = map({
    treeData: data,
    callback: ({ node }: any) => {
      const { path } = node
        if (expandedPaths.some(item => item.startsWith(path))) {
            return {
            ...node,
            expanded: true
          }
        } else {
          return  node
        }
    },
    getNodeKey: ({ treeIndex }: any) => treeIndex,
    ignoreCollapsed: false,
  });

  return (
    <div style={{ height: 400, width: 200, outline: 0 }}>
      <ReactSortableTree
        treeData={newData as any}
        onChange={(treeData: SortableTreeData[]) => onChange(treeData)}
        theme={CustomTheme}
        generateNodeProps={generateNodeProps}
        onVisibilityToggle={onVisibilityToggle}
      />
    </div>
  );
}
