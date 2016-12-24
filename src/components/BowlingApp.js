/**
 * Created by user on 24.12.2016.
 */
/**
 * Created by user on 10.12.2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadLaneList} from '../actions/actions';

class BowlingApp extends Component {

	constructor(args) {
		super(...args);
		this.state = {
			laneList: []
		}
	}

	componentDidMount() {
		this.props.loadLaneList();
	}

	render() {
		const {lanes} = this.props.lanes;
		console.log(lanes);
		return (
			<div>
				<h1>
					Список Дорожек
				</h1>
				{lanes.length > 0 ?
					<select name="" id="">
						{lanes.map((item,counter) => <option key={item} value={item}>{counter}</option>)}
					</select>
					: null}
			</div>
		)
	}
}

export default connect(
		state => {
			return {
				lanes:  state.LaneReducer
			};
		},
		{loadLaneList}
)(BowlingApp);