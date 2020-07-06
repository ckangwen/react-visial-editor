export interface CompSelectedInfo {
  tag: string;
  props: string;
  path: string;
  selectedKey: string;
  compKeys: string[];
}

export type CompKeysProps = string[]

export interface VirtualComp {
  key: string;
  tag: string;
  props: any;
  children?: VirtualComp[]
}

export interface DragDataType {
  defaultProps: any;
  tag: string;
  dragPath: string;
}

export interface DropTargetInfoType {
  path: string;
  tag: string;
  propName: string;
}

export interface ComponentInfoType {
  [componentName: string]: string[]
}

export enum PROPS_TYPES {
  object= 'object',
  objectArray= 'objectArray',
  function= 'function',
  number= 'number',
  numberArray= 'numberArray',
  string= 'string',
  stringArray= 'stringArray',
  enum= 'enum',
  json= 'json',
  boolean= 'boolean',
  reactNode= 'reactNode',
  functionReactNode= 'functionReactNode',
  animate= 'animate',
}

export interface ComponentConfig {
  propsConfig: PropsConfig
}

interface PropsConfig {
  [propName: string]: CompAttrType
}

interface CompAttrType {
  title?: string
  type?: PROPS_TYPES | PROPS_TYPES[]
  description?: string
  enum?: string[]
  properties?: any
  default?: any
  rules?: any[]
}
