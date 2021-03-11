import { Dispatch } from 'redux';

import * as action from './actions';
import * as api from './api';

export const fetchUsers = () => (
    dispatch: Dispatch,
) => {
    return dispatch(action.fetchUsers(
        api.fetchUsers()
    )
    )
}