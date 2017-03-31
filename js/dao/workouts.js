"use strict";

module.exports = {
    listAllWorkouts: function () {
        return $.ajax({
            type: 'GET',
            url: './rest/workouts',
            dataType: 'json',
            cache: false
        });
    },
    addWorkout: function (workout) {
        return $.ajax({
            type: 'POST',
            url: '/rest/workouts/add',
            dataType: 'json',
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(workout)
        });
    },
};