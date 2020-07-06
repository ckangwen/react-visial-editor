import { ComponentConfig, PROPS_TYPES } from '@/types';

const DEFAULT_CONFIG = {
  span: {
    title: '占位',
    type: PROPS_TYPES.number,
  },
  offset: {
    title: '偏移量',
    type: PROPS_TYPES.number,
  },
};

const Divider: ComponentConfig = {
  propsConfig: {
    dashed: {
      title: '是否虚线',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    children: {
      title: '分割线标题',
      type: PROPS_TYPES.string,
    },
    orientation: {
      title: '分割线标题位置',
      type: PROPS_TYPES.enum,
      enum: ['left', 'right', 'center'],
      default: '',
    },
    type: {
      title: '显示类型',
      description: '水平还是垂直类型',
      type: PROPS_TYPES.enum,
      enum: ['horizontal', 'vertical'],
      default: 'horizontal',
    },
  },
}

export default Divider
