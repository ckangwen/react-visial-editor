import { ComponentConfig, PROPS_TYPES } from '@/types';

const BackTop: ComponentConfig = {
  propsConfig: {
    target: {
      title: '监听滚动事件元素',
      description: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      type: PROPS_TYPES.function,
    },
    children: {
      title: '回到顶部按钮',
      type: PROPS_TYPES.string,
    },
    visibilityHeight: {
      title: '滚动高度',
      description: '	滚动高度达到此参数值才出现 BackTop',
      type: PROPS_TYPES.number,
      default: 400,
    },
    onClick: {
      title: '点击回调',
      description: '点击按钮的回调函数',
      type: PROPS_TYPES.function,
    },
  },
}

export default BackTop
