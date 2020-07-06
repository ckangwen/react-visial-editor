import { ComponentConfig, PROPS_TYPES } from '@/types';

const Carousel: ComponentConfig = {
  propsConfig: {
    afterChange: {
      title: '切换面板后的回调',
      type: PROPS_TYPES.function,
    },
    autoplay: {
      title: '自动切换',
      type: PROPS_TYPES.boolean,
    },
    beforeChange: {
      title: '切换面板前的回调',
      type: PROPS_TYPES.function,
    },
    dots: {
      title: '显示面板指示点',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    easing: {
      title: '动画效果',
      type: PROPS_TYPES.enum,
      enum: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
      default: 'linear',
    },
    effect: {
      title: '动画效果函数',
      type: PROPS_TYPES.enum,
      enum: ['scrollx', 'fade'],
      default: 'scrollx',
    },
    vertical: {
      title: '垂直显示',
      type: PROPS_TYPES.boolean,
    },
  },
}

export default Carousel
