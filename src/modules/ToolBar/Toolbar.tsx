import React from 'react'
import { Col, Row } from 'antd';
import map from 'lodash/map'
import { UndoOutlined, RedoOutlined, EyeOutlined, DownloadOutlined, SaveOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './style.css';
import { Dispatch } from 'redux';

export interface ToolBarProps {
  dispatch?: Dispatch;
  selectedInfo?: any;
  projectSchema?: any;
  undo?: any[];
  redo?: any[];
  styleSetting?: any;
}

interface ToolbarMenusProps{
  span: number;
  style: React.CSSProperties;
  group: ({
    title: string;
    icon: React.ReactNode;
    handleClick?: () => void;
  })[]
}

const toolbarMenus: ToolbarMenusProps[] = [{
  span: 8,
  style: { justifyContent: 'flex-end' },
  group: [
    { title: 'undo', icon: () => <UndoOutlined /> },
    { title: 'redo', icon: () => <RedoOutlined /> },
  ],
}, {
  span: 8,
  style: { justifyContent: 'flex-end' },
  group: [
    { title: '预览', icon: () => <EyeOutlined /> },
    { title: '导出代码', icon: () => <DownloadOutlined /> },
  ],
},
  {
    span: 8,
    style: { justifyContent: 'flex-end', paddingRight: '50px' },
    group: [
      { title: 'save', icon: () => <SaveOutlined /> },
      { title: 'copy', icon: () => <CopyOutlined /> },
      { title: 'clear', icon: () => <DeleteOutlined /> },

    ],
  }];


function renderMenu(config: any, key: string) {
  const { title, icon } = config
  return (
    <div
      style={{ color: '#000' }}
      className={styles['icon-container']}
      key={key}
    >
      { icon() }
      <span>{title}</span>
    </div>
  )
}

function renderGroup(content: any, key: string) {
  const { span, group, style = {} } = content;
  return (
    <Col span={span} key={key}>
      <div style={{ display: 'flex', flex: 1, ...style }}>
        {map(group, renderMenu)}
      </div>
    </Col>
  );

}

function ToolBar(props: ToolBarProps) {
  return (
    <Row justify="space-around" align="middle" className={styles.content}>
       <Col style={{ fontSize: '18px', paddingLeft: '21px', height: 64 }} span={4}>React-Visual-Editor</Col>
       <Col span={20}>
          <Row>
            {map(toolbarMenus, renderGroup)}
          </Row>
        </Col>
    </Row>
  )
}

export default ToolBar
