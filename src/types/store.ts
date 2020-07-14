import { CompSelectedInfo, VirtualComp, DragDataType, DropTargetInfoType } from '@/types'

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const COPY_COMPONENT = 'COPY_COMPONENT';
export const SELECT_COMPONENT = 'SELECT_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const INSERT_COMPONENT = 'INSERT_COMPONENT';
export const HOVER_COMPONENT = 'HOVER_COMPONENT';
export const GET_DRAG_DATA = 'GET_DRAG_DATA';
export const GET_DROP_DATA = 'GET_DROP_DATA';
export const SET_COMPONENT_PROPS = 'SET_COMPONENT_PROPS';
export const CLEAR_HOVER_STATUS = 'CLEAR_HOVER_STATUS';
export const CLEAR_SELECT_STATUS = 'CLEAR_SELECT_STATUS';
export const LAYOUT_RESORT = 'LAYOUT_RESORT'

export interface StateType {
  projectSchema: VirtualComp[]
  selectedInfo: CompSelectedInfo
  projectPropsSheet: any
  styleSetting: any
  undo: any[],
  redo: any[],
  hoverKey: null | string,
  dragData: DragDataType | null,
  dropData: null | DropTargetInfoType,
  compKeys: string[]
}
