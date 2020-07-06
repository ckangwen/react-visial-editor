import { PROPS_TYPES, ComponentConfig } from '@/types';


const Timeline: ComponentConfig = {
  propsConfig: {
    pending: {
      title: '是否存在或内容',
      description: '指定最后一个幽灵节点是否存在或内容',
      type: PROPS_TYPES.boolean,
    },
    pendingDot: {
      title: '时间图点',
      description: '当最后一个幽灵节点存在時，指定其时间图点',
      type: PROPS_TYPES.string,
    },
    reverse: {
      title: '节点排序',
      description: '节点排序',
      type: PROPS_TYPES.boolean,
    },
    mode: {
      title: '相对位置',
      description: '通过设置 mode 可以改变时间轴和内容的相对位置',
      type: PROPS_TYPES.enum,
      enum: ['left', 'alternate', 'right'],
    },
  },
};
const Item: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    color: {
      title: '指定圆圈颜色',
      type: PROPS_TYPES.string,
    },

    dot: {
      title: '自定义时间轴点',
      type: PROPS_TYPES.string,
    },
    position: {
      title: '自定义节点位置',
      type: PROPS_TYPES.enum,
      enum: ['left', 'right'],
    },
  },
};

export default {
  Timeline,
  'Timeline.Item': Item,
};
