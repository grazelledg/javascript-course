// 




// PRIMITIVES IN STACK
let age = 30;
let oldAge = age; // Independent copy
age = 31;

console.log('age:', age); // 31
console.log('oldAge:', oldAge); // 30 (unchanged!)

// OBJECTS IN HEAP
const me = { name: 'Jonas', age: 30 };
const friend = me; // Shared reference

friend.age = 27;

console.log('me:', me); // { name: 'Jonas', age: 27 }
console.log('friend:', friend); // { name: 'Jonas', age: 27 }

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); // { name: 'Sarah', age: 30 } - Changed!
console.log('updated:', updatedPerson); // { name: 'Sarah', age: 30 } - Same object!
console.log('same object?:', originalPerson === updatedPerson); // true

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name); // 'Alice' (unchanged)
console.log('copy name:', shallowCopy.name); // 'Bob' (changed)

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

// Modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address); // { city: 'Paris', country: 'France' }
console.log('copy address:', deepCopy.address); // { city: 'London', country: 'France' }
console.log('original hobbies:', deepOriginal.hobbies); // ['travel', 'photography']
console.log('copy hobbies:', deepCopy.hobbies); // ['t
// ravel', 'photography', 'cooking']


const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

// BROKEN: JSON method loses data
const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);
// { name: 'Test', date: '2023-...' } - Lost method and undefined!

// FIXED: structuredClone preserves most types
const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);
// Note: functions still can't be cloned, but dates work!

'use strict';

// 1. Hoisting and TDZ (Hour 1)
// Without strict mode: undeclaredVar = 'This would create a global variable!';
// With strict mode: throws ReferenceError
// undeclaredVar = 'This throws an error in strict mode';

// 2. This keyword (Hour 2)
function demonstrateThis() {
  console.log('this in strict mode:', this); // undefined (not global object)
}
demonstrateThis();

// 3. Object mutation prevention attempts
const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed'; // Throws error in strict mode
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}

const userManager = {
  users: [],

  addUser: function (userData) {
    // Deep copy to avoid reference issues
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this; // Method chaining
  },

  getUsers: function () {
    // Return shallow copy to prevent external mutation
    return [...this.users];
  },
};

// Test the complete system
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); // Still 'John'!


