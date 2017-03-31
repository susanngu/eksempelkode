"use strict";

var events = require('events'),
	_ = require('lodash');

var NavConstants = require('../constants/navconstants.js');
var appsection = NavConstants.MAIN;
var isCV = true;


var API = _.assign({
	getSection: function(){
		return appsection;
	},
	getIsCS: function(){
		return isCV;
	},
	navigate: function(target, content){
		appsection = target;
        isCV = content;
		API.emit('navigate');
	}
},events.EventEmitter.prototype);

module.exports = API;