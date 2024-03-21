const Calculator = require('./module1');
const { add, multiply } = Calculator;

const addResult = add(3, 4);
const multiplyResult = multiply(3, 4);

console.log(addResult);
console.log(multiplyResult);

// module2
const Calculator2 = require('./module2');

const addResult2 = Calculator2.add(3, 4);
const multiplyResult2 = Calculator2.multiply(3, 4);

console.log(addResult2);
console.log(multiplyResult2);