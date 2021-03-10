

const assert = require('assert');

function id(x) {
    return x;
}


test('My test', () => { // (C)
    assert.equal(id('abc'), 'abc'); // (D)
});