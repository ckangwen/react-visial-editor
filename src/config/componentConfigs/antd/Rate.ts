import { PROPS_TYPES, ComponentConfig } from '@/types';


const Rate: ComponentConfig = {
  propsConfig: {
    allowClear: {
      title: '是否点击清除',
      description: '是否允许再次点击后清除',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    allowHalf: {
      title: '是否允许半选',
      type: PROPS_TYPES.boolean,
    },
    autoFocus: {
      title: '自动获取焦点',
      type: PROPS_TYPES.boolean,
    },
    count: {
      title: '星星总数',
      type: PROPS_TYPES.number,
    },
    default: {
      title: '默认值',
      type: PROPS_TYPES.number,
    },
    disabled: {
      title: '是否禁用',
      description: '只读，无法进行交互',
      type: PROPS_TYPES.boolean,
    },
    tooldescriptions: {
      title: '自定义每项的提示信息',
      type: PROPS_TYPES.stringArray,
    },
    value: {
      title: '当前数，受控值',
      type: PROPS_TYPES.number,

    },
    onBlur: {
      title: '失去焦点时的回调',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '选择时回调',
      type: PROPS_TYPES.function,
    },
    onFocus: {
      title: '获取焦点时的回调',
      type: PROPS_TYPES.function,
    },
    onHoverChange: {
      title: '鼠标经过时回调',
      description: '鼠标经过时数值变化',
      type: PROPS_TYPES.function,
    },
    onKeyDown: {
      title: '按键回调',
      type: PROPS_TYPES.function,
    },
  },
};
export default Rate;
