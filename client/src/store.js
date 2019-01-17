import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import MembersReducer from './reducers/MembersReducer';
import MemberFormDataReducer from './reducers/MemberFormDataReducer';




const reducers = combineReducers({ MembersReducer, MemberFormDataReducer });
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
);