import { PROPS_TYPES, ComponentConfig } from '@/types';


const Radio: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    autoFocus: {
      title: '自动获取焦点',
      description: '自动获取焦点',
      type: PROPS_TYPES.boolean,
    },
    value: {
      title: '根据 value 进行比较，判断是否选中',
      type: PROPS_TYPES.string,
    },
    checked: {
      title: '指定是否选中',
      description: '指定当前是否选中',
      type: PROPS_TYPES.boolean,
    },
    defaultChecked: {
      title: '初始是否选中',
      description: '初始是否选中',
      type: PROPS_TYPES.boolean,
    },
  },
};

const Button: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    value: {
      title: '根据 value 进行比较，判断是否选中',
      type: PROPS_TYPES.string,
    },
  },
};
const Group: ComponentConfig = {
  propsConfig: {
    defaultValue: {
      title: '默认选中的值',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '禁选所有子单选器',
      type: PROPS_TYPES.boolean,
    },
    name: {
      title: 'name',
      description: 'RadioGroup 下所有 input[type="radio"] 的 name 属性',
      type: PROPS_TYPES.string,
    },
    options: {
      title: '以配置形式设置子元素',
      type: [PROPS_TYPES.stringArray, PROPS_TYPES.objectArray],
      properties: [{
        title: {
          title: 'title',
          type: PROPS_TYPES.string,
        },
        value: {
          title: 'value',
          type: PROPS_TYPES.string,
        },
        disabled: {
          title: 'disabled',
          type: PROPS_TYPES.boolean,
        },
      }],
    },
    size: {
      title: '大小',
      description: '大小，只对按钮样式生效',
      type: PROPS_TYPES.enum,
      enum: ['large', 'default', 'small'],
    },
    value: {
      title: '用于设置当前选中的值',
      type: PROPS_TYPES.string,
    },
    onChange: {
      title: '选项变化时的回调函数',
      type: PROPS_TYPES.function,
    },
    buttonStyle: {
      title: 'RadioButton 的风格样式',
      description: 'RadioButton 的风格样式，目前有描边和填色两种风格',
      type: PROPS_TYPES.enum,
      enum: ['outline', 'solid'],
    },
  },
};
export default {
  Radio,
  'Radio.Button': Button,
  'Radio.Group': Group,
};
