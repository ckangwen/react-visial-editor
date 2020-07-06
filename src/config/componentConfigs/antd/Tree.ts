import { PROPS_TYPES, ComponentConfig } from '@/types';


const Tree: ComponentConfig = {
  propsConfig: {
    autoExpandParent: {
      title: '父节点展开',
      description: '是否自动展开父节点',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    checkable: {
      title: '节点前添加复选框',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    defaultExpandAll: {
      title: '展开所有树节点',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    disabled: {
      title: '禁用树',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    muldescriptionle: {
      title: '支持多选',
      description: '支持点选多个节点（节点本身）',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    onSelect: {
      title: '点击树节点',
      type: PROPS_TYPES.function,
    },
  },
};

const TreeNode: ComponentConfig = {
  propsConfig: {
    autoExpandParent: {
      title: '父节点展开',
      description: '是否自动展开父节点',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    checkable: {
      title: '节点前添加复选框',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    defaultExpandAll: {
      title: '展开所有树节点',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    disabled: {
      title: '禁用树',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    muldescriptionle: {
      title: '支持多选',
      description: '支持点选多个节点（节点本身）',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    onSelect: {
      title: '点击树节点',
      type: PROPS_TYPES.function,
    },
  },

};

export default {
  Tree,
  'Tree.TreeNode': TreeNode,
};
