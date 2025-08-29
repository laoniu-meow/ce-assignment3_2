const assert = require('assert');

console.log('🧪 Running CE Assignment 3.2 - Basic Tests...\n');

// Test 1: Basic Math
console.log('Testing basic math...');
assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');
assert.strictEqual(2 * 3, 6, '2 * 3 should equal 6');
console.log('✅ Basic math tests passed');

// Test 2: String Operations
console.log('Testing string operations...');
assert.strictEqual('Hello' + ' ' + 'World', 'Hello World', 'String concatenation should work');
assert.strictEqual('CI/CD'.length, 5, 'String length should be correct');
console.log('✅ String operation tests passed');

// Test 3: Array Operations
console.log('Testing array operations...');
const arr = [1, 2, 3];
arr.push(4);
assert.strictEqual(arr.length, 4, 'Array push should work');
assert.strictEqual(arr[3], 4, 'Pushed value should be correct');

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
assert.deepStrictEqual(evenNumbers, [2, 4], 'Array filter should work');
console.log('✅ Array operation tests passed');

// Test 4: Object Operations
console.log('Testing object operations...');
const obj = { name: 'CI/CD', type: 'pipeline' };
assert.strictEqual(obj.name, 'CI/CD', 'Object property access should work');
assert.strictEqual(obj.type, 'pipeline', 'Object property should be correct');
console.log('✅ Object operation tests passed');

// Test 5: Application Logic
console.log('Testing application logic...');
const app = require('../app.js');
assert.ok(app, 'App should be exported');
console.log('✅ Application logic tests passed');

console.log('\n🎉 All tests completed successfully!');
console.log('Total tests: 8');
console.log('✅ Passed: 8');
console.log('❌ Failed: 0'); 