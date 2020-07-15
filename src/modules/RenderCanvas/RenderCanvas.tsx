import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import { Ruler } from '@/components/Ruler';
import Wrapper from './Wrapper';
import { reduxConnect } from '@/utils';
import { iframeSrcDoc } from '@/config';
import { ACTION_TYPES } from '@/models';
import { Dispatch } from 'redux';
import { ProjectSchemaProps, CompSelectedInfo, ADD_COMPONENT } from '@/types';
import styles from './style.css';

let dispatch: Dispatch;
interface RenderCanvasProps {
  projectSchema?: ProjectSchemaProps;
  selectedInfo?: CompSelectedInfo;
  hoverKey?: string;
  dispatch?: Dispatch;
}

function onDrop(e: any) {
  e.stopPropagation();
  dispatch({ type: ACTION_TYPES[ADD_COMPONENT] });
}
function onDragover(e: any) {
  e.preventDefault();
}
const renderContent = (
  projectSchema?: ProjectSchemaProps,
  selectedInfo?: CompSelectedInfo,
  hoverKey: string = '',
) => {
  let content = null;
  if (Array.isArray(projectSchema) && projectSchema.length > 0) {
    const { tag, key } = projectSchema[0] || {};
    const resultProps = {
      componentConfig: projectSchema[0],
      path: '[0]',
      compKeys: [key],
      selectedInfo: selectedInfo || {},
      hoverKey,
      dispatch,
    };
    content = React.createElement(Wrapper, { containerName: 'Layout', ...resultProps });
  }
  return content;
};

function RenderCanvas(props: RenderCanvasProps) {
  const { projectSchema, selectedInfo, hoverKey = '' } = props;
  dispatch = props.dispatch!;
  const [spinShow, setSpinShow] = useState(true);
  let iframe = useRef<HTMLIFrameElement>();

  // 为iframe添加事件响应，放置于useEffect中是为了防止多次渲染重复调用
  useEffect(() => {
    iframe.current = document.getElementById('dnd-iframe') as HTMLIFrameElement;
    iframe.current.contentWindow!.addEventListener('drop', onDrop);
    iframe.current.contentWindow!.addEventListener('dragover', onDragover);
  }, []);

  let content: any = renderContent(projectSchema, selectedInfo, hoverKey);

  let divContainer = useRef(null);
  useEffect(() => {
    if (!spinShow) {
      console.log(2);
      divContainer.current = iframe.current!.contentDocument?.getElementById('dnd-container') as any;
      ReactDOM.render(content!, divContainer.current);
    }
  }, [content, divContainer, spinShow]);

  return (
    <section className={styles['render-canvas-container']}>
      <Ruler
        type="horizontal"
        style={{
          display: 'block',
          position: 'absolute',
          width: '966px',
          height: '30px',
          marginLeft: 30,
        }}
      />
      <Ruler
        type="vertical"
        style={{ display: 'inline-block', width: '30px', height: '100%', marginTop: 30 }}
      />
      <div className={styles['render-canvas-content']}>
        <Spin
          size={'large'}
          style={{ maxHeight: '100%' }}
          wrapperClassName={styles['dnd-container']}
          spinning={spinShow}
        >
          <iframe
            title="simple"
            id="dnd-iframe"
            className={styles['dnd-container']}
            srcDoc={iframeSrcDoc}
            onLoad={useCallback(() => setSpinShow(false), [])}
          />
        </Spin>
      </div>
    </section>
  );
}

export default reduxConnect(['projectSchema', 'selectedInfo', 'hoverKey'])(RenderCanvas);
