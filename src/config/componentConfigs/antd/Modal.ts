import { PROPS_TYPES, ComponentConfig } from '@/types';


const Modal: ComponentConfig = {
  propsConfig: {
    afterClose: {
      title: 'Modal关闭回调',
      description: 'Modal 完全关闭后的回调',
      type: PROPS_TYPES.function,
    },
    footer: {
      title: '弹窗底部',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '标题内容',
      type: PROPS_TYPES.string,
    },
    bodyStyle: {
      title: 'Modal body样式',
      type: PROPS_TYPES.object,
    },
    cancelText: {
      title: '取消按钮文字',
      description: '取消按钮文字',
      type: PROPS_TYPES.string,
      default: '取消',
    },
    centered: {
      title: '垂直居中展示',
      description: '垂直居中展示 Modal',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    closable: {
      title: '显示关闭按钮',
      description: '是否显示右上角的关闭按钮',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    confirmLoading: {
      title: '按钮loading',
      description: '确定按钮 loading',
      type: PROPS_TYPES.boolean,
    },
    destroyOnClose: {
      title: '关闭销毁元素',
      description: '关闭时销毁 Modal 里的子元素',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    getContainer: {
      title: '指定挂载节点',
      description: '指定 Modal 挂载的 HTML 节点',
      type: PROPS_TYPES.function,
    },
    keyboard: {
      title: '键盘esc关闭',
      description: '是否支持键盘esc关闭',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    mask: {
      title: '是否展示遮罩',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    maskClosable: {
      title: '点击蒙层关闭',
      description: '点击蒙层是否允许关闭',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    maskStyle: {
      title: '遮罩样式',
      type: PROPS_TYPES.object,
    },
    okText: {
      title: '确认按钮文字',
      type: PROPS_TYPES.string,
      default: '确定',
    },
    okType: {
      title: '确认按钮类型',
      type: PROPS_TYPES.string,
      default: 'primary',
    },
    style: {
      title: '设置浮层样式',
      description: '可用于设置浮层的样式，调整浮层位置等',
      type: PROPS_TYPES.object,
    },
    width: {
      title: '宽度',
      description: '输入数字或者百分数',
      type: PROPS_TYPES.string,
      default: '520px',
    },
    wrapClassName: {
      title: '外层容器类名',
      description: '对话框外层容器的类名',
      type: PROPS_TYPES.string,
    },
    zIndex: {
      title: '设置样式层级',
      description: '设置 Modal 的 z-index',
      type: PROPS_TYPES.number,
      default: 1000,
    },
    onCancel: {
      title: '取消按钮回调',
      description: '点击遮罩层或右上角叉或取消按钮的回调',
      type: PROPS_TYPES.function,
    },
    onOk: {
      title: '点击确定回调',
      type: PROPS_TYPES.function,
    },
  },
};

export default Modal;
