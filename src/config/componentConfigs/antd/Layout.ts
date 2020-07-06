import { PROPS_TYPES, ComponentConfig } from '@/types';

const Layout: ComponentConfig = {
  propsConfig: {
    hasSider: {
      title: '子元素是否有sider',
      description: '表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动',
      type: PROPS_TYPES.boolean,
    },
    className: {
      title: '类名',
      type: PROPS_TYPES.stringArray,
    },
  },
};

const Header: ComponentConfig = {
  propsConfig: {
    className: {
      title: '样式类名',
      type: PROPS_TYPES.string,
    },
  },
};
const Footer: ComponentConfig = {
  propsConfig: {
    className: {
      title: '样式类名',
      type: PROPS_TYPES.string,
    },
  },
};
const Sider: ComponentConfig = {
  propsConfig: {
    trigger: {
      title: 'trigger',
      description: '自定义 trigger，设置为 null 时隐藏 trigger',
      type: PROPS_TYPES.string,
    },
    breakpoint: {
      title: '断点触发',
      description: '触发响应式布局的断点',
      type: PROPS_TYPES.enum,
      enum: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    collapsed: {
      title: '当前收起状态',
      type: PROPS_TYPES.boolean,
    },
    collapsedWidth: {
      title: '收缩宽度',
      description: '收缩宽度，设置为 0 会出现特殊 trigger',
      type: PROPS_TYPES.number,
    },
    collapsible: {
      title: '是否可收起',
      type: PROPS_TYPES.boolean,
    },
    defaultCollapsed: {
      title: '是否默认收起',
      type: PROPS_TYPES.boolean,
    },
    reverseArrow: {
      title: '翻转折叠提示箭头的方向',
      description: '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用',
      type: PROPS_TYPES.boolean,
    },
    theme: {
      title: '主题颜色',
      type: PROPS_TYPES.enum,
      enum: ['light', 'dark'],
    },

    width: {
      title: '宽度',
      type: PROPS_TYPES.number,
    },
    onCollapse: {
      title: '收起时的回调函数',
      description: '展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发',
      type: PROPS_TYPES.function,
    },
    onBreakpoint: {
      title: '触发响应式布局断点时的回调',
      type: PROPS_TYPES.function,
    },
    zeroWidthTriggerStyle: {
      title: 'trigger 的样式',
      description: '指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式',
      type: PROPS_TYPES.object,
    },
  },
};
const Content: ComponentConfig = {
  propsConfig: {
    className: {
      title: '样式类名',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Layout,
  'Layout.Header': Header,
  'Layout.Footer': Footer,
  'Layout.Content': Content,
  'Layout.Sider': Sider,
};
