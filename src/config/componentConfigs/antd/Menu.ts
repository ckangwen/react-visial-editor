import { PROPS_TYPES, ComponentConfig } from '@/types';


const Menu: ComponentConfig = {
  propsConfig: {
    defaultOpenKeys: {
      title: '初始展开的SubMenu',
      description: '初始展开的 SubMenu 菜单项 key 数组',
      type: PROPS_TYPES.stringArray,
    },
    defaultSelectedKeys: {
      title: '初始选中的菜单项 key 数组',
      type: PROPS_TYPES.stringArray,
    },
    forceSubMenuRender: {
      title: '在子菜单展示之前就渲染进 DOM',
      type: PROPS_TYPES.boolean,
    },
    inlineCollapsed: {
      title: 'inline 时菜单是否收起状态',
      type: PROPS_TYPES.boolean,
    },
    inlineIndent: {
      title: 'inline 模式的菜单缩进宽度',
      type: PROPS_TYPES.number,
    },
    mode: {
      title: '菜单类型',
      description: '现在支持垂直、水平、和内嵌模式三种',
      type: PROPS_TYPES.enum,
      enum: ['vertical', 'vertical-right', 'horizontal', 'inline'],
    },
    muldescriptionle: {
      title: '是否允许多选',
      type: PROPS_TYPES.boolean,
    },
    openKeys: {
      title: '当前展开的SubMenu菜单项key数组',
      type: PROPS_TYPES.stringArray,
    },
    selectable: {
      title: '是否允许选中',
      type: PROPS_TYPES.boolean,
    },
    selectedKeys: {
      title: '当前选中的菜单项 key 数组',
      type: PROPS_TYPES.stringArray,
    },
    subMenuCloseDelay: {
      title: '鼠标离开子菜单后关闭延时',
      description: '鼠标离开子菜单后关闭延时，单位：秒',
      type: PROPS_TYPES.number,
    },
    subMenuOpenDelay: {
      title: '鼠标进入子菜单后开启延时',
      description: '用户鼠标进入子菜单后开启延时，单位：秒',
      type: PROPS_TYPES.number,
    },

    theme: {
      title: '主题颜色',
      type: PROPS_TYPES.enum,
      enum: ['light', 'dark'],
    },
    onClick: {
      title: '点击 MenuItem 调用此函数',
      type: PROPS_TYPES.function,
    },
    onDeselect: {
      title: '取消选中时调用，仅在 muldescriptionle 生效',
      type: PROPS_TYPES.function,
    },
    onOpenChange: {
      title: 'SubMenu 展开/关闭的回调',
      type: PROPS_TYPES.function,
    },
    onSelect: {
      title: '被选中时调用',
      type: PROPS_TYPES.function,
    },
  },
};
const Divider: ComponentConfig = {
  propsConfig: {},
};
const ItemGroup: ComponentConfig = {
  propsConfig: {
    title: {
      title: '标题内容',
      type: PROPS_TYPES.string,
    },
  },
};
const SubMenu: ComponentConfig = {
  propsConfig: {
    title: {
      title: '标题内容',
      type: PROPS_TYPES.string,
    },
    popupClassName: {
      title: '子菜单样式',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: 'item 的唯一标志',
      type: PROPS_TYPES.string,
    },
    onTitleClick: {
      title: '点击子菜单标题',
      type: PROPS_TYPES.function,
    },

  },
};
const Item: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '是否禁用',
      type: PROPS_TYPES.boolean,
    },
    key: {
      title: 'item 的唯一标志',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '设置收缩时展示的悬浮标题',
      type: PROPS_TYPES.string,
    },
  },
};
export default {
  Menu,
  'Menu.Divider': Divider,
  'Menu.ItemGroup': ItemGroup,
  'Menu.SubMenu': SubMenu,
  'Menu.Item': Item,
};
