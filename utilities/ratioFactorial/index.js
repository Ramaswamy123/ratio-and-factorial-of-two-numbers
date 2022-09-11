const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumbers = require("../factorial/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTwoNumbers(a, b);
  const factorial = factorialOfNumbers(c);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
