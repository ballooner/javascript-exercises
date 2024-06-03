const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num1) {
  for (i = num1 - 1; i > 0; i--)
    {
      num1 *= i;
    }

	return num1 == 0 ? 1 : num1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
