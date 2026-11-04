const removeFromArray = function (arr, ...remove) {
  arr.forEach(element => {
    if (remove.includes(element)) {
      arr.splice(arr.indexOf(element), 1);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

/* for (let x = 0; x < arr.length; x++) {
    if (remove.includes(arr[x])) {
      arr.splice(x, 1);
    }
  } */
