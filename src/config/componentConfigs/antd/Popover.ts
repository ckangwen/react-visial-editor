import { PROPS_TYPES, ComponentConfig } from '@/types';


const Popover: ComponentConfig = {
  propsConfig: {
    arrowPointAtCenter: {
      title: '箭头指向中心',
      description: '箭头是否指向目标元素中心，antd@1.11+ 支持',
      type: PROPS_TYPES.boolean,
    },
    autoAdjustOverflow: {
      title: '自动调整位置',
      description: '气泡被遮挡时自动调整位置',
      type: PROPS_TYPES.boolean,
    },
    mouseEnterDelay: {
      title: '鼠标移入后延时',
      description: '鼠标移入后延时多少才显示 Tooldescription，单位：秒',
      type: PROPS_TYPES.number,
    },
    mouseLeaveDelay: {
      title: '鼠标移出后延时',
      description: '鼠标移出后延时多少才隐藏 Tooldescription，单位：秒',
      type: PROPS_TYPES.number,
    },
    content: {
      title: '卡片内容',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '卡片标题',
      type: PROPS_TYPES.string,
    },
    overlayStyle: {
      title: '卡片样式',
      type: [PROPS_TYPES.object, PROPS_TYPES.json],
    },
    placement: {
      title: '气泡框位置',
      type: PROPS_TYPES.enum,
      enum: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
      default: 'top',
    },
    trigger: {
      title: '触发行为',
      type: PROPS_TYPES.enum,
      enum: ['hover', 'focus', 'click', 'contextMenu'],
      default: 'hover',
    },
  },
};
export default Popover;
