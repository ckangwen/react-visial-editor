import { ComponentConfig, PROPS_TYPES } from '@/types';

const InputNumber: ComponentConfig = {

  propsConfig: {
    autoFocus: {
      title: '是否自动获取焦点',
      type: PROPS_TYPES.boolean,
    },
    defaultValue: {
      title: '初始值',
      type: PROPS_TYPES.number,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    formatter: {
      title: '展示值格式',
      description: '指定输入框展示值的格式',
      type: PROPS_TYPES.function,
    },
    max: {
      title: '最大值',
      type: PROPS_TYPES.number,
    },
    min: {
      title: '最小值',
      type: PROPS_TYPES.number,
    },
    parser: {
      title: '指定从 formatter 里转换回数字的方式',
      description: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用',
      type: PROPS_TYPES.function,
    },
    precision: {
      title: '数值精度',
      type: PROPS_TYPES.number,
    },
    decimalSeparator: {
      title: '小数点',
      type: PROPS_TYPES.string,
    },
    size: {
      title: '输入框大小',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
      default: 'default',
    },
    step: {
      title: '步差',
      description: '每次改变步数，可以为小数',
      type: [PROPS_TYPES.string, PROPS_TYPES.number],
      default: '1',
    },
    value: {
      title: '当前值',
      type: PROPS_TYPES.number,
    },
    onChange: {
      title: '变化回调',
      type: PROPS_TYPES.function,
    },
    onPressEnter: {
      title: '按下回车的回调',
      type: PROPS_TYPES.function,
    },
  },
};

export default InputNumber;
