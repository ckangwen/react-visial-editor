import { ComponentConfig, PROPS_TYPES } from '@/types';

const Anchor: ComponentConfig = {
  propsConfig: {
    affix: {
      title: '固定模式',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    bounds: {
      title: '锚点区域边界',
      type: PROPS_TYPES.number,
      default: 5,
    },
    offsetBottom: {
      title: '距底部距离',
      description: '距离窗口底部达到指定偏移量后触发',
      type: PROPS_TYPES.number,
    },
    offsetTop: {
      title: '距顶部距离',
      description: '距离窗口顶部达到指定偏移量后触发',
      type: PROPS_TYPES.number,
    },
    onClick: {
      title: '点击事件',
      type: PROPS_TYPES.function,
    },
  },
}
