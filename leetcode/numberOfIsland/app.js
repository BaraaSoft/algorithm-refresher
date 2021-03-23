
// count the number of Islands
// https://leetcode.com/problems/number-of-islands/

const solve = (grid) => {
    let map = Array(grid.length).fill(0).map(x => Array(grid[0].length).fill(0))
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                if (map[i][j] == '0') {
                    count++;
                }
                markNeighbr(grid, map, i, j)
            }
        }
    }

    return count;
}

const markNeighbr = (grid, map, i, j) => {
    let top, bottom, left, right;
    if (grid[i - 1]) {
        top = grid[i - 1][j];
        map[i - 1][j] = top
    }

    if (grid[i + 1]) {
        bottom = grid[i + 1][j]
        map[i + 1][j] = bottom
    }

    if (grid[i][j - 1]) {
        left = grid[i][j - 1]
        map[i][j - 1] = left
    }

    if (grid[i][j + 1]) {
        right = grid[i][j + 1]
        map[i][j + 1] = right
    }

}


let arr = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]

let arr2 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]

]

let arr3 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]


console.log(solve(arr2))