"use strict";

var React = require('react');
var NavigationState = require('../state/navigation.js');
var NavConstants = require('../constants/navconstants.js');
var Profile = require('./profile.jsx');
var Home = require('./home.jsx');
var MainView = require('./mainview.jsx');

var Content = React.createClass({
	getInitialState: function(){
		return{
			section: NavigationState.getSection()
		}
	},
	componentDidMount: function(){
		NavigationState.on('navigate', this.updateState);
	},
	componentWillUnmount: function(){
		NavigationState.removeListener('navigate', this.updateState);
	},
	updateState:function(){
		this.setState({
			section: NavigationState.getSection()
		});
	},
	renderContent: function(){
		var section = this.state.section;
		
		if (section === NavConstants.MAIN){
			return <MainView/>;
		}
		if (section === NavConstants.PROFILE){
			return <Profile/>;
		}
		else if(section === NavConstants.HOME){
			return <Home/>;
		}
		else if(section === NavConstants.ABOUT){
			return " WIN! ";
		}
		else{
			return <div/>;
		}
	},
	render: function() {
		return (
			<div className="content">
				{this.renderContent()}
			</div>
			);
	}

});

module.exports = Content;