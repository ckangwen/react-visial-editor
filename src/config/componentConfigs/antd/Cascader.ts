import { ComponentConfig, PROPS_TYPES } from '@/types';

const Cascader: ComponentConfig = {
  propsConfig: {
    allowClear: {
      title: '是否支持清除',
      type: PROPS_TYPES.boolean,
    },
    autoFocus: {
      title: '自动获取焦点',
      type: PROPS_TYPES.boolean,
    },
    changeOnSelect: {
      title: '是否变化',
      description: '当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示',
      type: PROPS_TYPES.boolean,
    },
    default: {
      title: '默认选中项',
      type: PROPS_TYPES.stringArray,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    expandTrigger: {
      title: '菜单展现style',
      description: '次级菜单的展开方式，可选 \'click\' 和 \'hover\'',
      type: PROPS_TYPES.enum,
      enum: ['click', 'hover'],
      default: 'click',
    },
    fieldNames: {
      title: 'options中参数',
      description: '自定义 options 中 title name children 的字段（注意，3.7.0 之前的版本为 filedNames）',
      type: PROPS_TYPES.object,
      properties: {
        title: {
          title: '标签',
          type: PROPS_TYPES.string,
          unDelete: true,
        },
        name: {
          title: '名称',
          type: PROPS_TYPES.string,
          unDelete: true,
        },
        children: {
          title: '子名称',
          type: PROPS_TYPES.string,
          unDelete: true,
        },
      },
      default: {
        title: 'name',
        value: 'code',
        children: 'items',
      },
    },
    getPopupContainer: {
      title: '菜单渲染父节点',
      description:
        '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      type: PROPS_TYPES.function,
    },
    loadData: {
      title: '动态加载',
      description: '用于动态加载选项，无法与 showSearch 一起使用',
      type: PROPS_TYPES.function,
    },
    notFoundContent: {
      title: '空数据内容',
      description: '当下拉列表为空时显示的内容',
      type: PROPS_TYPES.string,
    },
    options: {
      title: '可选数据源',
      type: PROPS_TYPES.objectArray,
      properties: {
        value: {
          label: 'value',
          type: PROPS_TYPES.string,
        },
        disabled: {
          label: '禁用',
          type: PROPS_TYPES.boolean,
        },
        children: {
          label: 'children',
          type: PROPS_TYPES.objectArray,
        },
      }
    },
    placeholder: {
      title: '输入框占位文本',
      type: PROPS_TYPES.string,
    },
    popupClassName: {
      title: '浮层类名',
      description: '自定义浮层类名',
      type: PROPS_TYPES.string,
    },
    popupPlacement: {
      title: '浮层位置',
      description: '浮层预设位置：bottomLeft bottomRight topLeft topRight',
      type: PROPS_TYPES.enum,
      enum: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      default: 'bottomLeft',
    },
    popupVisible: {
      title: '控制浮层显隐',
      type: PROPS_TYPES.boolean,
    },
    showSearch: {
      title: '显示搜索框',
      description: '在选择框中显示搜索框',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.object],
      properties: {
        filter: {
          title: 'filter',
          description: '接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。',
          type: PROPS_TYPES.function,
          placeholder: '(inputValue, path)=>true',
        },
        limit: {
          title: '搜索结果展示数量',
          type: [PROPS_TYPES.boolean, PROPS_TYPES.number],
        },
        matchInputWidth: {
          title: '搜索结果列表是否与输入框同宽',
          type: PROPS_TYPES.boolean,
        },
        render: {
          title: '用于渲染 filter 后的选项',
          type: PROPS_TYPES.function,
          placeholder: '(inputValue, path)=><div/>',
        },
        sort: {
          title: '用于排序 filter 后的选项',
          type: PROPS_TYPES.function,
          placeholder: '(a, b, inputValue)=>{}',

        },
      },
    },
    size: {
      title: '输入框大小',
      type: PROPS_TYPES.enum,
      description: '输入框大小，可选 large default small',
      enum: ['large', 'default', 'small'],
      default: 'default',
    },
    value: {
      title: '指定选中项',
      type: PROPS_TYPES.stringArray,
    },
    onChange: {
      title: '选择完成后的回调',
      type: PROPS_TYPES.function,
    },
    onPopupVisibleChange: {
      title: '显示/隐藏浮层的回调',
      type: PROPS_TYPES.function,
    },
  },
}

export default Cascader
