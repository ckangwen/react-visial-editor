declare module "react-sortable-tree" {
  import React from 'react'
  export interface SortableTreeData {
    title: string;
    subtitle: string;
    expanded: boolean;
    children: SortableTreeData[];
  }
  export interface ReactSortableTreeProps {
    treeData: SortableTreeData[];
    onChange: (data: SortableTreeData[]) => void;
    theme: any;
  }
  class ReactSortableTree extends React.Component<ReactSortableTreeProps> {}
  export default ReactSortableTree
}
