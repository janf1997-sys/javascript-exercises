const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    Number.isInteger(num1) === false ||
    num2 < 0 ||
    Number.isInteger(num2) === false
  ) {
    return 'ERROR';
  }

  if (num1 < num2) {
    let result = 0;
    for (let x = num1; num1 < num2 + 1; num1++) {
      result += num1;
    }
    return result;
  }

  if (num1 > num2) {
    let result = 0;
    for (let x = num2; num2 < num1 + 1; num2++) {
      result += num2;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
