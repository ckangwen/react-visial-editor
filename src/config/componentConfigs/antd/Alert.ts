import { ComponentConfig, PROPS_TYPES } from '@/types';

const Alert: ComponentConfig = {
  propsConfig: {
    message: {
      title: '警告提示内容',
      type: PROPS_TYPES.string,
      rules: [
        {
          required: true,
          message: '请输入提示信息',
        },
      ],
    },
    showIcon: {
      title: '是否显示辅助图标',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    type: {
      title: '指定警告提示的样式',
      description: '指定警告提示的样式，有四种选择 success、info、warning、error',
      type: PROPS_TYPES.enum,
      enum: ['success', 'info', 'warning', 'error'],
      default: 'info',
    },
  },
}
