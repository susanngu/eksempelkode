"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Wrapper = require('./js/view/wrapper.jsx');

ReactDOM.render(
React.createElement(Wrapper,null),
document.getElementById('wrap')
);
