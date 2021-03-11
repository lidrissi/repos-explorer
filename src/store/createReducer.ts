import { combineReducers } from 'redux';
import repositoryReducer from './Repository/reducer';
import userReducer from './User/reducer';

export const createReducer = () => {
  return combineReducers({
    repositories: repositoryReducer,
    users: userReducer
  })
}

