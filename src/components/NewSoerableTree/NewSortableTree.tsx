import React, { useState, useEffect } from 'react';
import { Collapse, message } from 'antd';
import {
  EllipsisOutlined,
  CaretRightFilled,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import { getPath } from '@/utils/index';
import map from 'lodash/map';
import get from 'lodash/get';
import styles from './bb.css';
import { v4 as uuid } from 'uuid';
import { reduxConnect, usePrevious } from '../../utils/index';
import { Dispatch } from 'redux';

let dispatch: Dispatch;

const { Panel } = Collapse;

function selectComponent(props: any, isSelected: boolean) {}

function renderHeader(
  props: any,
  isUnfold: boolean,
  setIsUnfold: any,
  visible: boolean,
  setVisible: any,
  isSelected: boolean,
  showArrow: boolean = true,
) {
  const { tag, key, text } = props.componentConfig;
  const selectedColor = '#5E96FF';
  const unSelectedColor = '#555555';
  const selectedBGColor = '#F2F2F2';
  const hoveredBGColor = '#F1F1F1';
  const color = isSelected ? selectedColor : unSelectedColor;
  const isHovered = false;
  // const isHovered = key === hoverKey && isEmpty(selectedComponentInfo);

  return (
    <div
      key={key}
      style={{
        backgroundColor: isSelected ? selectedBGColor : isHovered ? hoveredBGColor : '#0000',
      }}
      className={styles['header-container']}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        selectComponent(props, isSelected);
      }}
    >
      <span style={{ color }}>
        {showArrow && (
          <CaretRightFilled
            style={{
              padding: 5,
              fontSize: 16,
              transition: 'all .2s',
              transform: isUnfold ? 'rotate(90deg)' : undefined,
            }}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setIsUnfold(!isUnfold);
            }}
          />
        )}
        {visible && (
          <EyeOutlined
            onClick={() => setVisible(false)}
            style={{ padding: 5, fontSize: 16, paddingLeft: showArrow ? undefined : '26px' }}
          />
        )}
        {!visible && (
          <EyeInvisibleOutlined
            onClick={() => setVisible(true)}
            style={{ padding: 5, fontSize: 16, paddingLeft: showArrow ? undefined : '26px' }}
          />
        )}
        <span>{tag || text}</span>
      </span>
      <EllipsisOutlined style={{ paddingLeft: 10 }} />
    </div>
  );
}

function SortItem(props: any) {
  // 是否展开
  const { componentConfig, path, selectedInfo = {}, compKeys = [], hoverKey, dispatch } = props;
  const { key = '', tag = '', text } = componentConfig;
  const newCompKeys = [...compKeys, key];

  const [isUnfold, setIsUnfold] = useState(false);

  const [visible, setVisible] = useState(true);
  const selectedKey = get(selectedInfo, 'selectedKey', '');
  let newPath = '';
  const isSelected = selectedKey === key;

  // 文本元素
  if (text) {
    return (
      <div>
        {renderHeader(
          { componentConfig, compKeys: newCompKeys, path },
          isUnfold,
          setIsUnfold,
          visible,
          setVisible,
          isSelected,
          false,
        )}
      </div>
    );
  } else if (!componentConfig.children || componentConfig.children.length === 0) {
    // 没有子元素
    return (
      <div>
        {renderHeader(
          { componentConfig, compKeys: newCompKeys, path },
          isUnfold,
          setIsUnfold,
          visible,
          setVisible,
          isSelected,
          false,
        )}
      </div>
    );
  } else {
    // 具有子节点
    // 可能是普通节点、也可能是折叠面板
    const { key, children } = componentConfig;
    // const newCompkeys = [...compKeys, key]
    return (
      <div className={styles['sort-tree-item']} key={key}>
        {/* <div className="sort-tree-item" key={key}> */}
        {renderHeader(
          { componentConfig, compKeys: newCompKeys, path },
          isUnfold,
          setIsUnfold,
          visible,
          setVisible,
          isSelected,
        )}
        <Collapse
          activeKey={isUnfold ? ['1'] : []}
          bordered={false}
          style={{ display: visible ? 'block' : 'none' }}
        >
          <Panel showArrow={false} key="1" header={<div />}>
            {map(children, (item, index: number) => {
              const { children, ...rest } = props.componentConfig;
              let prevCompConfig = { ...item };
              if (typeof item === 'string') {
                prevCompConfig = {
                  text: item,
                  key: `TEXT_NODE_KEY-${uuid()}`,
                };
              }
              const componentConfig = {
                ...prevCompConfig,
                parent: {
                  ...rest,
                },
              };
              newPath = getPath({ path, index });
              return (
                <SortItem
                  key={index}
                  componentConfig={componentConfig}
                  path={newPath}
                  selectedInfo={selectedInfo}
                  hoverKey={hoverKey}
                  dispatch={dispatch}
                  compKeys={newCompKeys}
                />
              );
            })}
          </Panel>
        </Collapse>
      </div>
    );
  }
}

function SortTree(props: any) {
  const { projectSchema, selectedInfo, hoverKey } = props;

  dispatch = props.dispatch;
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');
  const [selectedComp, setSelectedComp] = useState('');
  const prevSelectedComp = usePrevious(selectedComp);

  return (
    <div className={styles['sort-tree-container']}>
      {map(projectSchema, (item, index: number) => {
        const { key } = item;
        const componentConfig = {
          ...item,
          parent: {},
        };
        let path = `[${index}]`;
        let compKeys = [key];
        return (
          <div className={styles['sort-tree']} key={key}>
            <SortItem
              componentConfig={componentConfig}
              path={path}
              selectedInfo={selectedInfo}
              hoverKey={hoverKey}
              dispatch={dispatch}
              compKeys={compKeys}
            />
          </div>
        );
      })}
    </div>
  );
}

export default reduxConnect(['projectSchema', 'selectedInfo', 'compKeys'])(SortTree);
