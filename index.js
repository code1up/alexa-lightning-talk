'use strict';

/*
const States = {
    NewLightningTalk: 1
};
*/

const Alexa = require('alexa-sdk');

const handlers = {
    LaunchRequest: function () {
        this.emit('OtherIntent');
    },

    AboutIntent: function () {
        this.emit(':tell', 'Welcome to lightning talk about the Amazon Echo.');
    },

    OtherIntent: function () {
        this.emit(':tell', 'Yo! Amazon Echo, cool bro!');
    }
};

exports.handler = (event, context /*, callback */) => {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
