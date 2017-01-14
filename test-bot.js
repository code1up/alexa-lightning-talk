function TestBot() {
    this._tells = [];
    this._asks = [];
}

TestBot.prototype.tell = function (text) {
    this._tells.push(text);
};

TestBot.prototype.ask = function (promptText, repromptText) {
    this._asks.push({
        promptText: promptText,
        repromptText: repromptText
    });
};

module.exports = TestBot;
