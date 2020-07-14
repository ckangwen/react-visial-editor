import * as Ants from 'antd/es';
import _AllComponentConfigs from './componentConfigs'
import antdComponents, { AntdCategory, AntdComponentName } from '@/config/antdComponents';

export const OriginalComponents = {...Ants };
export const AllComponentConfigs = _AllComponentConfigs
export const AllComponentPropConfig = _AllComponentConfigs

export type CollectedComponents = keyof (typeof _AllComponentConfigs)

export const nativeHTMLTag = [
  'div',
  'section',
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'nav',
  'footer'
];

export const blocksCategory = {
  ...antdComponents
};
export type AllBlockCategory = AntdCategory
export type AllBlockName = AntdComponentName

export const iframeSrcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="referrer" content="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title></title>
     <link rel="stylesheet" href="./vendors.chunk.css">
     <link rel="stylesheet" href="./antdesigns.chunk.css">
     <link rel="stylesheet" href="./umi.css">
     <link rel="stylesheet" href="./antd.min.css">
     <script src="./antd.min.js"></script>
</head>
<body>
<div style="height: 100%;overflow: hidden;" id="dnd-container">
</div>
</body>
</html>
`;

export const treeContextmenuKey = 'dom-tree-contextmenu-key';
