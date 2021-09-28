// 1926. Nearest Exit from Entrance in Maze

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    return nav(maze, entrance)
};

const nav = (maze, entrance, visited = {}) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const queue = [[entrance[0], entrance[1], 0]]
    let key = entrance[0] + "#" + entrance[1];
    visited[key] = true
    let minPath = Number.MAX_VALUE;

    while (queue.length > 0) {
        const [row, col, step] = queue.shift();

        for (let [pw, pc] of directions) {
            const rw = row + pw;
            const cl = pc + col;
            key = rw + "#" + cl;
            // to avoid exploring visisted cell 
            if (!visited[key]) {
                // when reaching the exit
                if (!isNotExit(rw, cl, maze)) {
                    // cater for case: entrance does not count as an exit.
                    if (step > 0)
                        minPath = Math.min(minPath, step)
                    continue;
                }
                // when visiting an empty cell which is not a wall
                if (!isWall(rw, cl, maze)) {
                    visited[key] = true
                    queue.push([rw, cl, step + 1])
                }
            }
        }
    }
    // if minPath == MAX_VALUE that means "no path exists"
    return minPath >= Number.MAX_VALUE ? -1 : minPath;
}


const isWall = (row, col, maze) => {
    return maze[row][col] == '+'
}


const isNotExit = (row, col, maze) => {
    const condA = row < maze.length && row >= 0;
    const condB = col < maze[0].length && col >= 0;
    return condA && condB
}

// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1