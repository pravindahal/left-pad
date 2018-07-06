/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
var leftPad = require("./");
var test = require("tape");
var fc = require("fast-check");

test('edge cases', function (assert) {
  assert.plan(10);
  assert.strictEqual(leftPad('foobar1', 6), 'foobar1');
  assert.strictEqual(leftPad('foobar2', 5), 'foobar2');
  assert.strictEqual(leftPad('foobar3', -1), 'foobar3');
  assert.strictEqual(leftPad('foobar4', 6, '1'), 'foobar4');
  assert.strictEqual(leftPad('foobar5', 5, '1'), 'foobar5');
  assert.strictEqual(leftPad('foobar6', -1, '1'), 'foobar6');
  assert.strictEqual(leftPad('foobar7', 8, ''), 'foobar7');
  assert.strictEqual(leftPad(0, 3, 1), '110', 'integer for str is converted to string');
  assert.strictEqual(leftPad(true, 7), '   true', 'boolean for str is converted to string');
  assert.strictEqual(leftPad('', 2), '  ', 'empty str for str');
});
