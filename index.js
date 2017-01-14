'use strict';

const Alexa = require('alexa-sdk');
const bot = require('alexa-bot');
const content = require('content');

content.getText()

content.add({
    DefaultHandler: {
        DidNotUnderstand: ''
    }
});

const xhandlers = {
    AboutIntent: (new require('about-intent-handler')(bot)).handler
};

const handlers = {
    LaunchRequest: function () {
        this.emit('AboutIntent');
    },

    AboutIntent: xhandlers.AboutIntent,

    Unhandled: function () {
        this.emit(':tell', 'Sorry, not sure what you said.');
    }
};

exports.handler = (event, context /*, callback */) => {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
