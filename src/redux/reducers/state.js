import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducerFunction} from './appReducer';

const rootReducer = combineReducers({
	recipies: appReducerFunction,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
