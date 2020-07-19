import React, { useState } from 'react';
import { Col, Row, Modal } from 'antd';
import { UndoOutlined, RedoOutlined, EyeOutlined, DownloadOutlined, SaveOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import Preview from './Preview'
import map from 'lodash/map'
import { reduxConnect } from '@/utils'
import { Dispatch } from 'redux';
import styles from './style.css';
import { VirtualComp } from '@/types';

export interface ToolBarProps {
  dispatch?: Dispatch;
  selectedInfo?: any;
  projectSchema?: VirtualComp[];
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




function renderMenu(config: any, key: string) {
  const { title, icon, handleClick } = config;
  return (
    <div
      style={{ color: '#000' }}
      className={styles['icon-container']}
      key={key}
      onClick={ handleClick ? handleClick : undefined}
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
  const [visible, setVisible] = useState(false);
  const {
    projectSchema = []
  } = props;
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
      { title: '预览', icon: () => <EyeOutlined />, handleClick: () => setVisible(true) },
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
  return (
    <Row justify="space-around" align="middle" className={styles.content}>
       <Col style={{ fontSize: '18px', paddingLeft: '21px', height: 64 }} span={4}>React-Visual-Editor</Col>
       <Col span={20}>
          <Row>
            {map(toolbarMenus, renderGroup)}
          </Row>
        </Col>
      <Modal
        destroyOnClose
        visible={visible}
        width="100%"
        bodyStyle = {{
          padding: 0,
          overflow: 'hidden',
          height: '100vh',
        }}
        footer={null}
        closable={false}
        wrapClassName={styles['full-screen']}
      >
        <Preview projectSchema={projectSchema} visible={visible} onCancel={() => setVisible(false)}/>
      </Modal>
    </Row>
  )
}

export default reduxConnect(['projectSchema'])(ToolBar)
