import React, { createElement } from 'react'

const compsDefaultInjection = {
  'Menu.Item': {
    key: '1',
    children: createElement('span', null, 'MenuItem Default Text')
  }
}

export default compsDefaultInjection