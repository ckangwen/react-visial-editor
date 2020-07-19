import React, { useEffect, useRef, useState } from 'react';
import { Tabs } from 'antd';
import hljs from 'highlight.js';
import { generatePageCode } from '../../../utils';
import 'highlight.js/styles/androidstudio.css';
import { VirtualComp } from '@/types';
import styles from './style.css';

const { TabPane } = Tabs;

interface CodePropsType {
  projectSchema: VirtualComp[]
}

export default function Code(props: CodePropsType) {
  const codeRef: any = useRef();
  const styleRef: any = useRef();
  const [code, setCode] = useState('');
  const [activeKey, setActiveKey] = useState('1');
  const [style, setStyle] = useState('');
  const { projectSchema } = props;
  useEffect(() => {
    const { pageCodes, styleSheetCodes } = generatePageCode(projectSchema);
    setCode(pageCodes);
    setStyle(styleSheetCodes);
  }, [projectSchema]);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
    hljs.highlightBlock(styleRef.current);
  }, [code, style]);


  return (
    <Tabs
      onChange={(activeKey: string) => setActiveKey(activeKey)}
      activeKey={activeKey}
      className={styles['card-container']}
    >
      <TabPane style={{ height: '100%' }} forceRender key="1" tab="Code">
            <pre style={{ height: '100%', margin: 0 }}>
              <code style={{ height: '100%' }} ref={codeRef} className="language-js">
                {`${code}\n\n\n\n\n`}
              </code>
            </pre>
      </TabPane>
      <TabPane style={{ height: '100%' }} forceRender key="2" tab="Style">
            <pre style={{ height: '100%', margin: 0 }}>
              <code style={{ height: '100%' }} ref={styleRef} className="language-js">
                {`\n${style}\n\n\n\n\n`}
              </code>
            </pre>
      </TabPane>
    </Tabs>
  );
}
