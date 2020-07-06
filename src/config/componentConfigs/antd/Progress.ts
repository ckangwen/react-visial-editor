import { PROPS_TYPES, ComponentConfig } from '@/types';


const Progress: ComponentConfig = {
  propsConfig: {
    percent: {
      title: '百分比',
      description: '百分比',
      type: PROPS_TYPES.number,
      default: 50,
    },
    showInfo: {
      title: '进度数值显示',
      description: '是否显示进度数值或状态图标',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    status: {
      title: '状态',
      description: '	状态，可选：success exception active',
      type: PROPS_TYPES.enum,
      enum: ['success', 'exception', 'active'],
    },
    type: {
      title: '类型',
      description: '类型，可选 line circle dashboard',
      type: PROPS_TYPES.enum,
      enum: ['line', 'circle', 'dashboard'],
    },
  },
};

export default Progress;
