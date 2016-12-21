'use strict';

const States = {
    NewLightningTalk: 1
};

const Alexa = require('alexa-sdk');

const handlers = {
    LaunchRequest: () => {
        this.emit('AboutIntent')
    },

    AboutIntent: () => {
        this.emit(':tell', 'Welcome to lightning talk about the Amazon Echo.');
    }
};

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
