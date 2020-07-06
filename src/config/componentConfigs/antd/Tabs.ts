import { PROPS_TYPES, ComponentConfig } from '@/types';


const Tabs: ComponentConfig = {
  propsConfig: {
    activeKey: {
      title: '激活面板key',
      description: '当前激活 tab 面板的 key',
      type: PROPS_TYPES.string,
    },
    animated: {
      title: '使用动画切换',
      description: '是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    defaultActiveKey: {
      title: '初始选中面板',
      description: '初始化选中面板的 key，如果没有设置 activeKey',
      type: PROPS_TYPES.string,
    },
    hideAdd: {
      title: '隐藏加号图标',
      description: '是否隐藏加号图标，在 type="editable-card" 时有效',
      type: PROPS_TYPES.boolean,
    },
    size: {
      title: '大小',
      description: '大小，提供 large default 和 small 三种大小',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
      default: 'default',
    },
    tabBarGutter: {
      title: 'tabs的间隙',
      description: 'tabs 之间的间隙',
      type: PROPS_TYPES.number,
    },
    tabBarStyle: {
      title: 'tab bar的样式',
      description: 'tab bar 的样式对象',
      type: PROPS_TYPES.object,
    },
    tabPosition: {
      title: '页签位置',
      description: '页签位置，可选值有 top right bottom left',
      type: PROPS_TYPES.enum,
      enum: ['top', 'right', 'bottom', 'left'],
    },
    type: {
      title: '页签类型',
      description: '页签的基本样式，可选 line、card editable-card 类型',
      type: PROPS_TYPES.enum,
      enum: ['line', 'card', 'editable-card'],
    },
    onChange: {
      title: '页签改变回调',
      type: PROPS_TYPES.function,
    },
    onEdit: {
      title: '新增和删除的回调',
      description: '新增和删除页签的回调，在 type="editable-card" 时有效',
      type: PROPS_TYPES.function,
    },
    onNextClick: {
      title: 'next按钮点击回调',
      description: 'next 按钮被点击的回调',
      type: PROPS_TYPES.function,
    },
    onPrevClick: {
      title: 'prev按钮点击回调',
      description: 'prev 按钮被点击的回调',
      type: PROPS_TYPES.function,
    },
    onTabClick: {
      title: 'tab按钮点击回调',
      description: 'tab 按钮被点击的回调',
      type: PROPS_TYPES.function,
    },
    renderTabBar: {
      title: '替换TabBar',
      description: '替换TabBar，用于二次封装标签头',
      type: PROPS_TYPES.function,
    },
  },
};

const TabPane: ComponentConfig = {
  propsConfig: {
    tab: {
      title: '选项卡头显示文字',
      type: PROPS_TYPES.string,
    },
    forceRender: {
      title: '隐藏是否渲染',
      description: '被隐藏时是否渲染 DOM 结构',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: '对应activeKey',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Tabs,
  'Tabs.TabPane': TabPane,
};
