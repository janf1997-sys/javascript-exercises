const reverseString = function (str) {
  let splitted = str.split('');

  const mem = [];
  splitted.forEach(element => {
    mem.unshift(element);
  });
  return mem.join('');
};

// Do not edit below this line
module.exports = reverseString;
