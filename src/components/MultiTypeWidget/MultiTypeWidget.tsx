import React, { useState } from 'react';
import { Radio, Switch, Input, InputNumber } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

function renderFormItem(type: string, setFormData: any, properties?: any) {
  switch (type) {
    case 'string':
      return <Input onChange={(e: any) => setFormData(e.target.value)} />;
    case 'boolean':
      return (
        <Switch
          onChange={checked => {
            console.log('checked', checked);
            setFormData(checked);
          }}
        />
      );
    case 'number':
      return <InputNumber size="small" onChange={val => setFormData(val)} />;
    case 'object':
      return (
        <div>
          {Object.keys(properties).map((key: any, index: number) => {
            const property = properties[key];
            const setObjFormItem = (value: any) => {
              setFormData({
                [key]: value,
              });
            };
            return (
              <label className="fr-label-title no-colon ml2 w-100" key={key}>
                <span className="flex-none" style={{ marginTop: '5px' }}>
                  {property.title}
                </span>
                {renderFormItem(property.type, setObjFormItem)}
              </label>
            );
          })}
        </div>
      );
    default:
      return <Input onChange={(e: any) => setFormData(e.target.value)} />;
  }
}

export default function MultiTypeWidget(props: any) {
  const { name, schema, onChange } = props;
  let formData = props.formData;
  const { type, properties } = schema;
  let options = type.map((item: string) => ({ label: item, value: item }));
  const [state, setState] = useState(type[0]);
  const handleChange = (e: RadioChangeEvent) => {
    setState(e.target.value);
  };
  const setFormData = (value: any) => {
    onChange(name, value);
  };
  return (
    <div>
      <Radio.Group options={options} onChange={handleChange} value={state} />
      {renderFormItem(state, setFormData, properties)}
    </div>
  );
}
