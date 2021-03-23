


const nav = (grid) => {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1')
                count += dfs(grid, i, j)
        }
    }

    return count
}


const dfs = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j >= grid[i].length || j < 0 || grid[i][j] == '0') {
        return 0;
    }

    grid[i][j] = '0';

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);

    return 1;

}


let arr3 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]


console.log(nav(arr3))