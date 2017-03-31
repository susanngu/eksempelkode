"use strict";

var React = require('react');
var _ = require('lodash');
var NavigationState = require('../state/navigation.js');
var NavConstants = require('../constants/navconstants.js');


var Header = React.createClass({
	getInitialState: function(){
	    var iphone = false;
	    if(navigator && navigator.userAgent && navigator.userAgent !== null){
	        var strUserAgent = navigator.userAgent.toLowerCase();
	        var arrMatches = strUserAgent.match(/(iphone)/);
	        if(arrMatches !== null){
                iphone = true;
            }
        }
		return{
			section: null,
			headerTop: "",
			size: window.innerHeight,
            isCV: NavigationState.getIsCS(),
            isIphone: iphone
		}
	},
	componentDidMount: function(){
		NavigationState.on('navigate', this.updateState);
		document.addEventListener('scroll', this.handleScroll);
		document.addEventListener('resize', this.handleScroll);
	},
	componentWillUnmount: function(){
		NavigationState.removeListener('navigate', this.updateState);
		document.removeListener('scroll', this.handleScroll);
		document.removeListener('resize', this.handleScroll);
	},
	updateState:function(){
        //window.scrollTo(0, 0);
        this.setState({
			section: NavigationState.getSection(),
            isCV: NavigationState.getIsCS()
		});
	},
	handleScroll: function(){
		this.setState({
			size: window.innerHeight
		});
	  if (window.scrollY > (this.state.size-77)) {
    	this.setState({
			headerTop: "fixed"
		});
	  } else{
	  	this.setState({
			headerTop: ""
		});
	  }
	},
	navigate: function(dest, target){
		NavigationState.navigate(dest, target);
	},
	render: function() {
		//
		//<img src="dest/images/t.png" onClick={_.partial(this.navigate, NavConstants.MAIN)}/>
		//<NavButton iconType={"person"} title={"CONTACT"} navigate={_.partial(this.navigate, NavConstants.PROFILE)}/>
		var isLoggedin = this.state.isIphone;
		if(isLoggedin){
			return (
			<div className="headerGroup">
			<header className={"fixed"}>
				<NavButton iconType={"favorite"}  title={"cv"} navigate={_.partial(this.navigate, NavConstants.MAIN, true)}>cv</NavButton>
				<div>
                </div>
                <NavButton iconType={"business_center"} title={"my work"} navigate={_.partial(this.navigate, NavConstants.MAIN, false)}>portfolio</NavButton>

            </header>
			</div>
			);
		}
		return (
			<div className="headerGroup">
			<div className="topHeader" style={{height:(this.state.size-77)}}>
				<span className="lali">portfolio</span>
			</div>
			<header className={this.state.headerTop}>
				<NavButton active={this.state.isCV} iconType={"favorite"} title={"cv"} navigate={_.partial(this.navigate, NavConstants.MAIN, true)}>cv</NavButton>
				<div>
				</div>
                <NavButton active={!this.state.isCV} iconType={"business_center"} title={"my work"}  navigate={_.partial(this.navigate, NavConstants.MAIN, false)}>portfolio</NavButton>
            </header>
			</div>
			);
	}

});

var NavButton = React.createClass({
	
	render: function(){
	    var className = this.props.active ? "navButton active " + this.props.title : "navButton " + this.props.title;
		return(
				<span className={className} onClick={this.props.navigate}>
					<i className="material-icons">{this.props.iconType}</i> 
					<span className="title">{this.props.title}</span> 
				</span>
		);
	}
});


module.exports = Header;