import { ComponentConfig, PROPS_TYPES } from '@/types';

const DEFAULT_CONFIG = {
  span: {
    label: '占位',
    type: PROPS_TYPES.number,
  },
  offset: {
    label: '偏移量',
    type: PROPS_TYPES.number,
  },
};

const Affix: ComponentConfig = {
  propsConfig: {
    offset: {
      title: '间隔格数',
      description: '栅格左侧的间隔格数，间隔内不可以有栅格',
      type: PROPS_TYPES.number,
    },
    order: {
      title: '栅格顺序',
      description: '栅格顺序，flex 布局模式下有效',
      type: PROPS_TYPES.number,
    },
    pull: {
      title: '左移动格数',
      description: '栅格向左移动格数',
      type: PROPS_TYPES.number,
    },
    push: {
      title: '右移动格数',
      description: '栅格向右移动格数',
      type: PROPS_TYPES.number,
    },
    span: {
      title: '占位格数',
      description: '栅格占位格数，为 0 时相当于 display: none',
      type: PROPS_TYPES.number,
    },
    xs: {
      title: 'xs',
      description: '<576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
    sm: {
      title: 'sm',
      description: '<576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
    md: {
      title: 'md',
      description: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
    lg: {
      title: 'lg',
      description: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
    xl: {
      title: 'xl',
      description: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
    xxl: {
      title: 'xxl',
      description: '≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象',
      type: [PROPS_TYPES.number, PROPS_TYPES.object],
      properties: {
        ...DEFAULT_CONFIG,
      },
    },
  },
}

export default Affix
