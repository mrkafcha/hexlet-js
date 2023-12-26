import capitalize from "../src/capitalize.js";
import { strict as assert} from 'node:assert';
assert.deepStrictEqual(capitalize(''), '');
assert.deepStrictEqual(capitalize('hello'), 'Hello');
assert.deepStrictEqual(capitalize('world'), 'World');
console.log('expected');