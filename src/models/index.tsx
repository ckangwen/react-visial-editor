import defaultData from '@/data';
import {
  StateType,
  ADD_COMPONENT,
  COPY_COMPONENT,
  SELECT_COMPONENT,
  DELETE_COMPONENT,
  INSERT_COMPONENT,
  HOVER_COMPONENT,
  GET_DRAG_DATA,
  GET_DROP_DATA,
  SET_COMPONENT_PROPS,
  CLEAR_HOVER_STATUS,
  CLEAR_SELECT_STATUS,
  LAYOUT_RESORT
} from '@/types';
import { v4 as uuid } from 'uuid';
import update from 'lodash/update';
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import { getNewSortChildNodes } from '@/utils'

export interface PropsConfigType {
  [propName: string]: PropInfoType;
}

export interface PropInfoType {
  //属性展示的文字
  label: string;
  //属性的类型
  type: any;
  //属性的功能的描述信息
  tip?: string;
  //当类型为object或者objectArray时，我们定义该类型的值为子属性值，子属性类型完全与配置完全与属性配置一样
  //当类型为object时其配置信息为一个类型为PropsConfigType的对象
  //当类型为objectArray时其配置为一个类型为PropsConfigType的数组对象
  childPropsConfig?: PropsConfigType | PropsConfigType[];
  //表示该属性是否为添加属性，在属性设置面板中类型为object的属性，可以动态添加和删除子属性，
  // 只有属性面板中动态添加的属性才会有这个字段，组件原始配置信息，不需要配置此字段
  isAdd?: boolean;
  // 规则，其实就是antd 的form规则，属性配置面板本身就是一个纯表单，组件的属性有时会需要必填，或者做值校验等，其值完全与antd的form一样
  rules?: any[];
  // 当类型为function时用于做方法的展示和代码生成时方法的生成，同时设计面板与预览面板也会使用eval来执行默认方法，以防部分组件报错，
  //因为无法在页面填写可执行的方法，所以function类型的属性只看已填写方法名，代码生成时会将名与方法体整合生成方法代码。
  //该值必须为可执行的方法字符串，如果不填写，设计面板与预览解析时如果该属性有值，就会默认执行一个空方法
  placeholder?: string;
  // 当类型为enum 时用于填写可选的值
  enumData?: string[];
  // 属性的默认值
  defaultValue?: any;
  // 类型为number并且属性值为number+单位比如 12px，12%等可以设置此属性为true
  hasUnit?: boolean;
  // 类型为string时有时会是颜色这时设置此值为true就可以使用颜色面板
  isShowColor?: boolean;
  inputColProps?: any;
  //类型为numberArray时设置其最大可以填写的个数
  maxTagCount?: number;
  //类型为number时设置number 的最小值
  min?: number;
  //类型为number时设置number 的最大值
  max?: number;
  //类型为stringArray时设置其最大可填写的个数
  stringCount?: number;
  //因为每个属性在属性设置面板都是以一个formItem的形式可视化的展示的，
  // 所以你可以设置当前属性在属性设置面板中formItem的一些特性，可参考antd form.Item设置
  formItemProps?: any;
}

export interface PropsSettingType {
  props: any;
  propsConfig: PropsConfigType;
  mergePropsConfig: PropsConfigType;
  addPropsConfig: PropsConfigType;
}

export const namespace = 'BLOCK_NAME_CAMEL_CASE';
export const ACTION_TYPES = {
  [ADD_COMPONENT]: `${namespace}/addComponent`,
  [COPY_COMPONENT]: `${namespace}/copyComponent`,
  [SELECT_COMPONENT]: `${namespace}/selectComponent`,
  [DELETE_COMPONENT]: `${namespace}/deleteComponent`,
  [INSERT_COMPONENT]: `${namespace}/insertComponent`,
  [HOVER_COMPONENT]: `${namespace}/hoverComponent`,
  [SET_COMPONENT_PROPS]: `${namespace}/setComponentProps`,
  [GET_DRAG_DATA]: `${namespace}/getDragData`,
  [GET_DROP_DATA]: `${namespace}/getDropData`,
  [CLEAR_HOVER_STATUS]: `${namespace}/clearHoverStatus`,
  [CLEAR_SELECT_STATUS]: `${namespace}/clearSelectStatus`,
  [LAYOUT_RESORT]: `${namespace}/layoutResort`
};

const Model = {
  namespace,
  state: {
    projectSchema: defaultData,
    selectedInfo: {},
    projectPropsSheet: {},
    styleSetting: {},
    dropData: {},
    dragData: {},
    compKeys: []
  },
  effects: {},

  reducers: {
    addComponent(state: StateType) {
      const { projectSchema: prevComponentConfigs, dragData, dropData } = state;
      if (!dragData || !dropData) return;
      const { tag, defaultProps = {} } = dragData;
      const children = Array.isArray(defaultProps.children)
        ? defaultProps.children
        : typeof defaultProps.children === 'string'
        ? [defaultProps.children]
        : [];
      delete defaultProps.children;
      let newKey = uuid();
      const newComp = {
        key: newKey,
        tag: tag,
        props: defaultProps,
        children,
      };
      const projectSchema = cloneDeep(prevComponentConfigs);
      // 在被放置的组件的children尾部插入被拖拽的元素
      update(projectSchema, dropData.path, data => {
        return {
          ...data,
          children: [...data.children, newComp],
        };
      });

      // 组件添加完毕之后
      return {
        ...state,
        dragData: null,
        dropData: null,
        projectSchema,
        hoverKey: newKey,
      };
    },
    insertComponent(state: StateType, { payload }: any) {
      const { projectSchema: prevComponentConfigs } = state;
      const { parentPath, index, tag, defaultProps } = payload;
      const projectSchema = cloneDeep(prevComponentConfigs);
      const newDefaultProps = cloneDeep(defaultProps);
      const children = Array.isArray(newDefaultProps.children)
        ? newDefaultProps.children
        : typeof newDefaultProps.children === 'string'
        ? [newDefaultProps.children]
        : [];
      delete newDefaultProps.children;
      let newKey = uuid();
      const newComp = {
        key: newKey,
        tag: tag,
        props: newDefaultProps,
        children,
      };
      update(projectSchema, `${parentPath}.children`, item => {
        if (!item) {
          return [newComp];
        }
        if (index === 0) {
          return [newComp, ...item];
        } else {
          return [...item.slice(0, index), newComp, ...item.slice(index)];
        }
      });

      return {
        ...state,
        projectSchema,
      };
    },
    deleteComponent(state: StateType) {
      const { projectSchema: prevComponentConfigs, selectedInfo } = state;
      if (!selectedInfo || !selectedInfo.selectedKey) return;
      const { path, selectedKey = {} } = selectedInfo;
      let projectSchema = cloneDeep(prevComponentConfigs);
      // TODO 根据compKeys[compKeys.length - 2] 获取是否可行？？
      const parentPath = path.slice(0, path.lastIndexOf('.'));

      if (parentPath) {
        update(projectSchema, `${parentPath}.children`, children => {
          return children.filter((child: any) => child.key !== selectedKey);
        });
      } else {
        // 选中的是根节点，无父路径
        projectSchema = [];
      }
      return {
        ...state,
        projectSchema,
        selectedInfo: {},
      };
    },
    /**
     * 获取拖拽组件数据
     * @param state
     * @param action
     * @returns {{dragData: *}}
     */
    getDragData(state: any, { payload }: any) {
      const { dragData } = payload;
      return {
        ...state,
        dragData,
      };
    },
    selectComponent(state: StateType, { payload }: any) {
      const { projectSchema } = state;
      const { componentSchema, compKeys, path } = payload;
      const { tag, key } = componentSchema;
      let selectedKey = key;

      return {
        ...state,
        selectedInfo: {
          selectedKey,
          tag,
          path,
          compKeys,
        },
        compKeys,
        projectPropsSheet: get(projectSchema, path).props,
        hoverKey: key,
      };
    },
    clearHoverStatus(state: StateType) {
      return {
        ...state,
        hoverKey: null,
      };
    },
    clearSelectStatus(state: StateType) {
      return {
        ...state,
        selectedInfo: {},
      };
    },
    hoverComponent(state: StateType, { payload }: any) {
      const { hoverKey } = payload;
      return {
        ...state,
        hoverKey,
      };
    },
    getDropData(state: StateType, { payload }: any) {
      const { path, componentConfig } = payload;
      const { key, tag } = componentConfig;
      return {
        ...state,
        dropData: {
          path,
          tag,
        },
        hoverKey: key,
      };
    },
    setComponentProps(state: StateType, { payload }: any) {
      const { projectPropsSheet, projectSchema: prevComponentConfigs, selectedInfo } = state;

      const { newProps } = payload;
      const { path, selectedKey } = selectedInfo;
      const projectSchema = cloneDeep(prevComponentConfigs);
      // prevCompProps默认是组件配置中的props属性
      let prevCompProps = get(projectSchema, path).props;
      const currentCompProps = {
        ...prevCompProps,
        ...newProps,
      };

      update(projectSchema, path, item => {
        return {
          ...item,
          props: currentCompProps,
        };
      });

      return {
        ...state,
        projectSchema,
        projectPropsSheet: currentCompProps,
      };
    },
    layoutResort(state: StateType, { payload }: any) {
      const { sortKeys, path, dragData } = payload;
      const { projectSchema: prevProjectSchema } = state;
      let projectSchema = cloneDeep(prevProjectSchema);
      update(projectSchema, path, children => getNewSortChildNodes(sortKeys, children, dragData),);
      return {
        ...state,
        projectSchema,
      };
  }
  },
};

export default Model;
