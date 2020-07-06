/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { connect } from 'dva';
import each from 'lodash/each';
import isEmpty from 'lodash/isEmpty';
import { namespace } from '@/models'
import { useRef, useEffect } from 'react';

interface RenderPath {
  path?: string,
  index?: number,
  isContainer?: boolean
}

export function asLiterals<T extends string>(arr: T[]): T { return arr[0]; }

let ccc = ['12', '44']
const arr = asLiterals(['12', '44']);
type ccc = typeof arr;
// type v = {[K in (typeof arr)[number]]: string};

type KeyTypes = keyof any
export function literalArray<T extends KeyTypes>(...entries: T[]): T[] {
  return entries
}


export function reduxConnect(props?: string[], options?: object) {
  return connect((state: any) => {
    const resultProps: any = {}
    each(props, (prop) => {
      resultProps[prop] = state[namespace][prop]
    })

    return resultProps

  }, undefined, undefined, { ...options })
}

export function getPath({ path, index, isContainer }: RenderPath): string {
  if (!path && (typeof index === 'number') && index > -1 && !isContainer) {
    return `[${index}]`
  }
  if (path && isContainer) {
    return `${path}.children`
  }
  if (path && index !== undefined && index > -1) {
    return `${path}.children[${index}]`
  }
  return path || ''
}


export function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const filterEmpty = (value: any) => {
  const props: any = {};
  each(value, (v, k) => {
    if (v !== null) {
      props[k] = v;
    }
  });

  return isEmpty(props) ? null : props;
};

export function noop() {}
