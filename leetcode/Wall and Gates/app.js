// 286. Walls and Gates

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] == 0) {
                travel(i, j, rooms, 0)
            }
        }
    }
    return rooms
};

const travel = (row, col, rooms, k) => {
    const conditionA = row >= 0 && row < rooms.length;
    const conditionB = col >= 0 && col < rooms[0].length;
    if (!conditionA || !conditionB) return;

    let val = rooms[row][col]
    if (val == -1) return
    if (k <= val) {
        rooms[row][col] = k;
        travel(row + 1, col, rooms, k + 1)
        travel(row - 1, col, rooms, k + 1)

        travel(row, col + 1, rooms, k + 1)
        travel(row, col - 1, rooms, k + 1)
    }

}

const inputA = [
    [2147483647, -1, 0, 2147483647],
     [2147483647, 2147483647, 2147483647, -1], 
     [2147483647, -1, 2147483647, -1], 
     [0, -1, 2147483647, 2147483647]];
const expectedOutputA = [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]

console.log(wallsAndGates(inputA))