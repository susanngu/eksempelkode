"use strict";

var events = require('events'),
    _ = require('lodash');

var NavConstants = require('../constants/navconstants.js');
var NavState = require('../state/navigation.js');

var NAMES = {
    MIE: 'MIE',
    MARTINE: 'MARTINE',
    JOHAN: 'JOHAN',
    MORTEN: 'MORTEN',
    SUSANNE: 'SUSANNE',
    HALVARD: 'HALVARD'
};

var REFNRS = {
    MIE: 'HEST',
    MARTINE: 'KU',
    JOHAN: 'FUGL',
    MORTEN: 'OKSE',
    SUSANNE: 'SAU',
    HALVARD: 'VENNEN'
};

var name = null;
var refnr = null;

var API = _.assign({
    submit: function(n, rnr){
        name = n;
        refnr = rnr;
    },
    youtubelink: function(){
        NavState.navigate(NavConstants.PROFILE);
    },
    validate: function(n, rnr){
        var name = n.trim().toUpperCase();
        var refnr = rnr.trim().toUpperCase();
        return name === NAMES[name] && refnr === REFNRS[name];
    },
    getName: function(){
        return name;
    }

},events.EventEmitter.prototype);

module.exports = API;
