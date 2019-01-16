import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import MembersReducer from './reducers/MembersReducer';
import MemberFormData from './reducers/MemberFormData';

const reducers = combineReducers({ MembersReducer, MemberFormData });
const middleware = [thunk];



export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);