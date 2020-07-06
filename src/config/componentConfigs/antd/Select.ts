import { PROPS_TYPES, ComponentConfig } from '@/types';


const Select: ComponentConfig = {
  propsConfig: {
    allowClear: {
      title: '支持清除',
      type: PROPS_TYPES.boolean,
    },
    autoClearSearchValue: {
      title: '是否在选中项后清空搜索框',
      description: '是否在选中项后清空搜索框，只在 mode 为 muldescriptionle 或 tags 时有效。',
      type: PROPS_TYPES.boolean,
    },
    autoFocus: {
      title: '默认获取焦点',
      type: PROPS_TYPES.boolean,
    },
    defaultActiveFirstOption: {
      title: '是否默认高亮第一个选项',
      type: PROPS_TYPES.boolean,
    },
    default: {
      title: '输入框默认值',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray, PROPS_TYPES.number, PROPS_TYPES.numberArray],
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    dropdownClassName: {
      title: '下拉菜单的 className 属性',
      type: PROPS_TYPES.string,
    },
    dropdownMatchSelectWidth: {
      title: '下拉菜单和选择器同宽',
      type: PROPS_TYPES.boolean,
    },
    dropdownStyle: {
      title: '下拉菜单的 style 属性',
      type: [PROPS_TYPES.object, PROPS_TYPES.json],
    },
    dropdownMenuStyle: {
      title: 'dropdown 菜单自定义样式',
      type: [PROPS_TYPES.object, PROPS_TYPES.json],
    },
    filterOption: {
      title: '是否根据输入项进行筛选',
      description: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.function],
    },
    firstActiveValue: {
      title: '默认高亮的选项',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray],
    },
    getPopupContainer: {
      title: '菜单渲染父节点',
      description: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      type: PROPS_TYPES.function,
    },
    titleInValue: {
      title: '是否把每个选项的 title 包装到 value 中',
      description: '是否把每个选项的 title 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, title: ReactNode} 的格式',
      type: PROPS_TYPES.boolean,
    },
    maxTagCount: {
      title: '最多显示多少个 tag',
      type: PROPS_TYPES.number,
    },
    maxTagTextLength: {
      title: '最大显示的 tag 文本长度',
      type: PROPS_TYPES.number,
    },

    maxTagPlaceholder: {
      title: '隐藏 tag 时显示的内容',
      type: PROPS_TYPES.function,
    },
    mode: {
      title: '设置select的模式',
      type: PROPS_TYPES.enum,
      enum: ['muldescriptionle', 'tags'],
    },
    notFoundContent: {
      title: '当下拉列表为空时显示的内容',
      type: PROPS_TYPES.string,
    },
    optionFilterProp: {
      title: '搜索过滤option',
      description: '搜索时过滤对应的option属性，如设置为children表示对内嵌内容进行搜索',
      type: PROPS_TYPES.string,
    },
    optiontitleProp: {
      title: '回填到选择框的 Option 的属性值',
      description: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value',
      type: PROPS_TYPES.string,
    },
    placeholder: {
      title: 'placeholder',
      type: PROPS_TYPES.string,
      default: '请选择',
    },
    showArrow: {
      title: '是否显示下拉小箭头',
      type: PROPS_TYPES.boolean,
    },
    showSearch: {
      title: '使单选模式可搜索',
      type: PROPS_TYPES.boolean,
      default: false,
    },

    size: {
      title: '选择框大小',
      type: PROPS_TYPES.enum,
      enum: ['large', 'small', 'default'],
    },
    tokenSeparators: {
      title: '分隔符',
      description: '在 tags 和 muldescriptionle 模式下自动分词的分隔符',
      type: PROPS_TYPES.stringArray,
    },
    value: {
      title: '指定当前选中的条目',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray, PROPS_TYPES.number, PROPS_TYPES.numberArray],
    },
    onBlur: {
      title: '失去焦点时的回调',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: 'input的value变化',
      description: '选中option，或input的value变化（combobox 模式下）时',
      type: PROPS_TYPES.function,
    },
    onDeselect: {
      title: '取消选中时调用',
      description: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 muldescriptionle 或 tags 模式下生效',
      type: PROPS_TYPES.function,
    },
    onFocus: {
      title: '	获取焦点时的回调',
      type: PROPS_TYPES.function,
    },
    onInputKeyDown: {
      title: '按键按下时回调',
      type: PROPS_TYPES.function,
    },
    onMouseEnter: {
      title: '鼠标移入时回调',
      type: PROPS_TYPES.function,
    },
    onMouseLeave: {
      title: '鼠标移出时回调',
      type: PROPS_TYPES.function,
    },
    onPopupScroll: {
      title: '下拉列表滚动时的回调',
      type: PROPS_TYPES.function,
    },
    onSearch: {
      title: '文本框值变化时回调',
      type: PROPS_TYPES.function,
    },
    onSelect: {
      title: '被选中时调用',
      type: PROPS_TYPES.function,
    },
    defaultOpen: {
      title: '是否默认展开下拉菜单',
      type: PROPS_TYPES.boolean,
    },
    open: {
      title: '是否展开下拉菜单',
      type: PROPS_TYPES.boolean,
    },
    onDropdownVisibleChange: {
      title: '展开下拉菜单的回调',
      type: PROPS_TYPES.function,
    },
    loading: {
      title: '加载中状态',
      type: PROPS_TYPES.boolean,
    },
  },
};

const OptGroup: ComponentConfig = {
  propsConfig: {
    key: {
      title: 'key',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '组名',
      type: PROPS_TYPES.string,
    },
  },
};
const Option: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: 'key',
      description: '和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '选中该 Option 后，Select 的 title',
      type: PROPS_TYPES.string,
    },
    value: {
      title: '默认根据此属性值进行筛选',
      type: [PROPS_TYPES.string, PROPS_TYPES.number],
    },
  },
};
export default {
  Select,
  'Select.OptGroup': OptGroup,
  'Select.Option': Option,
};
