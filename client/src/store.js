import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
//thunk - asyncronous calls from backend

import MembersReducer from './reducers/MembersReducer';
import MemberFormDataReducer from './reducers/MemberFormDataReducer';


const reducers = combineReducers ({ 
	members: MembersReducer, 
	MemberFormDataReducer
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middleware)
))

export default store;