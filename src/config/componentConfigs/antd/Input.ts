import { ComponentConfig, PROPS_TYPES } from '@/types';

const Input: ComponentConfig = {
  propsConfig: {
    addonAfter: {
      title: '带标签的 input，设置后置标签',
      type: PROPS_TYPES.string,
    },
    addonBefore: {
      title: '带标签的 input，设置前置标签',
      type: PROPS_TYPES.string,
    },
    allowClear: {
      title: '是否显示清除按钮',
      type: PROPS_TYPES.boolean,
    },
    prefix: {
      title: '带有前缀图标的 input',
      type: PROPS_TYPES.string,
    },
    suffix: {
      title: '带有后缀图标的 input',
      type: PROPS_TYPES.string,
    },
    placeholder: {
      title: 'placeholder',
      type: PROPS_TYPES.string,
    },
    default: {
      title: '默认内容',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '禁用状态',
      description: '是否禁用状态，默认为 false',
      type: PROPS_TYPES.boolean,
    },
    id: {
      title: 'id',
      description: '输入框的 id',
      type: PROPS_TYPES.string,
    },
    maxLength: {
      title: '最大长度',
      type: PROPS_TYPES.number,
    },
    size: {
      title: '控件大小',
      description: '控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
      default: 'default',
    },
    type: {
      title: '声明 input 类型',
      description: '声明 input 类型，同原生 input 标签的 type 属性',
      type: PROPS_TYPES.enum,
      enum: [
        'button',
        'checkbox',
        'file',
        'hidden',
        'image',
        'password',
        'radio',
        'reset',
        'submit',
        'text',
      ],
      default: 'text',
    },
    value: {
      title: '输入框内容',
      type: PROPS_TYPES.string,
    },
    onPressEnter: {
      title: '按下回车回调',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '输入框内容变化时的回调',
      type: PROPS_TYPES.function,
    },
  },
}

const Group: ComponentConfig = {
  propsConfig: {
    compact: {
      title: '是否用紧凑模式',
      type: PROPS_TYPES.boolean,
    },
    size: {
      title: '大小',
      description: 'Input.Group 中所有的 Input 的大小，可选 large default small',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
    },
  },
}

const Search: ComponentConfig = {
  propsConfig: {
    enterButton: {
      title: '是否有确认按钮',
      description: '是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突',
      type: PROPS_TYPES.boolean,
    },
    onSearch: {
      title: '点击搜索或按下回车键时的回调',
      type: PROPS_TYPES.function,
    },
    loading: {
      title: '搜索 loading',
      type: PROPS_TYPES.boolean,
    },
    ...Input.propsConfig,
  },
}

const TextArea: ComponentConfig = {
  propsConfig: {
    autoSize: {
      title: '自适应内容高度',
      description: '自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }。3.24.0 后 autosize 被废弃，请使用 autoSize。',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.object],
    },
    default: {
      title: '默认内容',
      type: PROPS_TYPES.string,
    },
    value: {
      title: '输入框内容',
      type: PROPS_TYPES.string,
    },
    onPressEnter: {
      title: '按下回车回调',
      type: PROPS_TYPES.function,
    },
    allowClear: {
      title: '是否显示清除按钮',
      type: PROPS_TYPES.boolean,
    },
  },
}

const Password: ComponentConfig = {
  propsConfig: {
    visibilityToggle: {
      title: '是否显示切换按钮',
      type: PROPS_TYPES.boolean,
    },
    ...Input.propsConfig,
  },
}

export default {
  Input,
  'Input.Search': Search,
  'Input.TextArea': TextArea,
  'Input.Group': Group,
  'Input.Password': Password,
};
