function AboutIntentHandler(bot) {
    this._bot = bot;
}

AboutIntentHandler.prototype.handle = function () {
    this._bot.tell('Hello and welcome to this lightning talk about the Amazon Echo.');
};

module.exports = AboutIntentHandler;
