import * as actionTypes from './actionTypes';

const initialState: UserState = {
    items: []
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
                items: [...newItems]
            };

    }
    return state
}

export default userReducer;