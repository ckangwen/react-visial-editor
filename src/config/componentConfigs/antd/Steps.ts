import { PROPS_TYPES, ComponentConfig } from '@/types';


const Steps: ComponentConfig = {
  propsConfig: {
    type: {
      title: '步骤条类型',
      type: PROPS_TYPES.enum,
      enum: ['default', 'navigation'],
    },
    current: {
      title: '指定当前步骤',
      description: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态',
      type: PROPS_TYPES.number,
    },
    direction: {
      title: '指定步骤条方向',
      description: '指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向',
      type: PROPS_TYPES.enum,
      enum: ['horizontal', 'vertical'],
    },
    titlePlacement: {
      title: '指定标签放置位置',
      description: '指定标签放置位置，默认水平放图标右侧，可选 vertical 放图标下方',
      type: PROPS_TYPES.string,
    },
    progressDot: {
      title: '点状步骤条',
      description: '点状步骤条，可以设置为一个 function，titlePlacement 将强制为 vertical',
      type: PROPS_TYPES.boolean,
    },
    size: {
      title: '指定大小',
      description: '指定大小，目前支持普通（default）和迷你（small）',
      type: PROPS_TYPES.enum,
      enum: ['default', 'small'],
    },
    status: {
      title: '指定当前步骤的状态',
      type: PROPS_TYPES.enum,
      enum: ['wait', 'process', 'finish', 'error'],
    },
    initial: {
      title: '起始序号',
      description: '起始序号，从 0 开始记数',
      type: PROPS_TYPES.number,
    },
    onChange: {
      title: '点击切换步骤时触发',
      type: PROPS_TYPES.function,
    },
  },
};

const Step: ComponentConfig = {
  propsConfig: {
    description: {
      title: '步骤的详情描述',
      type: PROPS_TYPES.string,
    },
    icon: {
      title: '步骤图标的类型',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '标题',
      type: PROPS_TYPES.string,
    },
    subTitle: {
      title: '子标题',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '禁用点击',
      type: PROPS_TYPES.boolean,
    },
    status: {
      title: '指定当前步骤的状态',
      type: PROPS_TYPES.enum,
      enum: ['wait', 'process', 'finish', 'error'],
    },
  },
};

export default {
  Steps,
  'Steps.Step': Step,
};
