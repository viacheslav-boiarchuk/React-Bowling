/**
 * Created by user on 24.12.2016.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import mySaga from '../sagas/sagas'
import createSagaMiddleware from 'redux-saga'
import LaneReducer from '../reducers/reducer';

const reducer = combineReducers({
	LaneReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
		reducer,
		applyMiddleware(sagaMiddleware,loggerMiddleware())
);

sagaMiddleware.run(mySaga);

export  default store;


