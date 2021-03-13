import { Dispatch } from 'redux';

import * as action from './actions';
import * as api from './api';

export const fetchRepositories = () => (
    dispatch: Dispatch,
) => {
    return dispatch(action.fetchRepositories(
        api.fetchRepositories()
    )
    )
}