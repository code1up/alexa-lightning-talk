const ContentContainer = function (entries) {
    this._entries = entries || {};
};

ContentContainer.prototype.addEntry = function (key) {

};

ContentContainer.prototype.getEntries = function () {
    return this._entries;
};

ContentContainer.prototype.getEntry = function (key) {
    return this._entries[key];
};

module.exports = ContentContainer;
