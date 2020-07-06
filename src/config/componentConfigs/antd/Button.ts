import { ComponentConfig, PROPS_TYPES } from '@/types';

const Button: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    disabled: {
      title: '禁用',
      description: '按钮失效状态',
      type: PROPS_TYPES.boolean,
    },
    ghost: {
      title: '幽灵模式',
      description: '按钮背景透明',
      type: PROPS_TYPES.boolean,
    },
    href: {
      title: '跳转的地址',
      description: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
      type: PROPS_TYPES.string,
    },
    htmlType: {
      title: 'button类型',
      description: '设置 button 原生的 type 值，可选值请参考 HTML 标准',
      type: PROPS_TYPES.string,
    },
    icon: {
      title: '图标类型',
      description: '设置按钮的图标类型',
      type: PROPS_TYPES.string,
    },
    loading: {
      title: '载入状态',
      description: '设置按钮载入状态',
      type: [PROPS_TYPES.boolean, PROPS_TYPES.object],
      properties: {
        delay: {
          title: '延迟时间',
          type: PROPS_TYPES.number
        }
      }
    },
    shape: {
      title: '按钮形状',
      description: '设置按钮形状，可选值为 circle、 round 或者不设',
      type: PROPS_TYPES.enum,
      enum: ['default', 'circle', 'round'],
    },
    size: {
      title: '按钮大小',
      description: '设置按钮大小',
      type: PROPS_TYPES.enum,
      enum: ['default', 'small', 'large'],
    },
    target: {
      title: '链接target',
      description: '相当于a链接的target属性, 设置跳转链接时有效',
      type: PROPS_TYPES.enum,
      enum: ['_blank', '_self', '_parent', '_top'],
    },
    type: {
      title: '按钮类型',
      description: '设置按钮类型',
      type: PROPS_TYPES.enum,
      enum: ['default', 'primary', 'dashed', 'danger', 'link'],
    },
    onClick: {
      title: '点击事件',
      description: '点击事件回调',
      type: PROPS_TYPES.function,
    },
    block: {
      title: '自适应宽度',
      description: '将按钮宽度调整为其父宽度',
      type: PROPS_TYPES.boolean,
    },
  }
}

export default Button
