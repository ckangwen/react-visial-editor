import React, { useState, useRef, ReactNode } from 'react';
import { Radio, Drawer, Button, Input } from 'antd';
import data from './list';
import Fuse from 'fuse.js';
import styles from './style.css';
import './icons/iconfont.css';

interface SelectListItemProps {
  value: string;
  icon: string;
  text?: string;
}

/**
 * Radio Button
 * */
function SelectListItem(props: SelectListItemProps) {
  const { value, icon, text } = props;
  return (
    <Radio.Button value={value} className={styles['radio-button-wrapper']}>
      <div className={styles['radio-button-content']}>
        <span className={` iconfont icon-${icon} ${styles['icon']}`} />
        <span>{text || value}</span>
      </div>
    </Radio.Button>
  );
}

interface DrawerPanelProps {
  handleSelect: (value: string | null) => void;
  visible: boolean;
  onClose: () => void;
  onCancel: () => void;
}

export default function DrawerPanel(props: DrawerPanelProps) {
  const { handleSelect, onClose, onCancel, visible } = props;
  const [value, setValue] = useState(null);
  const [componentList, setComponentList] = useState(data);

  // 搜索目标组件
  const onSelectComponent = (value: string) => {
    if (value !== '') {
      const options = {
        keys: ['value'],
        threshold: 0.2,
      };
      const result = new Fuse(componentList, options).search(value).map(t => {
        return { ...t.item };
      });

      setComponentList(result);
    } else {
      // 搜索的值为空，则展示全部组件
      setComponentList(data);
    }
  };

  return (
    <Drawer
      title="组件选择"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      key="right"
      footer={
        [
          <div key="1">
            <Input.Search placeholder="search" onSearch={value => onSelectComponent(value)} />
            <Button type="primary" onClick={() => handleSelect(value)}>
              提交
            </Button>
            <Button style={{ float: 'right' }} onClick={onCancel}>
              取消
            </Button>
          </div>,
        ] as ReactNode
      }
    >
      <Radio.Group
        className={styles['vertical-radio-group']}
        onChange={(e: any) => setValue(e.target.value)}
      >
        {componentList.map(({ text, icon, value }) => {
          return <SelectListItem key={value} text={text} value={value} icon={icon} />;
        })}
      </Radio.Group>
    </Drawer>
  );
}
