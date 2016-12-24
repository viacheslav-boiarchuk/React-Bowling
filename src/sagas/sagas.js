/**
 * Created by user on 24.12.2016.
 */
import { call, put, take } from 'redux-saga/effects';
import {getReducersList} from '../actions/actions';

function* mySaga() {
	while (true) {
		const action = yield take(action => {
			const {types} = action;

			return Array.isArray(types);
		});

		const [LOAD, SUCCESS, FAILED] = action.types;

		yield put({
			type: LOAD
		});

		try {
			const lanes = yield action.request;
			yield put({
				type: SUCCESS,
				lanes: lanes
			});
		} catch (e) {
			yield put({type:FAILED, error: e});
		}
	}
}

export default mySaga;
