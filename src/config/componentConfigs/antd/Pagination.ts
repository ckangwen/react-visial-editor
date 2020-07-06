import { PROPS_TYPES, ComponentConfig } from '@/types';


const Pagination: ComponentConfig = {
  propsConfig: {
    current: {
      title: '当前页数',
      description: '当前页数',
      type: PROPS_TYPES.number,
    },
    defaultCurrent: {
      title: '默认当前页数',
      description: '默认的当前页数',
      type: PROPS_TYPES.number,
      default: 1,
    },
    defaultPageSize: {
      title: '默认每页条数',
      description: '默认的每页条数',
      type: PROPS_TYPES.number,
      default: 10,
    },
    disabled: {
      title: '禁用分页',
      type: PROPS_TYPES.boolean,
    },
    hideOnSinglePage: {
      title: '隐藏分页',
      description: '只有一页时是否隐藏分页器',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    pageSize: {
      title: '每页条数',
      description: '每页条数',
      type: PROPS_TYPES.number,
      default: 10,
    },
    pageSizeOptions: {
      title: '每页显示条数',
      description: '指定每页可以显示多少条',
      type: PROPS_TYPES.stringArray,
    },
    showLessItems: {
      title: 'show less page items',
      type: PROPS_TYPES.boolean,
    },
    showQuickJumper: {
      title: '快速跳转',
      description: '是否可以快速跳转至某页',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    showSizeChanger: {
      title: '改变pageSize',
      description: '是否可以改变 pageSize',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    showTotal: {
      title: '显示数据总量',
      description: '用于显示数据总量和当前数据顺序',
      type: PROPS_TYPES.function,
    },
    simple: {
      title: '简单分页',
      description: '当添加该属性时，显示为简单分页',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    size: {
      title: '分页尺寸',
      description: '当为「small」时，是小尺寸分页',
      type: PROPS_TYPES.enum,
      enum: ['small'],
    },
    total: {
      title: '数据总数',
      description: '数据总数',
      type: PROPS_TYPES.number,
      default: 0,
    },
    onChange: {
      title: '页码改变回调',
      description: '页码改变的回调，参数是改变后的页码及每页条数',
      type: PROPS_TYPES.function,
    },
    onShowSizeChange: {
      title: 'pageSize变化回调',
      description: 'pageSize 变化的回调',
      type: PROPS_TYPES.function,
    },
  },
};

export default Pagination;
