export default  [
  {
    key: "c8579048-dbb9-4ee2-91c8-641467413a5a",
    tag: 'Layout',
    props: {
      style: {
        height: '100%'
      },
      className: "demo"
    },
    // [0]
    children: [
      {
        // [0].children[0]
        key: 'dcb5b1fc-a28a-4f03-865f-738a638cb92c',
        tag: 'Layout.Header',
        props: {},
        children: [
          {
            key: '17gb4bc5-345c-4045-aaf4-f059216804e5',
            tag: 'div',
            props: {
              style: {
                height: '31px',
                width: '120px',
                float: 'left',
                backgroundColor: '#000',
                marginTop: '16px'
              },
              className: 'logo'
            }
          },
          {
            // [0].children[1]
            key: '331103d8-7fc0-4fdf-a479-db915fdb2655',
            tag: 'Menu',
            props: {
              mode: 'horizontal',
              theme: 'dark',
              style: {
                lineHeight: '64px'
              }
            },
            children: [
              {
            // [0].children[1].children[0]
                key: '05b9ecbd-2da6-4793-b8e3-062ff0ad26da',
                tag: 'Menu.Item',
                props: {
                  key: 1,
                },
                children: [
                  {
            // [0].children[1].children[0].children[0]
                    key: '2da6-05b9ecbd-4793-b8e3-062ff0ad26da',
                    tag: 'section',
                    children: [
                      {
                        key: '053da6-b9ecbd-4793-b8e3-062ff0ad26da',
                        tag: 'section',
                        children: [
                          'NN ac'
                        ]
                      }
                    ]
                  }
                ]
              },
              {
            // [0].children[1].children[1]
                key: 'f289d0a7-b0a4-421b-9b8a-d899466dd3ad',
                tag: 'Menu.Item',
                props: {
                  key: 2,
                },
                children: [
            // [0].children[1].children[1].[0]
                  'Nav 2'
                ]
              },
              {
            // [0].children[1].children[2]
                key: '7129f821-721a-485d-a757-f9a8014eb546',
                tag: 'Menu.Item',
                props: {
                  key: 3,
                },
                children: [
                  'Nav 3'
                ]
              }
            ]
          }
        ]
      },
      {
        // [0].children[1]
        key: 'bb2a50ae-e262-45a9-84b0-af94c24b1e0b',
        tag: 'Layout',
        children: [
          {
            key: '8cb471fc-a28a-4f03-865f-738a638cb92c',
            tag: 'Layout.Sider',
            props: {
              theme: 'light'
            },
            children: [
              {
                key: '331103d8-7fc0-4fdf-a479-db915fdb2655',
                tag: 'Menu',
                props: {
                  theme: 'dark',
                  mode: 'inline',
                  style: {
                    lineHeight: '64px'
                  }
                },
                children: [
                  {
                    key: 'e5464f92-6765-4b37-a21a-e931f0e11cf6',
                    tag: 'Menu.SubMenu',
                    props: {
                      title: 'Helllllo'
                    },
                    children: [
                      {
                        key: '1853487c-8857-45a6-8fdb-6591eeff49ea',
                        tag: 'Menu.Item',
                        children: [
                          'SubMenu 1'
                        ]
                      },
                      {
                        key: 'aacd3487c-8857-45a6-8fdb-6591eeff49ea',
                        tag: 'Menu.Item',
                        children: [
                          'SubMenu 2'
                        ]
                      },
                    ]
                  },
                  {
                    key: '4439ecbd-2da6-4793-b8e3-062ff0ad26da',
                    tag: 'Menu.Item',
                    props: {
                      key: 1,
                    },
                    children: [
                      'H Nav 1'
                    ]
                  },
                  {
                    key: 'csa9d0a7-b0a4-421b-9b8a-d899466dd3ad',
                    tag: 'Menu.Item',
                    props: {
                      key: 2,
                    },
                    children: [
                      'H Nav 2'
                    ]
                  },
                  {
                    key: 'asca00821-721a-485d-a757-f9a8014eb546',
                    tag: 'Menu.Item',
                    props: {
                      key: 3,
                    },
                    children: [
                      'H Nav 3'
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: 'adbb71vv-a28a-4f03-865f-738a638cb92c',
            tag: 'Layout.Content',
            props: {},
            children: [
              {
                key: '4f034f03-a28a-865f-738a638cb92c',
                tag: 'Avatar',
                props: {},
                children: ['U']
              }
            ]
          }
        ]
      }
    ]
  }
]
