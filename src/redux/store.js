import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './root-reducer';
import {persistStore} from "redux-persist";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};