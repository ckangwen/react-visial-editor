import { ComponentConfig, PROPS_TYPES } from '@/types';

const Badge: ComponentConfig = {
  propsConfig: {
    color: {
      title: '自定义小圆点的颜色',
      type: PROPS_TYPES.string,
    },
    count: {
      title: '展示的数字',
      description: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏',
      type: PROPS_TYPES.number,
    },
    dot: {
      title: '只展示小红点',
      description: '不展示数字，只有一个小红点',
      type: PROPS_TYPES.boolean,
    },
    offset: {
      title: '位置偏移',
      description: '设置状态点的位置偏移，格式为 [x, y]',
      type: PROPS_TYPES.numberArray,
    },
    overflowCount: {
      title: '展示封顶的数字值',
      type: PROPS_TYPES.number,
    },
    showZero: {
      title: '数值为 0 时，是否展示',
      description: '当数值为 0 时，是否展示 Badge',
      type: PROPS_TYPES.boolean,
    },
    status: {
      title: '设置 Badge 为状态点',
      description: '设置 Badge 为状态点',
      type: PROPS_TYPES.enum,
      enum: ['success', 'processing', 'default', 'error', 'warning'],
    },
    text: {
      title: '状态点的文本',
      description: '在设置了 status 的前提下有效，设置状态点的文本',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '鼠标悬浮文字',
      description: '设置鼠标放在状态点上时显示的文字	',
      type: PROPS_TYPES.string,
    },
  },
}

export default Badge
