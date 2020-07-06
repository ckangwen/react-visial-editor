import { ComponentConfig, PROPS_TYPES } from '@/types';

const Dropdown: ComponentConfig = {
  propsConfig: {
    disabled: {
      title: '菜单是否禁用',
      type: PROPS_TYPES.boolean,
    },
    getPopupContainer: {
      title: '菜单渲染父节点',
      description: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      type: PROPS_TYPES.function,
    },
    overlayClassName: {
      title: '下拉根元素的类名称',
      type: PROPS_TYPES.string,
    },
    overlayStyle: {
      title: '下拉根元素的样式',
      type: PROPS_TYPES.object,
    },
    placement: {
      title: '菜单弹出位置',
      type: PROPS_TYPES.enum,
      enum: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    },
    trigger: {
      title: '触发下拉的行为',
      description: '触发下拉的行为, 移动端不支持 hover,click|hover|contextMenu',
      type: PROPS_TYPES.stringArray,
    },
    visible: {
      title: '菜单是否显示',
      type: PROPS_TYPES.boolean,
    },
    onVisibleChange: {
      title: '菜单显示状态改变时调用',
      type: PROPS_TYPES.function,
    },
  },
}

const Button: ComponentConfig = {
  propsConfig: {
    disabled: {
      title: '菜单是否禁用',
      type: PROPS_TYPES.boolean,
    },
    size: {
      title: '按钮大小',
      type: PROPS_TYPES.enum,
      enum: ['default', 'large', 'small'],
    },
    type: {
      title: '按钮类型',
      type: PROPS_TYPES.enum,
      enum: ['default', 'primary', 'dashed', 'danger', 'link'],

    },
    placement: {
      title: '菜单弹出位置',
      type: PROPS_TYPES.enum,
      enum: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    },
    trigger: {
      title: '触发下拉的行为',
      description: '触发下拉的行为, 移动端不支持 hover,click|hover|contextMenu',
      type: PROPS_TYPES.stringArray,
    },
    visible: {
      title: '菜单是否显示',
      type: PROPS_TYPES.boolean,
    },
    onClick: {
      title: '点击左侧按钮的回调',
      type: PROPS_TYPES.function,
    },
    onVisibleChange: {
      title: '菜单显示状态改变时调用',
      type: PROPS_TYPES.function,
    },
  },
}

export default {
  Dropdown,
  'Dropdown.Button': Button,
};
