import React, { createElement } from 'react';
import { Dispatch } from 'redux';
import cz from 'classnames';
import get from 'lodash/get';
import { nativeHTMLTag, OriginalComponents } from '@/config';
import { ACTION_TYPES } from '@/models';
import { getPath } from '@/utils';
import styles from './style.css';
import {
  CLEAR_SELECT_STATUS,
  GET_DRAG_DATA, GET_DROP_DATA,
  HOVER_COMPONENT,
  SELECT_COMPONENT,
} from '@/types/store';

let dispatch: Dispatch;

interface CommonContainerProps {
  dispatch: Dispatch;
  selectedInfo: any;
  hoverKey: string | null;
  componentConfig: any;
  compKeys: string[];
  containerName: string;
  index?: string | number;
  parentPath?: string;
  path: string;
}

function mergeClassName(isHovered: boolean, isSelected: boolean, className?: any) {
  return cz(
    isHovered ? styles['component--hovered'] : null,
    isSelected ? styles['component--selected'] : null,
    className,
  );
}

function selectedStatus(key: string, hoverKey: string | null, selectedKey?: string) {
  const isSelected = !!selectedKey && selectedKey === key;
  /** 是否hover到当前组件 */
  const isHovered = hoverKey === key;
  return { isHovered, isSelected };
}

function onMouseOver(e: any, hoverKey: string) {
  e.stopPropagation && e.stopPropagation();
  dispatch({
    type: ACTION_TYPES[HOVER_COMPONENT],
    payload: {
      hoverKey,
    },
  });
}

/**
 * @param path 被放置的元素的路径
 */
function onDragEnd(e: React.MouseEvent, path: string, componentConfig: any) {
  // 阻止事件冒泡到上层元素
  e.stopPropagation();
  dispatch({
    type: ACTION_TYPES[GET_DROP_DATA],
    payload: {
      path,
      componentConfig,
    },
  });
}

// 可能会触发组件自身的click事件，例如Menu.Item
// TODO 难以定位到Menu.SubMenu
function handleClick(
  e: any,
  componentConfig: any,
  compKeys: string[],
  selectedKey: any,
  path: string,
) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (e.domEvent) {
    // 处理Menu的 onClick 属性
    // 这里的阻止事件冒泡无效，点击Menu.Item后依旧会冒泡到Menu
    e.domEvent && e.domEvent.stopPropagation();
    if (e.key !== componentConfig.key) return false;
  }
  const { key } = componentConfig;
  const isSelected = selectedKey === key;

  dispatch({
    type: isSelected ? ACTION_TYPES[CLEAR_SELECT_STATUS] : ACTION_TYPES[SELECT_COMPONENT],
    payload: {
      compKeys,
      componentSchema: componentConfig,
      path,
    },
  });
}

function handleProps(parentProps: any, hoverKey: string | null, selectedKey?: string) {
  const { componentConfig, compKeys, path, selectedInfo } = parentProps;

  const { key, tag, props, children } = componentConfig;
  const newCompKeys = [...compKeys, key];

  return {
    // onClick: (e: React.MouseEvent) => { handleClick(e, componentConfig, newCompKeys, selectedInfo) },
    onMouseOver: (e: React.MouseEvent) => {
      onMouseOver(e, key);
    },
    onDragEnter: (e: React.MouseEvent) => {
      onDragEnd(e, path, componentConfig);
    },
    ...props,
  };
}

function renderChildren(
  children: any,
  compKeys: string[],
  parentPath: any,
  hoverKey: string | null,
  selectedKey: string,
): any {
  const result = children.map((child: any, index: number) => {
    const path = getPath({ path: parentPath, index });
    if (typeof child === 'string') {
      return [child];
    }
    const { key, tag, props, children = [] } = child;
    let newCompKeys = [...compKeys, key];
    const isNative = nativeHTMLTag.indexOf(tag) > -1;
    const CompTag = isNative ? tag : get(OriginalComponents, tag);
    const isHovered = hoverKey === key;
    const isSelected = selectedKey === key;

    return createElement(CompTag, {
      ...props,
      key,
      className: mergeClassName(isHovered, isSelected),
      children: renderChildren(children, newCompKeys, path, hoverKey, selectedKey),
      onDragEnter: (e: React.MouseEvent) => {
        onDragEnd(e, path, child);
      },
      onClick: (e: any) => {
        handleClick(e, child, newCompKeys, selectedKey, path);
      },
      onMouseOver: (e: any) => {
        onMouseOver(e, key);
      },
    });
  });
  return result;
}

export default function Wrapper(props: CommonContainerProps) {
  const {
    componentConfig,
    path,
    containerName,
    selectedInfo = {},
    hoverKey = '',
    compKeys,
  } = props;

  dispatch = props.dispatch;

  const { key, children = [] } = componentConfig;
  const { selectedKey } = selectedInfo;
  return createElement(get(OriginalComponents, containerName, containerName), {
    ...handleProps(props, hoverKey, selectedKey),
    key,
    children: renderChildren(children, compKeys, path, hoverKey, selectedKey),
  });
}
