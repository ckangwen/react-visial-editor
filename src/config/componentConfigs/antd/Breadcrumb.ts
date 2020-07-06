import { ComponentConfig, PROPS_TYPES } from '@/types';

const Breadcrumb: ComponentConfig = {
  propsConfig: {
    params: {
      title: '路由的参数',
      type: PROPS_TYPES.object,
    },
    routes: {
      title: 'router 的路由栈信息',
      type: PROPS_TYPES.objectArray,
      properties: [
        {
          path: {
            title: 'path',
            type: PROPS_TYPES.string,
          },
          breadcrumbName: {
            title: 'breadcrumbName',
            type: PROPS_TYPES.string,
          },
          children: {
            title: 'children',
            type: PROPS_TYPES.objectArray,
            properties: [{
              path: {
                title: 'path',
                type: PROPS_TYPES.string,
              },
              breadcrumbName: {
                title: 'breadcrumbName',
                type: PROPS_TYPES.string,
              },
            }],
          },
        }
      ]
    },
  },
}

const Item: ComponentConfig = {
  propsConfig: {
    children: {
      title: '内容',
      type: PROPS_TYPES.string,
    },
    href: {
      title: '链接的目的地',
      type: PROPS_TYPES.string,
    },
    onClick: {
      title: '单击事件',
      type: PROPS_TYPES.function,
    },
  },
}

const Separator: ComponentConfig = {
  propsConfig: {
    children: {
      title: '要显示的分隔符',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Breadcrumb,
  'Breadcrumb.Item': Item,
  'Breadcrumb.Separator': Separator,
}
