/**
 * Created by user on 24.12.2016.
 */
import {getReducersList} from '../actions/actions';

const initialState = {
	lanes: []
};



function LaneReducer(state = initialState, action) {
	switch (action.type) {
		case getReducersList().LANE_FETCH_SUCCEEDED:
			return {
				...state,
				lanes: action.lanes
			};
		default:
			return {
				...state
			}
	}
}

export default LaneReducer;