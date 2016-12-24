/**
 * Created by user on 10.12.2016.
 */

const LOAD = 'load-lane-list';
const SUCCESS = 'load-fetch-succeeded';
const FAILED = 'load-fetch-failed';

export function getReducersList() {
	const LOAD_LANE_LIST = 'load-lane-list';
	const LANE_FETCH_SUCCEEDED = 'load-fetch-succeeded';

	return {
		LOAD_LANE_LIST: LOAD_LANE_LIST,
		LANE_FETCH_SUCCEEDED: LANE_FETCH_SUCCEEDED,
	}
}

export function loadLaneList(){
	const rest = 'http://bowling.smartjs.academy/list';

	return {
		type: 'REQUEST',
		types: [LOAD, SUCCESS, FAILED],
		request: fetch(rest).then(r => r.json())
	};
}