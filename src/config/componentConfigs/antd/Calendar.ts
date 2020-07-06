import { ComponentConfig, PROPS_TYPES } from '@/types';

const Calendar: ComponentConfig = {
  propsConfig: {
    dateCellRender: {
      title: '日期追加内容',
      description: '自定义渲染日期单元格，返回内容会被追加到单元格',
      type: PROPS_TYPES.function,
    },
    dateFullCellRender: {
      title: '日期覆盖',
      description: '自定义渲染日期单元格，返回内容覆盖单元格',
      type: PROPS_TYPES.function,
    },
    monthCellRender: {
      title: '月追加内容',
      description: '自定义渲染月单元格，返回内容会被追加到单元格',
      type: PROPS_TYPES.function,
    },
    monthFullCellRender: {
      title: '月覆盖内容',
      description: '自定义渲染月单元格，返回内容覆盖单元格',
      type: PROPS_TYPES.function,
    },
    disabledDate: {
      title: '不可选择的日期',
      type: PROPS_TYPES.function,
    },
    fullscreen: {
      title: '是否全屏显示',
      type: PROPS_TYPES.boolean,
      default: true,
    },
    mode: {
      title: '初始模式',
      description: '初始模式，month/year',
      type: PROPS_TYPES.enum,
      enum: ['month', 'year'],
      default: 'month',
    },
    onPanelChange: {
      title: '日期面板变化',
      description: '日期面板变化回调函数',
      type: PROPS_TYPES.function,
    },
    onSelect: {
      title: '点击选择日期',
      description: '点击选择日期回调函数',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '日期变化',
      description: '日期变化回调函数',
      type: PROPS_TYPES.function,
    },
  },
}

export default Calendar
