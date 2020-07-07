import React, { useState } from 'react';
import ReactSortableTree, { AdditionalProps, SortableTreeData } from 'react-sortable-tree';
import CustomTheme from './theme';
import 'react-sortable-tree/style.css';
import { getPath, noop, usePrevious } from '@/utils';
import { VirtualComp } from '@/types/data';

interface SortableTreeProps {
  data: SortableTreeData[];
  onChange: (data: SortableTreeData[]) => void;
  onClick?: (data: AdditionalProps) => void;
  additionalProps?: any;
}


export default function SortableTree(props: SortableTreeProps) {
  const { data, onChange, onClick = noop, additionalProps = {} } = props;
  const generateNodeProps = (data: AdditionalProps) => {
    return {
      onClick: () => onClick(data),
      ...additionalProps,
    };
  };
  const [treeData, setTreeData] = useState(data);

  return (
    <div style={{ height: 400, width: 200, outline: 0 }}>
      <ReactSortableTree
        treeData={data as any}
        onChange={(treeData: SortableTreeData[]) => onChange(treeData)}
        theme={CustomTheme}
        generateNodeProps={generateNodeProps}
      />
    </div>
  );
}
