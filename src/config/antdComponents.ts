import { createElement } from 'react';
import { Col, Breadcrumb, Menu, Steps, Form, Input, Radio, Select, TreeSelect, Collapse, Descriptions, List, Avatar, Timeline, Tabs } from 'antd';
import { v4 as uuid } from 'uuid';
import { asLiterals } from '@/utils'

const antdComponents = {
  Layout: {
    'Layout': {},
    'Layout.Footer': {},
    'Layout.Content': {},
    'Layout.Header': {},
    'Layout.Sider': {}
  },
  Grid: {
    Row: {
      children: [
        {
          tag: 'Col',
          key: uuid(),
          props: {
            span: 12
          },
          children: ['col 12']
        },
        {
          tag: 'Col',
          key: uuid(),
          props: {
            span: 12
          },
          children: ['col 12']
        },
      ]
    },
    Col: {
      span: 12
    },
  },
  Button: {
    'Button': {
      children: ['Button']
    }
  },
  Divider: {
    'Divider': {}
  },
  Affix: {
    'Affix': {
      offsetTop: 100
    }
  },
  Breadcrumb: {
    Breadcrumb: {
      children: [
        {
          tag: 'Breadcrumb.Item',
          key: uuid(),
          props: {},
          children: ['Breadcrumb 1']
        },
        {
          tag: 'Breadcrumb.Item',
          key: uuid(),
          props: {},
          children: ['Breadcrumb 2']
        },
        {
          tag: 'Breadcrumb.Item',
          key: uuid(),
          props: {},
          children: ['Breadcrumb 3']
        },
      ]
    },
    'Breadcrumb.Item': {}
  },
  Dropdown: {
    'Dropdown': {
      children: 'Hover me'
    }
  },
  Menu: {
    'Menu-horizontal': {
      mode: 'horizontal',
      children: [
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: '1'
          },
          children: ['Menu1']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-2'
          },
          children: ['Menu2']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-3'
          },
          children: ['Menu3']
        },
      ]
    },
    'Menu-inline': {
      mode: 'inline',
      children: [
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: '1'
          },
          children: ['Menu1']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-2'
          },
          children: ['Menu2']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-3'
          },
          children: ['Menu3']
        },
      ]
    },
    'Menu-vertical': {
      mode: 'vertical',
      children: [
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: '1'
          },
          children: ['Menu1']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-2'
          },
          children: ['Menu2']
        },
        {
          tag: 'Menu.Item',
          key: uuid(),
          props: {
            key: 'menu-3'
          },
          children: ['Menu3']
        },
      ]
    },
    'SubMenu': {
      key: uuid(),
      title: 'Default Text'
    },
    'Menu.ItemGroup': {
      key: uuid(),
      title: 'Default Text'
    },
    'Menu.Item': {
      key: uuid(),
      children: 'Default Text'
    },
  },
  Pagination: {
    'Pagination': {
      defaultCurrent: 1,
      total: 50
    }
  },
  PageHeader: {
    'PageHeader': {
      title: "Title",
      subTitle: "This is a subtitle"
    }
  },
  Step: {
    'Steps': {
      current: 1,
      children: [
        {
          tag: 'Steps.Step',
          key: uuid(),
          props: {
            title: "Step Default Title",
            subTitle: "Step Default SubTitle",
            description: "Step Default Description"
          }
        },
        {
          tag: 'Steps.Step',
          key: uuid(),
          props: {
            title: "Step Default Title",
            subTitle: "Step Default SubTitle",
            description: "Step Default Description"
          }
        },
        {
          tag: 'Steps.Step',
          key: uuid(),
          props: {
            title: "Step Default Title",
            subTitle: "Step Default SubTitle",
            description: "Step Default Description"
          }
        },
      ]
    },
    'Step': {
      title: "Step Default Title",
      subTitle: "Step Default SubTitle",
      description: "Step Default Description"
    },
  },
  AutoComplete: {
    AutoComplete: {}
  },
  Checkbox: {
    'Checkbox': {
      children: 'checkbox'
    },
    'Checkbox.Group': {
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
      ],
      defaultValue: ['Pear']
    }
  },
  Cascader: {
    Cascader: {}
  },
  DatePicker: {
    DatePicker: {
      picker: 'week',
    },
    'DatePicker.RangePicker': {
      showTime: { format: 'HH:mm' },
      format: "YYYY-MM-DD HH:mm"
    }
  },
  Form: {
    'Form': {
      name: 'basic',
      children: [
        {
          tag: 'Form.Item',
          key: uuid(),
          props: {
            label: 'Default Label',
            name: 'Default Name'
          }
        }
      ]
    },
    'Form.Item': {
      label: 'Default Label',
      name: 'Default Name'
    }
  },
  InputNumber: {
    InputNumbser: {
      min: 1,
      max: 10,
      defaultValue: 3
    }
  },
  Input: {
    placeholder: 'Placeholder'
  },
  Mutentions: {
    Mutentions: {
      defaultValue: '@afc163'
    }
  },
  Rate: {
    Rate: {}
  },
  Radio: {
    Radio: {
      children: 'Radio'
    },
    'Radio.Group': {
      children: [
        {
          tag: 'Radio',
          key: uuid(),
          props: {
            value: 'optionA'
          },
          children: ['optionA']
        },
        {
          tag: 'Radio',
          key: uuid(),
          props: {
            value: 'optionB'
          },
          children: ['optionB']
        },
      ]
    },
    'Radio.Button': {
      value: 'defaultValue',
      children: 'defaultValue'
    }
  },
  Switch: {
    Switch: {
      defaultChecked: true
    }
  },
  Slider: {
    Slider: {}
  },
  Select: {
    Select: {
      defaultValue: '',
      children: [
        {
          tag: 'Select.Option',
          key: uuid(),
          props: {
            value: 1
          },
          children: ['Option1']
        },
        {
          tag: 'Select.Option',
          key: uuid(),
          props: {
            value: 2
          },
          children: ['Option2']
        },
      ]
    },
    'Select.Option': {
      value: 'defaultValue'
    },
    'Select.OptGroup': {
      label: 'Default Label'
    }
  },
  TreeSelect: {
    TreeSelect: {
      children: [
        {
          tag: 'TreeSelect.TreeNode',
          key: uuid(),
          props: {
            value: 1
          },
          children: ['1']
        },
        {
          tag: 'TreeSelect.TreeNode',
          key: uuid(),
          props: {
            value: 2
          },
          children: ['2']
        },
      ]
    },
    'TreeSelect.TreeNode': {
      value: 'defaultValue'
    }
  },
  Transfer: {
    // TODO
    'Transfer': {}
  },
  TimePicker: {
    TimePicker: {},
    'TimePicker.RangePicker': {}
  },
  Upload: {
    Upload: {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
    }
  },
  Avatar: {
    Avatar: {
      children: 'U'
    }
  },
  Badge: {
    Badge: {
      count: 5
    }
  },
  Collapse: {
    Collapse: {
      defaultActiveKey: ['1'],
      children: [
        createElement(Collapse.Panel, { header: 'Panel Header', key: '1' }, 'Panel Content'),
        createElement(Collapse.Panel, { header: 'Panel Header', key: '2' }, 'Panel Content'),
      ]
    },
    'Collapse.Panel': {
      header: 'Panel Header',
      key: '0'
    }
  },
  Carousel: {
    Carousel: {
      children: [
        {
          tag: 'div',
          key: uuid(),
          children: ['1']
        },
        {
          tag: 'div',
          key: uuid(),
          children: ['2']
        },
        {
          tag: 'div',
          key: uuid(),
          children: ['3']
        },
      ]
    }
  },
  Card: {
    Card: {
      title: 'Default Title',
      children: [
        {
          tag: 'p',
          key: uuid(),
          children: ['Card Content']
        },
      ]
    },
    'Card.Meta': {
      title: 'Meta Title',
      description: 'Meta Description'
    }
  },
  Calendar: {
    Calendar: {
      fullscreen: false
    }
  },
  Descriptions: {
    Descriptions: {
      title: 'Description Title',
      children: [
        {
          tag: 'Descriptions.Item',
          key: uuid(),
          props: {
            label: 'DescriptionsItem Label'
          },
          children: ['DescriptionsItem Content']
        },
      ]
    },
    'Descriptions.Item': {
      label: 'DescriptionsItem Label',
      children: 'DescriptionsItem Content'
    }
  },
  Empty: {
    Empty: {}
  },
  List: {
    List: {
      header: 'Header',
      footer: 'Footer',
      dataSource: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ],
      renderItem: (item: any) => (createElement(List.Item), null, item)
    },
    'List.Item': {
      children: 'ListItem Content'
    },
    'List.Item.Meta': {
      avatar: createElement(Avatar, { src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }),
      title: 'Default Title',
      description: 'Default Description'
    }
  },
  Popover: {
    Popover: {
      content: 'Popover Content',
      children: 'Hover Me'
    }
  },
  Statistic: {
    Statistic: {
      title: 'Statistic Title',
      value: 100
    }
  },
  Tree: {
    Tree: {
      treeData: [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
            },
          ],
        },
      ],
      defaultExpandedKeys: ['0-0-0', '0-0-1']
    },
    'Tree.TreeNode': {
      title: 'TreeNode Title',
      key: '0'
    }
  },
  Tooltip: {
    Tooltip: {
      title: 'Tooltip  Title',
      children: 'Tooltip Content'
    }
  },
  Timeline: {
    Timeline: {
      children: [
        {
          tag: 'Timeline.Item',
          key: uuid(),
          children: ['Timeline.Item 1']
        },
        {
          tag: 'Timeline.Item',
          key: uuid(),
          children: ['Timeline.Item 2']
        },
        {
          tag: 'Timeline.Item',
          key: uuid(),
          children: ['Timeline.Item 3']
        },
      ]
    },
    'Timeline.Item': {
      children: 'Timeline Content'
    }
  },
  Tag: {
    Tag: {
      children: 'Tag'
    }
  },
  Tabs: {
    Tabs: {
      defaultActiveKey: "1",
      children: [
        {
          tag: 'Tabs.TabPane',
          key: uuid(),
          props: {
            tab: 'Tab1',
            key: '1'
          },
          children: ['Content of Tab Pane 1']
        },
        {
          tag: 'Tabs.TabPane',
          key: uuid(),
          props: {
            tab: 'Tab2',
            key: '2'
          },
          children: ['Content of Tab Pane 2']
        },
      ]
    },
    'Tabs.TabPane': {
      tab: 'Tan',
      key: '0',
      children: 'Content'
    }
  },
  Table: {
    Table: {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ]
    }
  },
  Alert: {
    Alert: {
      message: 'Alert Message'
    }
  },
  Progress: {
    Progress: {
      precent: 30
    }
  },
  Popconfirm: {
    Popconfirm: {
      title: 'Popconfirm Title',
    }
  }
};

const antdComponentNameArr = [
  'Layout',          'Layout.Footer',          'Layout.Content',
  'Layout.Header',   'Layout.Sider',           'Row',
  'Col',             'Button',                 'Divider',
  'Affix',           'Breadcrumb',             'Breadcrumb.Item',
  'Dropdown',        'Menu-horizontal',        'Menu-inline',
  'Menu-vertical',   'SubMenu',                'Menu.ItemGroup',
  'Menu.Item',       'Pagination',             'PageHeader',
  'Steps',           'Step',                   'AutoComplete',
  'Checkbox',        'Checkbox.Group',         'Cascader',
  'DatePicker',      'DatePicker.RangePicker', 'Form',
  'Form.Item',       'InputNumbser',           'placeholder',
  'Mutentions',      'Rate',                   'Radio',
  'Radio.Group',     'Radio.Button',           'Switch',
  'Slider',          'Select',                 'Select.Option',
  'Select.OptGroup', 'TreeSelect',             'TreeSelect.TreeNode',
  'Transfer',        'TimePicker',             'TimePicker.RangePicker',
  'Upload',          'Avatar',                 'Badge',
  'Collapse',        'Collapse.Panel',         'Carousel',
  'Card',            'Card.Meta',              'Calendar',
  'Descriptions',    'Descriptions.Item',      'Empty',
  'List',            'List.Item',              'List.Item.Meta',
  'Popover',         'Statistic',              'Tree',
  'Tree.TreeNode',   'Tooltip',                'Timeline',
  'Timeline.Item',   'Tag',                    'Tabs',
  'Tabs.TabPane',    'Table',                  'Alert',
  'Progress',        'Popconfirm'
] as const;
export type AntdComponentName = typeof antdComponentNameArr[number];

export type AntdCategory = keyof (typeof antdComponents)
export default antdComponents

// TODO
// Drawer Modal Message Notification Result Spin Skeleton
