import { PROPS_TYPES, ComponentConfig } from '@/types';

const Spin: ComponentConfig = {
  propsConfig: {
    affix: {
      title: '延迟时间',
      description: '延迟显示加载效果的时间（防止闪烁）',
      type: PROPS_TYPES.number,
    },
    size: {
      title: '组件大小',
      type: PROPS_TYPES.enum,
      enum: ['small', 'default', 'large'],
      default: 'default',
    },
    spinning: {
      title: '是否为加载中状态	',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    description: {
      title: '文案',
      description: '当作为包裹元素时，可以自定义描述文案',
      type: PROPS_TYPES.string,
    },
  },
}
export default Spin
