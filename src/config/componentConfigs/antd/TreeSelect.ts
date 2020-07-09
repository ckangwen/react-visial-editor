import { PROPS_TYPES, ComponentConfig } from '@/types';
import { TreeSelect as AntTreeSelect } from 'antd'


const TreeSelect: ComponentConfig = {
  propsConfig: {
    allowClear: {
      title: '显示清除按钮',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    autoClearSearchValue: {
      title: '自动清空搜索框',
      description: '当多选模式下值被选择，自动清空搜索框',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    default: {
      title: '指定默认选中的条目',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray],
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    dropdownClassName: {
      title: '下拉菜单的 className 属性',
      type: PROPS_TYPES.string,
    },
    dropdownMatchSelectWidth: {
      title: '下拉菜单和选择器同宽',
      description: '下拉菜单和选择器同宽。默认将设置 min-width。',
      type: PROPS_TYPES.boolean,
    },
    dropdownStyle: {
      title: '下拉菜单的样式',
      type: [PROPS_TYPES.json, PROPS_TYPES.objectArray],
    },
    filterTreeNode: {
      title: '是否根据输入项进行筛选',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.function],
    },
    getPopupContainer: {
      title: '菜单渲染父节点',
      description: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
      type: PROPS_TYPES.function,
    },
    titleInValue: {
      title: '是否把每个选项的 title 包装到 value 中',
      description: '是否把每个选项的 title 包装到 value 中，会把 value 类型从 string 变为 {value: string, title: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式',
      type: PROPS_TYPES.boolean,
    },
    loadData: {
      title: '异步加载数据',
      type: PROPS_TYPES.function,
    },
    maxTagCount: {
      title: '最大tag数',
      description: '最多显示多少个 tag',
      type: PROPS_TYPES.number,
    },
    maxTagPlaceholder: {
      title: '隐藏 tag 时显示的内容',
      type: PROPS_TYPES.function,
    },
    muldescriptionle: {
      title: '支持多选',
      description: '支持多选（当设置 treeCheckable 时自动变为true）',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    placeholder: {
      title: '选择框默认文字',
      type: PROPS_TYPES.string,
    },
    searchPlaceholder: {
      title: '搜索框默认文字',
      type: PROPS_TYPES.string,
    },
    searchValue: {
      title: '搜索框的值',
      description: '搜索框的值，可以通过 onSearch 获取用户输入',
      type: PROPS_TYPES.string,
    },

    treeIcon: {
      title: '是否展示 TreeNode title 前的图标',
      description: '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
      type: PROPS_TYPES.boolean,
    },
    showCheckedStrategy: {
      title: '定义选中项回填的方式',
      description: '定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.',
      type: PROPS_TYPES.enum,
      enum: [AntTreeSelect.SHOW_ALL, AntTreeSelect.SHOW_CHILD, AntTreeSelect.SHOW_PARENT],
    },
    showSearch: {
      title: '显示搜索框',
      description: '在下拉中显示搜索框(仅在单选模式下生效)',
      type: PROPS_TYPES.boolean,
    },


    size: {
      title: '选择框大小',
      type: PROPS_TYPES.enum,
      enum: ['default', 'small', 'large'],
    },
    treeCheckable: {
      title: '显示 checkbox',
      type: PROPS_TYPES.boolean,
    },
    treeCheckStrictly: {
      title: 'treeCheckStrictly',
      description: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 titleInValue 强制为 true',
      type: PROPS_TYPES.boolean,
    },
    treeData: {
      title: 'treeNodes 数据',
      description: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）',
      type: PROPS_TYPES.objectArray,
    },
    treeDataSimpleMode: {
      title: 'treeDataSimpleMode',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.object],
    },
    treeDefaultExpandAll: {
      title: '树节点展开',
      description: '默认展开所有树节点',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    treeDefaultExpandedKeys: {
      title: '默认展开的树节点',
      type: PROPS_TYPES.stringArray,
    },
    treeExpandedKeys: {
      title: '设置展开的树节点',
      type: PROPS_TYPES.stringArray,
    },
    treeNodeFilterProp: {
      title: '输入项过滤对应的 treeNode 属性',
      type: PROPS_TYPES.string,
    },
    treeNodetitleProp: {
      title: '作为显示的 prop 设置',
      type: PROPS_TYPES.string,
    },
    value: {
      title: '指定当前选中的条目',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray],
    },
    onChange: {
      title: '选中节点函数',
      description: '选中树节点时调用此函数',
      type: PROPS_TYPES.function,
    },
    onSearch: {
      title: '数值变化函数',
      description: '文本框值变化时回调函数名称',
      type: PROPS_TYPES.function,
    },
    onSelect: {
      title: '被选中函数',
      type: PROPS_TYPES.function,
    },
    onTreeExpand: {
      title: '展示节点时调用',
      type: PROPS_TYPES.function,
    },
  },
};

const TreeNode: ComponentConfig = {
  propsConfig: {
    selectable: {
      title: '是否可选',
      type: PROPS_TYPES.boolean,
    },
    checkable: {
      title: 'checkable',
      description: '当树为 checkable 时，设置独立节点是否展示 Checkbox',
      type: PROPS_TYPES.boolean,
    },
    disableCheckbox: {
      title: '禁掉 checkbox',
      type: PROPS_TYPES.boolean,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    isLeaf: {
      title: '是否是叶子节点',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: 'key',
      description: '此项必须设置（其值在整个树范围内唯一）',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '树节点显示的内容',
      type: PROPS_TYPES.string,
    },
    value: {
      title: 'value',
      description: '默认根据此属性值进行筛选（其值在整个树范围内唯一）',
      type: PROPS_TYPES.string,

    },
  },

};
export default {
  TreeSelect,
  'TreeSelect.TreeNode': TreeNode,
};
