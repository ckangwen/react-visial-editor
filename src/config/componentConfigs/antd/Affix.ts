import { ComponentConfig, PROPS_TYPES } from '@/types';

const Affix: ComponentConfig = {
  propsConfig: {
    offsetBottom: {
      title: '达到偏移量后触发',
      description: '距离窗口底部达到指定偏移量后触发',
      type: PROPS_TYPES.number,
    },
    offsetTop: {
      title: '达到偏移量后触发',
      description: '距离窗口顶部达到指定偏移量后触发',
      type: PROPS_TYPES.number,
    },
    target: {
      title: '监听滚动事件的元素',
      description: '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '状态改变时触发',
      description: '固定状态改变时触发的回调函数',
      type: PROPS_TYPES.function,
    },
  },
}

export default Affix
