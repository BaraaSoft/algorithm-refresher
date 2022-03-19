/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (matrix) {
    if (matrix[0][0] == 1) return 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 1)
                matrix[i][j] = 'X'
        }
    }



    matrix[0][0] = 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (!(i == 0 && j == 0) && matrix[i][j] == 0)
                matrix[i][j] = numOfWays(i, j, matrix)
        }
    }




    let num = matrix[matrix.length - 1][matrix[0].length - 1]
    return Number.isNaN(+num) ? 0 : num
};


const numOfWays = (row, col, matrix) => {
    let ways = 0
    if (isValid(row - 1, col, matrix)) {
        ways += matrix[row - 1][col] == 'X' ? 0 : matrix[row - 1][col]
    }
    if (isValid(row, col - 1, matrix)) {
        ways += matrix[row][col - 1] == 'X' ? 0 : matrix[row][col - 1]
    }
    return ways;
}




const isValid = (row, col, matrix) => {
    const maxRow = matrix.length;
    const maxCol = matrix[0].length;
    const condA = row >= 0 && row < maxRow;
    const condB = col >= 0 && col < maxCol;
    return (condA && condB);
}