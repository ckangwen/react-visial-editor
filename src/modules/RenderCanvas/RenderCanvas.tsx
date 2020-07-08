import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Spin, Button } from 'antd';
import { Ruler } from '@/components/Ruler';
import { reduxConnect } from '@/utils';
import styles from './style.css';
import { Dispatch } from 'redux';
import { ProjectSchemaProps } from '@/types/components';
import { CompSelectedInfo } from '@/types/data';
import { iframeSrcDoc } from '@/config';
import Wrapper from '@/modules/RenderCanvas/Wrapper';

let dispatch: Dispatch;
interface RenderCanvasProps {
  projectSchema?: ProjectSchemaProps;
  selectedInfo?: CompSelectedInfo;
  hoverKey?: string;
  dispatch?: Dispatch;
}

function onDrop() {}
function onDragover(e: any) {}

function RenderCanvas(props: RenderCanvasProps) {
  const { projectSchema, selectedInfo = {}, hoverKey = '' } = props;
  dispatch = props.dispatch!;
  const [spinShow, setSpinShow] = useState(true);
  let content: any;
  console.log(projectSchema);
  if (Array.isArray(projectSchema) && projectSchema.length > 0) {
    const { tag, key } = projectSchema[0] || {};
    const resultProps = {
      componentConfig: projectSchema[0],
      path: '[0]',
      compKeys: [key],
      selectedInfo,
      hoverKey,
      dispatch,
    };
    // content = React.createElement(Button, null, ['hello']);
    content = React.createElement(Wrapper, { containerName: 'Layout', ...resultProps });
  }
  let divContainer = useRef(null);
  useEffect(() => {
    const iframe = document.getElementById('dnd-iframe') as HTMLIFrameElement;
    iframe.contentWindow!.addEventListener('drop', onDrop);
    // eslint-disable-next-line no-unused-expressions
    iframe.contentWindow?.addEventListener('dragover', (e: any) => {
      onDragover(e);
    });
    if (!spinShow) {
      divContainer.current = iframe!.contentDocument?.getElementById('dnd-container') as any;
      ReactDOM.render(content, divContainer.current);
    }
  }, [content, divContainer, spinShow]);
  useEffect(() => {
    if (divContainer.current) {
      ReactDOM.render(content, divContainer.current);
    }
  }, [content]);
  return (
    <section className={styles['render-canvas-container']}>
      <Ruler
        type="horizontal"
        style={{ display: 'block', width: '100%', height: '30px', marginLeft: 30 }}
      />
      <Ruler type="vertical" style={{ display: 'inline-block', width: '30px', height: '100%' }} />
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
