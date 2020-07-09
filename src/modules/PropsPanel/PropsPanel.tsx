import React, { useEffect, useRef, useState } from 'react';
import FormRender from 'form-render/lib/antd';
import { reduxConnect } from '@/utils';
import { Button, message } from 'antd';
import isEmpty from 'lodash/isEmpty';
import './style.css';
import { ACTION_TYPES } from '@/models';
import MultiTypeWidget from '@/components/MultiTypeWidget';
import NumberArrayWidget from '@/components/NumberArrayWidget';

import {
  ComponentConfig,
  CompSelectedInfo,
  ProjectSchemaProps,
  SET_COMPONENT_PROPS,
} from '@/types';
import { AllComponentPropConfig, CollectedComponents } from '@/config';
import { Dispatch } from 'redux';

const customWidgets = {
  numberArray: 'number-array',
  stringArray: 'string-array',
};

interface PropsPanelProps {
  projectSchema?: ProjectSchemaProps;
  selectedInfo?: CompSelectedInfo;
  hoverKey?: string;
  dispatch?: Dispatch;
}

function PropPanel(props: any) {
  let propsSchema = {
    type: 'object',
    properties: {} as any,
  };
  let ref = useRef<any>(propsSchema);
  let uiSchema: any = {};
  let uiSchemaRef = useRef<any>({});
  // TODO rename: projectPropsSheet => currentPropsValue
  const { projectPropsSheet, dispatch, selectedInfo } = props;
  const { tag } = selectedInfo;
  const initPropsSchema = AllComponentPropConfig[tag as CollectedComponents] as ComponentConfig;

  const [formData, setFormData] = useState(projectPropsSheet);
  const [valid, setValid] = useState([]);

  useEffect(() => {
    if (!isEmpty(initPropsSchema) && !isEmpty(initPropsSchema.propsConfig)) {
      (Object.keys(initPropsSchema.propsConfig) || []).forEach(key => {
        let value = initPropsSchema.propsConfig[key];
        if (value.type === 'function') {
          uiSchema[key] = {
            'ui:widget': 'textarea',
          };
        }
        if (value.type === 'numberArray') {
          uiSchema[key] = {
            'ui:widget': 'number-array',
          };
        }
        if (Array.isArray(value.type)) {
          uiSchema[key] = {
            'ui:widget': 'multi-type',
          };
        }
        propsSchema.properties[key] = value as any;
      });
    }
    uiSchemaRef.current = uiSchema;
    ref.current = propsSchema;
  }, [propsSchema, propsSchema.properties, initPropsSchema, uiSchema]);

  useEffect(() => {
    // 表单中prop的值回显，使现在的formData与前一次的formData保持一致
    setFormData(projectPropsSheet);
  }, [projectPropsSheet]);

  const onSubmit = () => {
    if (valid.length > 0) {
      message.warning(`校验未通过字段：${valid.toString()}`);
    } else {
      dispatch({
        type: ACTION_TYPES[SET_COMPONENT_PROPS],
        payload: {
          newProps: formData,
        },
      });
    }
  };
  if (isEmpty(propsSchema)) {
    return <p>暂无</p>;
  }

  return (
    <div
      className="form-render-container"
      style={{ padding: '0 10px', height: 'calc(calc(100vh - 120px) - 35px)', overflow: 'auto' }}
    >
      <FormRender
        propsSchema={ref.current}
        formData={formData}
        uiSchema={uiSchemaRef.current}
        onChange={setFormData}
        onValidate={setValid}
        widgets={{
          'multi-type': MultiTypeWidget,
          'number-array': NumberArrayWidget,
        }}
      />
      <Button type="primary" onClick={onSubmit}>
        提交
      </Button>
    </div>
  );
}

export default reduxConnect(['projectPropsSheet', 'selectedInfo'])(PropPanel);
