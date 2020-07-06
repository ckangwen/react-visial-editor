import { ComponentConfig, PROPS_TYPES } from '@/types';

const Drawer: ComponentConfig = {
  propsConfig: {
    closable: {
      title: '是否显示按钮',
      description: '是否显示右上角的关闭按钮',
      type: PROPS_TYPES.boolean,
    },
    destroyOnClose: {
      title: '销毁子元素',
      description: '关闭时销毁 Drawer 里的子元素',
      type: PROPS_TYPES.boolean,
    },
    maskClosable: {
      title: '是否允许关闭',
      description: '点击蒙层是否允许关闭',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    mask: {
      title: '是否展示遮罩',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    maskStyle: {
      title: '遮罩样式',
      type: PROPS_TYPES.object,
    },
    style: {
      title: 'Drawer 的样式',
      description: '可用于设置 Drawer 的样式',
      type: PROPS_TYPES.object,
    },
    title: {
      title: '标题',
      type: PROPS_TYPES.string,
    },
    visible: {
      title: '是否可见',
      description: 'Drawer 是否可见',
      type: PROPS_TYPES.boolean,
    },
    width: {
      title: '宽度',
      type: PROPS_TYPES.string,
    },
    height: {
      title: '高度',
      description: '高度, 在 抽屉的方向 为 top 或 bottom 时使用',
      type: PROPS_TYPES.string,
    },
    zIndex: {
      title: 'z-index',
      description: '设置 Drawer 的 z-index',
      type: PROPS_TYPES.number,
    },
    placement: {
      title: '抽屉的方向',
      type: PROPS_TYPES.enum,
      enum: ['top', 'right', 'bottom', 'left'],
      default: 'left',
    },
    onClose: {
      title: 'onClose',
      description: '点击遮罩层或右上角叉或取消按钮的回调',
      type: PROPS_TYPES.function,
    },
  },
}

export default Drawer
