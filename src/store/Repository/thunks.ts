import { Dispatch } from 'redux';

import * as action from './actions';
import * as api from './api';

export const fetchStarredRepositories = () => (
    dispatch: Dispatch,
) => {
    return dispatch(action.fetchStarredRepositories(
        api.fetchStarredRepositories()
    )
    )
}