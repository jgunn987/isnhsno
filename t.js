var assert = require('assert');
var isnhsno = require('./index');

assert.ok(isnhsno('0169988856'));
assert.ok(!isnhsno('0169988851'));
assert.ok(isnhsno('187 198 7148'));
assert.ok(isnhsno('187-198-7148'));
