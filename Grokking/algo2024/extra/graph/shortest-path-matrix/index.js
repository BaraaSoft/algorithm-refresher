/**
 * @param {number[][]} grid
 * @return {number}
 *
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */
var shortestPathBinaryMatrix = function (grid) {
  const ROWS = grid.length - 1;
  const COLS = grid[0].length - 1;

  if (grid[0][0] == 1 || grid[ROWS][COLS] == 1) return -1;

  const queue = [[0, 0]];
  const visited = new Map();
  visited.set([0, 0], true);
  // set init distance
  grid[0][0] = 1;

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    const distance = grid[row][col];

    if (row == ROWS && col == COLS) return distance;

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ];
    for (let [r, c] of directions) {
      const nrow = r + row;
      const ncol = c + col;

      const outOfGrid =
        nrow < 0 || ncol < 0 || nrow > ROWS || ncol > COLS;

      if (
        outOfGrid ||
        visited.get([nrow, ncol]) == true ||
        grid[nrow][ncol] > 0
      )
        continue;

      queue.push([nrow, ncol]);
      visited.set([nrow, ncol], true);
      grid[nrow][ncol] = distance + 1;
    }
  }

  return -1;
};
