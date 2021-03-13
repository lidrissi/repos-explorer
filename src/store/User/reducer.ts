import { paginationInitialState } from '../Pagination/reducer';
import * as actionTypes from './actionTypes';

const initialState: UserState = {
    items: [],
    fetching: false,
    ...paginationInitialState
};

const userReducer = (
    state: UserState = initialState,
    action: any
): UserState => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_FULFILLED:
            const { data: { items } } = action.payload;
            const newItems: User[] = items.map(({ login, avatar_url }: { [key: string]: any }) => ({
                username: login,
                avatar: avatar_url
            }));
            return {
                ...state,
                fetching: false,
                items: [...newItems]
            };

    }
    return state
}

export default userReducer;