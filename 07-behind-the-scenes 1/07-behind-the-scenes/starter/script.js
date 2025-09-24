'use strict';

function first() {
  second();
}

function second() {
    console.log('second');
}
first();

function alpha() {
 console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, functionVar);
}

demoScope();


const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); 
  }
  b();
}

a();


console.log(varX); 


var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(varX); 
console.log(letX); 
console.log(constX); 

console.log(addDecl(2, 3)); 
console.log(addExpr(2, 3)); 
console.log(addArrow(2, 3)); 