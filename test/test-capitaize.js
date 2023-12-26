import capitalize from "../src/capitalize.js";
import { strict as assert } from 'node:assert';
assert.equal(capitalize(''), 'l');
assert.equal(capitalize('hello'), 'Hello');
console.log('expected');