"use strict";
var moment = require('moment');

var TIME = {
    DATETIMEPICKER_FORMAT: 'DD.MM.YYYY HH:mm:00 Z',
    DATETIMEPICKER_FORMAT2: 'DD.MM.YYYY HH:mm ',
    DATETIMEPICKER_TIME_FORMAT: 'HH:mm',
    DATE_TIME_FORMAT: 'DD.MM.YYYY HH:mm:ss Z',
    SORTABLE_DATE_TIME_FORMAT: 'YYYY.MM.DD HH:mm:ss Z',
    DATE_TIME_FORMAT_SHORT: 'DD.MM.YYYY H:mm Z',
    DATE_FORMAT: 'DD.MM.YYYY',
    TIME_FORMAT: 'HH:mm:ss',
    LOCALIZED_FORMAT: 'L LT Z',
    LOCAL: 'nb',

    now: function () {
        return moment.utc();
    },
    isValidDisplayDateTime: function (input) {
        return TIME.fromDisplayDateTime(input).isValid();
    },
    fromServerRep: function (input) {
        return moment.utc(input);
    },
    toServerRep: function (mmnt) {
        return mmnt.toISOString();
    },

    fromDisplayDateTime: function (input, customFormat) {
        if(_.isUndefined(input) || _.isNull(input))
            return moment("");
        input = input.replace("UTC", "+00:00");

        var format = _.isUndefined(customFormat) ? TIME.DATE_TIME_FORMAT : customFormat;

        return moment(input, format);
    },
    toDisplayDateTime: function (mmnt, customFormat) {
        var momentvalue = moment.utc(mmnt);

        var format = TIME.DATE_TIME_FORMAT;

        if (customFormat){
            format = customFormat;
        }
        return momentvalue.format(format);
    },

};

module.exports = TIME;