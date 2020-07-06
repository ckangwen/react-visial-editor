import { ComponentConfig, PROPS_TYPES } from '@/types';

const Form: ComponentConfig = {
  propsConfig: {
    hideRequiredMark: {
      title: '隐藏所有表单项的必选标记',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    titleAlign: {
      title: 'title 标签的文本对齐方式',
      type: PROPS_TYPES.enum,
      enum: ['left', 'right'],
    },
    titleCol: {
      title: 'title 标签布局',
      description: '（3.14.0 新增，之前的版本只能设置到 FormItem 上。）title 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
      type: PROPS_TYPES.object,
      properties: {},
    },
    wrapperCol: {
      title: '输入控件设置布局样式',
      description: '3.14.0 新增，之前的版本只能设置到 FormItem 上。）需要为输入控件设置布局样式时，使用该属性，用法同 titleCol',
      type: PROPS_TYPES.object,
      properties: {},
    },
    colon: {
      title: '是否实现冒号',
      description: '配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)',
      type: PROPS_TYPES.boolean,
    },
    layout: {
      title: '表单布局',
      type: PROPS_TYPES.enum,
      enum: ['horizontal', 'vertical', 'inline'],
      default: 'horizontal',
    },
    onSubmit: {
      title: '数据验证成功后回调事件，需要配合Button(type: submit)使用',
      type: PROPS_TYPES.function,
    },
  },
}

const Item: ComponentConfig = {
  propsConfig: {
    colon: {
      title: '是否显示 title 后面的冒号',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    extra: {
      title: '额外的提示信息',
      description: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。',
      type: PROPS_TYPES.string,
    },
    help: {
      title: '提示信息',
      description: '提示信息，如不设置，则会根据校验规则自动生成',
      type: PROPS_TYPES.string,
    },
    hasFeedback: {
      title: '展示校验状态图标',
      description: '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用',
      type: PROPS_TYPES.boolean,
    },
    htmlFor: {
      title: '设置子元素 title htmlFor 属性',
      type: PROPS_TYPES.string,
    },
    title: {
      title: 'title 标签的文本',
      type: PROPS_TYPES.string,
    },
    titleCol: {
      title: 'title 标签布局，',
      description: 'title标签布局同 <Col> 组件设置span offset值，如{span: 3, offset: 12} 或 sm:{span: 3, offset: 12}。在 3.14.0 之后，你可以通过 Form 的 titleCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。',
      type: PROPS_TYPES.object,
    },
    wrapperCol: {
      title: '输入控件设置布局样式',
      description: '需要为输入控件设置布局样式时，使用该属性，用法同 titleCol。在 3.14.0 之后，你可以通过 Form 的 wrapperCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。',
      type: PROPS_TYPES.object,
    },
    titleAlign: {
      title: 'title 标签的文本对齐方式',
      type: PROPS_TYPES.enum,
      enum: ['left', 'right'],
    },
    required: {
      title: '是否必填',
      description: '是否必填，如不设置，则会根据校验规则自动生成',
      type: PROPS_TYPES.boolean,
    },
    validateStatus: {
      title: '校验状态',
      type: PROPS_TYPES.enum,
      enum: ['success', 'warning', 'error', 'validating'],
    },
  },
}

export default {
  Form,
  'Form.Item': Item
}
