import React from 'react';
import Page from './Page';
import { LeftOutlined } from '@ant-design/icons'
import { VirtualComp } from '@/types';
import styles from './style.css'

interface PreviewProps {
  projectSchema: VirtualComp[];
  visible: boolean;
  onCancel: () => void;
}

export default function Preview(props: PreviewProps) {

  const { projectSchema = [], visible, onCancel } = props;

  function renderHeader() {
    return (
      <div className={`${styles['preview-header']}  box-line-shadow`} onClick={onCancel}>
        <LeftOutlined />
        Preview
      </div>);

  }

  if (!visible) return null;
  return (
    <>
      {renderHeader()}
      <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'row' }}>
        {/*<Resizable*/}
        {/*  defaultSize={{ width: '260px', height: '100%' }}>*/}
        {/*  <Code componentConfigs={componentConfigs}/>*/}
        {/*</Resizable>*/}
        <div className={styles['page-container']}>
          <Page projectSchema={projectSchema}/>
        </div>
      </div>
    </>
  );
}
