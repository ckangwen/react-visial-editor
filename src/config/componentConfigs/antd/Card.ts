import { ComponentConfig, PROPS_TYPES } from '@/types';

const Card: ComponentConfig = {
  propsConfig: {
    extra: {
      title: '卡片右上角的操作区域\t',
      description: '卡片右上角的操作区域',
      type: PROPS_TYPES.string,
    },
    actions: {
      title: '卡片操作组',
      description: '卡片操作组，位置在卡片底部',
      type: PROPS_TYPES.stringArray,
    },
    activeTabKey: {
      title: '当前激活页签',
      description: '当前激活页签的 key	',
      type: PROPS_TYPES.string,
    },
    headStyle: {
      title: '标题样式',
      description: '自定义标题区域样式',
      type: PROPS_TYPES.object,
    },
    bodyStyle: {
      title: '内容样式',
      description: '内容区域自定义样式',
      type: PROPS_TYPES.object,
    },
    bordered: {
      title: '是否有边框',
      type: PROPS_TYPES.boolean,
    },

    defaultActiveTabKey: {
      title: '选中页签',
      description: '初始化选中页签的 key，如果没有设置 activeTabKey',
      type: PROPS_TYPES.string,
    },
    hoverable: {
      title: '鼠标移过时可浮起',
      description: '鼠标移过时可浮起',
      type: PROPS_TYPES.boolean,
    },
    loading: {
      title: '加载中效果',
      description: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
      type: PROPS_TYPES.boolean,
    },
    tabList: {
      title: '页签标题列表',
      description: '页签标题列表',
      type: PROPS_TYPES.objectArray,
      properties: [{
        key: {
          title: 'key',
          type: PROPS_TYPES.string,
        },
      }],
    },
    title: {
      title: '卡片标题',
      type: PROPS_TYPES.string,
    },
    size: {
      title: 'card 的尺寸',
      type: PROPS_TYPES.enum,
      enum: ['default', 'small'],
    },
    type: {
      title: '卡片类型，可设置为 inner 或 不设置',
      type: PROPS_TYPES.string,
    },
  },
}

export default Card
