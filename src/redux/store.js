import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './root-reducer';
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from "./shop/shop.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectionsStart);
export const persistor = persistStore(store);
