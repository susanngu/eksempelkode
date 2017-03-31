"use strict";
var _ = require('lodash');
var NavigationState = require('../state/navigation.js'),
 NavConstants = require('../constants/navconstants.js');

/*var Workouts = require('../view/workout/workouts.jsx'),
	WorkoutModel = require('../model/workouts.js');*/


var React = require('react');

var Profile = React.createClass({
		/*getInitialState: function(){
		return{
			workouts: WorkoutModel.getAllWorkouts()

	},}*/
	componentDidMount: function(){
		//WorkoutModel.on('update', this.updateState);
	},
	componentWillUnmount: function(){
		//WorkoutModel.removeListener('update', this.updateState);
	},
	updateState: function(){
	/*	this.setState({
			workouts: WorkoutModel.getAllWorkouts()
		});*/
	},
	navigate: function(dest){
		NavigationState.navigate(dest);
	},
	addWorkout: function(){
		//WorkoutModel.addWorkout();
	},
	render: function() {
		//<Workouts workouts={this.state.workouts}/>
		//<WorkoutCounter/>
		return (
			<section className="profile">
					<div></div>
					<div className="container">
						<ProfileHeader addWorkout={this.addWorkout}/>


					</div>
				<div></div>
			</section>
			);
	}
});

var ProfileHeader = React.createClass({
	
	render: function(){
		//<a href="#" onClick={this.props.addWorkout}><i className="material-icons">add_circle_outline</i></a>

		return (
				<div className="profileHeader">
					<div className="profilePic">
						<img src="dest/images/sau.jpg"/>
					</div>

					<div className="leftContent">
						<div className="top">
							<span className="userName">susanne</span>
						</div>
						<div>susanne(at)tubbene.no</div>
					</div>
					<div>
					</div>

				</div>
		);
	}

});

var WorkoutCounter = React.createClass({
	
	render: function(){
		return (
				<div className="workoutCounter">
					<div className="counter">
						<span className="number">20</span>
						<span className="numberName"> workouts</span>
					</div>
						<div className="counter">
						<span className="number">3</span>
						<span className="numberName"> wokrouts a week</span>
					</div>
						<div className="counter">
						<span className="number">300</span>
						<span className="numberName"> hours</span>
					</div>
				</div>
		);
	}

});

module.exports = Profile;