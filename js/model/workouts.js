"use strict";

var events = require('events'),
    _ = require('lodash');

var dao = require('../dao/workouts.js');

var workouts = [];

var getWorkouts = function(){
    dao.listAllWorkouts()
        .done(function(data){
            workouts = data;
            API.emit('update');
        })
};

//getWorkouts();

var API = _.assign({
    addWorkout: function(){
        var workout = {id: workouts.length+100, name: 'Workout', description: 'w'};

        dao.addWorkout(workout)
            .fail(function () {
                console.log("fail");
            })
            .done(function(data){
                workouts.push(data);
                API.emit('update');
            });


        API.emit('update');
    },
    getWorkout(id){
        return _.find(workouts, function(id){id: id});
    },
    getAllWorkouts(){
        return workouts;
    },
},events.EventEmitter.prototype);

module.exports = API;
