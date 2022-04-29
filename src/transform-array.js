const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let sec = ['--double-next', '--discard-prev', '--discard-next', '--double-prev'];
  let arr1 = [...arr];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === '--double-next' && i < arr1.length-1) {
      arr1.splice(i+1, 0, arr1[i+1]);
    } else if (arr1[i] === '--discard-prev' && !sec.includes(arr1[i-1]) && i > 0) {
      arr1.splice(i-1, 1);
      i--;
    } else if (arr1[i] === '--discard-next' && i < arr1.length-1) {
      arr1.splice(i+1, 1);
    } else if (arr1[i] === '--double-prev' && !sec.includes(arr1[i-1]) && i > 0) {
      arr1.splice(i-1, 0, arr1[i-1]);
      i++;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (sec.includes(arr1[i])) {
      arr1.splice(i, 1);
      i--;
    }
  }
  return arr1;
}

module.exports = {
  transform
};
