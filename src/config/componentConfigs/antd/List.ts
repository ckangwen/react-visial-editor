import { PROPS_TYPES, ComponentConfig } from '@/types';


const List: ComponentConfig = {
  propsConfig: {
    dataSource: {
      title: '数据源',
      type: PROPS_TYPES.objectArray,
      properties: [{}],
    },
    size: {
      title: '控件大小',
      description: '控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
      default: 'default',
    },
    footer: {
      title: '列表底部',
      type: PROPS_TYPES.string,
    },
    header: {
      title: '列表头部',
      type: PROPS_TYPES.string,
    },
    bordered: {
      title: '是否展示边框',
      type: PROPS_TYPES.boolean,
    },
    grid: {
      title: '列表栅格配置',
      type: PROPS_TYPES.object,
    },
    itemLayout: {
      title: '设置布局',
      type: PROPS_TYPES.enum,
      enum: ['vertical', 'horizontal'],
      default: 'horizontal',
    },
    loadMore: {
      title: '加载更多文案',
      type: PROPS_TYPES.string,
    },
    locale: {
      title: '默认文案设置',
      type: PROPS_TYPES.object,
      default: {
        emptyText: '暂无数据',
      },
    },
    pagination: {
      title: '是否展示分页',
      type: PROPS_TYPES.boolean,
    },
    split: {
      title: '是否展示分割线',
      type: PROPS_TYPES.boolean,
      default: true,
    },
  },
};
const Item: ComponentConfig = {
  propsConfig: {
    children: {
      title: 'item内容',
      type: PROPS_TYPES.string,
    },
    extra: {
      title: '额外内容',
      type: PROPS_TYPES.string,
    },
  },
};

const Meta: ComponentConfig = {
  propsConfig: {
    description: {
      title: '列表元素的描述内容',
      type: PROPS_TYPES.string,
    },
    title: {
      title: '列表元素的标题',
      type: PROPS_TYPES.string,
    },
  },
};
export default {
  List,
  'List.Item': Item,
  'List.Item.Meta': Meta,

};
