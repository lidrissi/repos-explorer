import { GenericReducerTypes } from "../types";
import { PaginationState } from "./types";

import { AnyAction } from 'redux';

export const paginationInitialState = {
    page: 1,
    pageSize: 10
}

export const withPagination = <S extends PaginationState>(
    reducer: Function,
    reducerName: GenericReducerTypes,
) => (state: S, action: AnyAction) => {
    switch (action.type) {
        case `SET_${reducerName}_PAGE`:
            return { ...state, page: action.page };
        case `SET_${reducerName}_PAGE_SIZE`:
            return { ...state, pageSize: action.pageSize };
        default:
            return reducer(state, action);
    }
};

export default withPagination;