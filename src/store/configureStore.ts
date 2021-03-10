import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import promise from 'redux-promise-middleware';
import { createReducer } from './createReducer';

const reducer = createReducer();
export const store = createStore(reducer, applyMiddleware(thunk, promise));
