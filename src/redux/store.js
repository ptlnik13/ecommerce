import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;