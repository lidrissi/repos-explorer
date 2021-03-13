import { AnyAction } from 'redux';
import { GenericReducerTypes } from '../types';

const setPage = (reducerName: GenericReducerTypes) => (
  page: number,
): AnyAction => ({
  type: `SET_${reducerName}_PAGE`,
  meta: reducerName,
  page,
});

const setPageSize = (reducerName: GenericReducerTypes) => (
  pageSize: number,
): AnyAction => ({
  type: `SET_${reducerName}_PAGE_SIZE`,
  meta: reducerName,
  pageSize,
});

export const paginationActionsCreator = (reducerName: GenericReducerTypes) => [
  setPage(reducerName),
  setPageSize(reducerName),
];
