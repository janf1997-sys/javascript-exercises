const repeatString = function (string, num) {
  const arr = [];
  if (num < 0) {
    return 'ERROR';
  } else {
    for (let x = 0; x < num; x++) {
      arr.push(string);
    }
    return arr.join('');
  }
};

// Do not edit below this line
module.exports = repeatString;
