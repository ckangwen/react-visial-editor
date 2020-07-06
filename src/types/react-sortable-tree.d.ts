declare module "react-sortable-tree" {
  import React from 'react'
  export interface SortableTreeData {
    title: string;
    subtitle?: string;
    expanded?: boolean;
    key?: string;
    path: string;
    children?: SortableTreeData[];
  }

  export interface AdditionalProps {
    node: SortableTreeData,
    path: number[] | string[],
    treeIndex: number,
    lowerSiblingCounts: number[],
    isSearchMatch: boolean,
    isSearchFocus: boolean
  }
  export interface ReactSortableTreeProps {
    treeData: SortableTreeData[];
    onChange: (data: SortableTreeData[]) => void;
    generateNodeProps: (data: AdditionalProps) => object;
    theme: any;
  }
  class ReactSortableTree extends React.Component<ReactSortableTreeProps> {}
  export default ReactSortableTree
}
