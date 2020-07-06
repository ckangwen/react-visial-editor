import { PROPS_TYPES, ComponentConfig } from '@/types';


const Slider: ComponentConfig = {

  propsConfig: {
    allowClear: {
      title: '支持清除',
      description: '支持清除, 单选模式有效',
      type: PROPS_TYPES.boolean,
    },
    defaultValue: {
      title: '初始取值',
      description: '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]',
      type: [PROPS_TYPES.number, PROPS_TYPES.numberArray],
    },
    disabled: {
      title: '是否禁用',
      description: '值为 true 时，滑块为禁用状态',
      type: PROPS_TYPES.boolean,
    },
    dots: {
      title: '拖拽限制',
      description: '是否只能拖拽到刻度上',
      type: PROPS_TYPES.boolean,
    },
    included: {
      title: '包含关系',
      description: '	marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
      type: PROPS_TYPES.boolean,
    },
    marks: {
      title: '刻度标记',
      description: '刻度标记，key 的类型必须为 number 且取值在闭区间 min, max 内，每个标签可以单独设置样式',
      type: PROPS_TYPES.object,
    },
    max: {
      title: '最大值',
      type: PROPS_TYPES.number,
    },
    min: {
      title: '最小值',
      type: PROPS_TYPES.number,
    },
    range: {
      title: '双滑块模式',
      type: PROPS_TYPES.boolean,
    },
    reverse: {
      title: '反向坐标轴',
      type: PROPS_TYPES.boolean,
    },
    step: {
      title: '步长',
      description:
        '	步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。',
      type: [PROPS_TYPES.number, PROPS_TYPES.string],
    },
    descriptionFormatter: {
      title: '提示格式化',
      description:
        'Slider 会把当前值传给 descriptionFormatter，并在 Tooldescription 中显示 descriptionFormatter 的返回值，若为 null，则隐藏 Tooldescription。',
      type: [PROPS_TYPES.function, PROPS_TYPES.string],
    },
    value: {
      title: '当前取值',
      description: '设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]',
      type: [PROPS_TYPES.number, PROPS_TYPES.numberArray],
    },
    vertical: {
      title: '垂直方向',
      description: '值为 true 时，Slider 为垂直方向(注意：设置为true时，需要去样式配置中设置高度)',
      type: PROPS_TYPES.boolean,
    },
    onAfterChange: {
      title: '改变后',
      description: '与 onmouseup 触发时机一致，把当前值作为参数传入。',
      type: PROPS_TYPES.function,
    },
    onChange: {
      title: '值发生改变',
      description: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。',
      type: PROPS_TYPES.function,
    },
    tooldescriptionPlacement: {
      title: '设置 Tooldescription 展示位置。',
      type: PROPS_TYPES.enum,
      enum: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
    },
    tooldescriptionVisible: {
      title: '是否显示Tooldescription',
      description: '值为true时，Tooldescription 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。',
      type: PROPS_TYPES.boolean,
    },
    getTooldescriptionPopupContainer: {
      title: '渲染父节点',
      description: 'Tooldescription 渲染父节点，默认渲染到 body 上。',
      type: PROPS_TYPES.function,
    },
  },
};

export default Slider;
