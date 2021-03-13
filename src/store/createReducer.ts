import { combineReducers } from 'redux';
import withPagination from './Pagination/reducer';
import repositoryReducer from './Repository/reducer';
import { REPOSITORIES_RESOURCE, USERS_RESOURCE } from './types';
import userReducer from './User/reducer';

export const createReducer = () => {
  return combineReducers({
    repositories: withPagination(repositoryReducer, REPOSITORIES_RESOURCE),
    users: withPagination(userReducer, USERS_RESOURCE)
  })
}

