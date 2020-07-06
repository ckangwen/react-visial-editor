import { ComponentConfig, PROPS_TYPES } from '@/types';

const Checkbox: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    autoFocus: {
      title: '是否自动获取焦点',
      type: PROPS_TYPES.boolean,
    },
    checked: {
      title: '当前是否选中',
      type: PROPS_TYPES.boolean,
    },
    defaultChecked: {
      title: '初始被选中状态',
      type: PROPS_TYPES.boolean,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    indeterminate: {
      title: '模糊状态',
      description: '设置 indeterminate 状态，只负责样式控制',
      type: PROPS_TYPES.boolean,
    },
    onChange: {
      title: '变化时回调',
      description: '变化时回调函数',
      type: PROPS_TYPES.function,
    },
  },
}

export default Checkbox
