const removeFromArray = function (arr, ...remove) {
  return arr.filter(element => !remove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

/* for (let x = 0; x < arr.length; x++) {
    if (remove.includes(arr[x])) {
      arr.splice(x, 1);
    }
  } */
