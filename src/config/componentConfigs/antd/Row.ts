import { PROPS_TYPES, ComponentConfig } from '@/types';


const Row: ComponentConfig = {
  propsConfig: {
    align: {
      title: '垂直对齐方式',
      description: 'flex 布局下的垂直对齐方式：top middle bottom',
      type: PROPS_TYPES.enum,
      enum: ['top', 'middle', 'bottom'],
    },
    gutter: {
      title: '栅格间隔',
      description: '栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}',
      type: [PROPS_TYPES.number, PROPS_TYPES.object, PROPS_TYPES.numberArray],
      properties: {
        xs: {
          title: 'xs',
          type: PROPS_TYPES.number,
        },
        sm: {
          title: 'sm',
          type: PROPS_TYPES.number,
        },
        md: {
          title: 'md',
          type: PROPS_TYPES.number,
        },
        lg: {
          title: 'lg',
          type: PROPS_TYPES.number,
        },
        xl: {
          title: 'xl',
          type: PROPS_TYPES.number,
        },
        xxl: {
          title: 'xxl',
          type: PROPS_TYPES.number,
        },
      },
    },
    justify: {
      title: '水平排列方式',
      description: 'flex 布局下的水平排列方式：start end center space-around space-between',
      type: PROPS_TYPES.enum,
      enum: ['start', 'end', 'center', 'space-around', 'space-between'],
    },

    type: {
      title: '布局模式',
      description: '布局模式，可选 flex，现代浏览器 下有效',
      type: PROPS_TYPES.enum,
      enum: ['flex'],
    },

  },
};
export default Row;
