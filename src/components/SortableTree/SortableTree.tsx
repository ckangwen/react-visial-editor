import React from 'react';
import ReactSortableTree from 'react-sortable-tree';
import CustomTheme from './theme';
import 'react-sortable-tree/style.css';

export interface SortableTreeData {
  title: string;
  subtitle?: string;
  expanded?: boolean;
  children?: SortableTreeData[];
}

interface SortableTreeProps {
  data: SortableTreeData[];
  onChange: (data: SortableTreeData[]) => void;
}
export default function SortableTree(props: SortableTreeProps) {
  const {
    data,
    onChange
  } = props;
  return (
    <div style={{ height: 400, width: 200, outline: 0 }}>
      <ReactSortableTree
        treeData={data as any}
        onChange={(treeData: SortableTreeData[]) => onChange(treeData)}
        theme={CustomTheme}
      />
    </div>
  );
}
