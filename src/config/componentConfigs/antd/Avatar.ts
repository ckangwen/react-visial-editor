import { ComponentConfig, PROPS_TYPES } from '@/types';

const Avatar: ComponentConfig = {
  propsConfig: {
    icon: {
      title: '设置头像的图标类型',
      description: '设置头像的图标类型，参考 Icon 组件',
      type: PROPS_TYPES.string,
    },
    shape: {
      title: '指定头像的形状',
      type: PROPS_TYPES.enum,
      enum: ['circle', 'square'],
      default: 'circle',
    },

    src: {
      title: '上传图像',
      type: PROPS_TYPES.string,
    },
    alt: {
      title: '替代文本',
      description: '图像未显示时的替代文本',
      type: PROPS_TYPES.string,
    },
    size: {
      title: '头像大小',
      type: PROPS_TYPES.number,
    },
    onError: {
      title: '图片加载失败的事件',
      description: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
      type: PROPS_TYPES.function,
    },
  },
};

export default Avatar;
