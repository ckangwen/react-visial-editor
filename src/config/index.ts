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



export const treeContextmenuKey = 'dom-tree-contextmenu-key';
