/*
'use strict';

const tape = require('tape-catch');
const ContentContainer = require('../content-container');

tape('ContentContainer: should create empty content container', function (test) {
    // arrange
    const container = new ContentContainer();

    // act
    const actualEntries = container.getEntries();

    // assert
    test.deepEqual(actualEntries, {});
    test.end();
});

tape('ContentContainer: should get entry by key', function (test) {
    // arrange
    const key = 'some-key';
    const expectedValue = 'expected-value';

    const container = new ContentContainer({
        [key]: expectedValue
    });

    // act
    const actualValue = container.getEntry(key);

    // assert
    test.equal(actualValue, expectedValue);
    test.end();
});
*/
