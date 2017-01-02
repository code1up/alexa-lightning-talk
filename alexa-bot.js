function AlexaBot() {
}

AlexaBot.prototype.tell = function (text) {
    this.emit(':tell', text);
};

AlexaBot.prototype.ask = function (promptText, repromptText) {
};
