const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  matrix.unshift(Array(matrix[0].length).fill(0));
  matrix.push(Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].unshift(0);
    matrix[i].push(0);
  }
  let res = [];
  for (let i = 1; i < matrix.length-1; i++) {
    let row = [];
    for (let j = 1; j < matrix[i].length-1; j++) {
      let sum = 0;
      sum = matrix[i][j-1] + matrix[i-1][j-1] + matrix[i-1][j] + matrix[i+1][j+1]
          + matrix[i+1][j] + matrix[i][j+1] + matrix[i+1][j-1] + matrix[i-1][j+1];
      row.push(sum);
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper
};
