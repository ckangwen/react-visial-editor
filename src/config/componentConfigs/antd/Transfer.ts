import { PROPS_TYPES, ComponentConfig } from '@/types';


const Transfer: ComponentConfig = {
  propsConfig: {
    render: {
      title: '行元素渲染',
      type: PROPS_TYPES.function,
      rules: [
        {
          required: true,
          message: '请输入render方法名称',
        },
      ],
    },
    showSearch: {
      title: '是否显示搜索框',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    titles: {
      title: '标题集合',
      description: '标题集合，顺序从左至右',
      type: PROPS_TYPES.stringArray,
    },
    onChange: {
      title: '数据切换函数',
      description: '选项在两栏之间转移时的回调函数',
      type: PROPS_TYPES.function,
    },
  },
};

export default Transfer;
