import { combineReducers } from 'redux';
import starredReducer from './Repository/reducer';

export const createReducer = () => {
  return combineReducers({
    repositories: starredReducer
  })
}

