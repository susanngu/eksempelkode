"use strict";

var React = require('react');
var Header = require('./header.jsx');
var Content = require('./content.jsx');

var Wrapper = React.createClass({
	render: function() {
		return (
			<div className="wrapper">
				<Header/>
				<Content/>
			</div>
			);
	}

});



module.exports = Wrapper;