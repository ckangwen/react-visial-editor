import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { ComponentPropDeclaration } from '@/types';

// TODO 在badge的offset属性时，会有bug，有数字变为小点
export default function NumberArrayWidget(props: any) {
  const { name, schema, onChange } = props;
  let formData = props.formData;
  const { properties = [] } = schema as ComponentPropDeclaration;
  const initState = new Array(properties.length).fill(0);
  const [state, setState] = useState(formData[name] || initState);
  const setFormData = (key: string, value: string | number | undefined) => {
    const index = properties.indexOf(key);
    const prevState = state.slice(0, index);
    const nextState = state.slice(index);
    const newState = [...prevState, value, nextState];
    setState(newState);
    onChange(name, newState);
  };
  return (
    <div>
      {(properties as string[]).map((item: string, index: number) => {
        return (
          <label
            className="no-colon ml2 w-100"
            key={index}
            style={{ display: 'block', marginBottom: 5 }}
          >
            <span className="flex-none" style={{ marginRight: '5px' }}>
              {item}
            </span>
            <InputNumber
              size="small"
              value={state[index]}
              onChange={val => setFormData(item, val)}
            />
          </label>
        );
      })}
    </div>
  );
}
