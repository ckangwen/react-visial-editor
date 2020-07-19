import React, { createElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { Spin } from 'antd'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import get from 'lodash/get'
import { VirtualComp } from '@/types';
import { AllComponentPropConfig, CollectedComponents, iframeSrcDoc, nativeHTMLTag, OriginalComponents } from '@/config';
import styles from './style.css'
import { formatSpecialProps } from '@/utils';


interface PreviewPageProps {
  projectSchema: VirtualComp[],
}

function renderPage(nodes: (VirtualComp | string)[]) {
  return  nodes.map((node: VirtualComp | string, index: number) => {
    if (typeof node === 'string') {
      return node
    }
    const {
      tag = '',
      children,
      props = {}
    } = node;

    let propsConfig = {};
    if (nativeHTMLTag.indexOf(tag || '') < 0) {
      propsConfig = AllComponentPropConfig[tag as CollectedComponents]
    }
    const propsCopy = cloneDeep(props);
    if (children && children.length > 0) {
      propsCopy.children = renderPage(children);
    }
    const type = nativeHTMLTag.indexOf(tag) > -1 ? tag : get(OriginalComponents, tag) || 'div';
    return createElement(type, { ...formatSpecialProps(propsCopy, merge({}, propsConfig)), key: `${tag}-${index}` })
  });
}

export default function PreviewPage(props: PreviewPageProps) {
  const { projectSchema } = props;
  const [spinShow, setSpinShow] = useState(true);

  const content: any = renderPage(projectSchema);

  useEffect(() => {
    if (!spinShow) {
      const iframe: any = document.getElementById('preview-iframe');
      ReactDOM.render(content, iframe.contentDocument.getElementById('dnd-container'));
    }
  }, [spinShow, projectSchema, content]);


  return (
    <div className={` ${styles['browser-mockup']} ${styles['with-url']} `}>
      <Spin size={'large'}
            style={{ maxHeight: '100%' }}
            wrapperClassName={styles['dnd-container']}
            spinning={spinShow}
      >
        <iframe
          title="preview-iframe"
          id="preview-iframe"
          className={styles['dnd-container']}
          srcDoc={iframeSrcDoc}
          onLoad={() => setSpinShow(false)}
        />
      </Spin>
    </div>
  );
}

