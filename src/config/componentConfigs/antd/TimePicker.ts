import { PROPS_TYPES, ComponentConfig } from '@/types';


const TimePicker: ComponentConfig = {
  propsConfig: {
    allowEmpty: {
      title: '是否展示清除按钮',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    autoFocus: {
      title: '自动获焦点',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    clearText: {
      title: '清除按钮hover时的文案',
      type: PROPS_TYPES.string,
      default: 'clear',
    },
    disabled: {
      title: '禁用全部',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    format: {
      title: '展示的时间格式',
      type: PROPS_TYPES.string,
      default: 'HH:mm:ss',
    },
    hourStep: {
      title: '小时选项间隔',
      type: PROPS_TYPES.number,
      default: 1,
    },
    minuteStep: {
      title: '分钟选项间隔',
      type: PROPS_TYPES.number,
      default: 1,
    },
    secondStep: {
      title: '秒选项间隔',
      type: PROPS_TYPES.number,
      default: 1,
    },
    inputReadOnly: {
      title: '输入框只读',
      description: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    placeholder: {
      title: '无值时内容',
      description: '没有值的时候显示的内容',
      type: PROPS_TYPES.string,
    },
    use12Hours: {
      title: '12小时制',
      description: '使用 12 小时制，为 true 时 format 默认为 h:mm:ss a',
      type: PROPS_TYPES.boolean,
      default: false,
    },
    onChange: {
      title: '值变化',
      description: '时间发生变化的回调',
      type: PROPS_TYPES.function,
    },
  },
};

export default TimePicker;
