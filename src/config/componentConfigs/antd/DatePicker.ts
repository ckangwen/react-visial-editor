import { ComponentConfig, PROPS_TYPES } from '@/types';

const commonPropsConfig: ComponentConfig = {
  propsConfig: {
    allowClear: {
      title: '是否显示清除按钮',
      type: PROPS_TYPES.boolean,
      default: true
    },
    autoFocus: {
      title: '自动获取焦点',
      type: PROPS_TYPES.boolean,
      default: false
    },
    className: {
      title: '选择器 className',
      type: PROPS_TYPES.string
    },
    dateRender: {
      title: '自定义日期单元格的内容',
      type: PROPS_TYPES.function
    },
    disabled: {
      title: '禁用',
      type: PROPS_TYPES.boolean,
      default: false
    },
    disabledDate: {
      title: '不可选择的日期',
      type: PROPS_TYPES.function
    },
    dropdownClassName: {
      title: '额外的弹出日历 className',
      type: PROPS_TYPES.string
    },
    getPopupContainer: {
      title: '定义浮层的容器，默认为 body 上新建 div',
      type: PROPS_TYPES.function
    },
    locale: {
      title: '国际化配置',
      type: PROPS_TYPES.object
    },
    mode: {
      title: '日期面板的状态',
      type: PROPS_TYPES.enum,
      enum: ['time', 'date', 'month', 'year', 'decade']
    },
    open: {
      title: '控制弹层是否展开',
      type: PROPS_TYPES.boolean
    },
    picker: {
      title: '设置选择器类型',
      type: PROPS_TYPES.enum,
      enum: ['quarter', 'date', 'month', 'year', 'decade'],
      default: 'date'
    },
    placeholder: {
      title: '输入框提示文字',
      type: PROPS_TYPES.string
    },
    popupStyle: {
      title: '额外的弹出日历样式',
      type: PROPS_TYPES.object,
    },
    size: {
      title: '输入框大小',
      type: PROPS_TYPES.enum,
      enum: ['large', 'middle', 'month', 'small'],
    },
    bordered: {
      title: '是否有边框',
      type: PROPS_TYPES.boolean,
      default: true
    },
    suffixIcon: {
      title: '自定义的选择框后缀图标',
      type: PROPS_TYPES.function,
    },
    style: {
      title: '自定义输入框样式',
      type: PROPS_TYPES.object,
    },
    onOpenChange: {
      title: '弹出日历和关闭日历的回调',
      type: PROPS_TYPES.function,
    },
    onPanelChange: {
      title: '是否有边框',
      type: PROPS_TYPES.function,
    },
    inputReadOnly: {
      title: '自定义的选择框后缀图标',
      type: PROPS_TYPES.boolean,
    },

  }
}

const DatePicker: ComponentConfig = {
  propsConfig: {
    ...commonPropsConfig.propsConfig,
    defaultValue: {
      title: '默认日期',
      type: PROPS_TYPES.string,
    },
    defaultPickerValue: {
      title: '默认面板日期',
      type: PROPS_TYPES.string,
    },
    disabledTime: {
      title: '不可选择的时间',
      type: PROPS_TYPES.function,
    },
    format: {
      title: '设置日期格式',
      type: [PROPS_TYPES.string, PROPS_TYPES.stringArray],
    },
    renderExtraFooter: {
      title: '在面板中添加额外的页脚',
      type: PROPS_TYPES.function,
    },
    showTime: {
      title: '增加时间选择功能',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.object],
    },
    'showTime.defaultValue': {
      title: '设置用户选择日期时默认的时分秒',
      type: PROPS_TYPES.function,
    },
    showToday: {
      title: '是否展示“今天”按钮',
      type: PROPS_TYPES.boolean,
      default: true
    },
    value: {
      title: '日期',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '时间发生变化的回调',
      type: PROPS_TYPES.function,
    },
    onOk: {
      title: '点击确定按钮的回调',
      type: PROPS_TYPES.function,
    },
    onPanelChange: {
      title: '日期面板变化时的回调',
      type: PROPS_TYPES.function,
    },
    showNow: {
      title: '当设定了 showTime 的时候，面板是否显示“此刻”按钮',
      type: PROPS_TYPES.boolean,
    },
  },
}

export default {
  DatePicker
}
