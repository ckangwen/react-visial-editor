import { ComponentConfig, PROPS_TYPES } from '@/types';

const Collapse: ComponentConfig = {
  propsConfig: {
    activeKey: {
      title: '当前激活 tab 面板的 key',
      type: PROPS_TYPES.string,
    },
    defaultActiveKey: {
      title: '初始化选中面板的 key',
      type: PROPS_TYPES.string,
    },
    onChange: {
      title: '切换面板的回调',
      type: PROPS_TYPES.function,
    },
  },
}
const Panel: ComponentConfig = {
  propsConfig: {
    disabled: {
      title: '禁用',
      description: '禁用后的面板展开与否将无法通过用户交互改变',
      type: PROPS_TYPES.boolean,
    },
    forceRender: {
      title: '隐藏时是否渲染',
      description: '被隐藏时是否渲染 DOM 结构',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: '对应 activeKey',
      type: PROPS_TYPES.string,
    },
    header: {
      title: '面板头内容',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Collapse,
  'Collapse.Panel': Panel,
};
