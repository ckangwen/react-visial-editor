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
  export interface OnVisibilityToggleProps {
    treeData: SortableTreeData[];
    node: SortableTreeData;
    expanded: boolean;
    path: number[] | string[]

  }
  export interface ReactSortableTreeProps {
    treeData: SortableTreeData[];
    onChange: (data: SortableTreeData[]) => void;
    generateNodeProps: (data: AdditionalProps) => object;
    theme: any;
    onVisibilityToggle: (data: OnVisibilityToggleProps) => void;
  }
  export function map(data: any): any;
  class ReactSortableTree extends React.Component<ReactSortableTreeProps> {}
  export default ReactSortableTree
}
