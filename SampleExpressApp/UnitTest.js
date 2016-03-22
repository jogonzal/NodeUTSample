var assert = require('assert');
var Adding = require('./utilities/adding.js');

exports['Test 1'] = function () {
    assert.ok(true, "This shouldn't fail");
}

exports['Test 2'] = function () {
    assert.ok(1 === 1, "This shouldn't fail");
    assert.ok(false, "This should fail");
}

exports['Test 3'] = function () {
    var add = new Adding();
    var res = add.add(1, 2);
    assert.ok(res === 3, "1 + 2 = 3");
}