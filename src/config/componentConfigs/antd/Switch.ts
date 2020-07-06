import { PROPS_TYPES, ComponentConfig } from '@/types';


const Switch: ComponentConfig = {
  propsConfig: {
    autoFocus: {
      title: '自动获焦点',
      type: PROPS_TYPES.boolean,
    },
    checked: {
      title: '当前是否选中',
      type: PROPS_TYPES.boolean,
    },
    checkedChildren: {
      title: '选中的内容',
      type: PROPS_TYPES.string,
    },
    defaultChecked: {
      title: '初始是否选中',
      type: PROPS_TYPES.boolean,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    loading: {
      title: '加载动画',
      description: '加载中的开关',
      type: PROPS_TYPES.boolean,
    },
    size: {
      title: '开关大小',
      description: '开关大小，可选值：default small',
      type: PROPS_TYPES.enum,
      enum: ['default', 'small'],
      default: 'default',
    },
    unCheckedChildren: {
      title: '未选时内容',
      type: PROPS_TYPES.string,
    },
    onChange: {
      title: '开关改变回调',
      type: PROPS_TYPES.function,
    },
    onClick: {
      title: '点击时回调函数',
      type: PROPS_TYPES.function,
    },
  },
};

export default Switch;
