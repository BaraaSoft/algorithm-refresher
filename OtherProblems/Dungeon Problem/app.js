

const input = [
    ['s', '.', '.', '#', '.', '.', '.'],
    ['.', '#', '.', '.', '.', '#', '.'],
    ['.', '#', '.', '.', '.', '.', '.'],
    ['.', '.', '#', '#', '.', '.', '.'],
    ['#', '.', '#', 'E', '.', '#', '.'],
]




const traverse = (row,col,grid,visisted = {})=>{
    const val = grid[row][col];
    if(val == 'E') return [[row,col]]
    if(val =='#') return null;
    // let key = row +'#'+col;
    // console.log(key)

    let key = (row + 1) + '#' + col;
    if(isValidMove(row+1,col,grid,visisted) && ! visisted[key] ){
        visisted[key]= true;
        const tempVal = traverse(row+1,col,grid,visisted)
        if(Array.isArray(tempVal)){
            grid[row+1][col] = '@'
            return [[row + 1, col], ...tempVal]
        }
    }

    key = (row - 1) + '#' + col;
    if (isValidMove(row -1, col, grid, visisted) && !visisted[key]) {
       
        visisted[key] = true;
        const tempVal = traverse(row - 1, col, grid, visisted)
        if (Array.isArray(tempVal)) {
            grid[row -1][col] = '@'
            return [[row - 1, col],...tempVal]
        }
    }

    key = row + '#' + (col + 1);
    if (isValidMove(row, col+1, grid, visisted) && !visisted[key]) {
        
        visisted[key] = true;
        const tempVal = traverse(row, col+1, grid, visisted)
        if (Array.isArray(tempVal)) {
            grid[row ][col+1] = '@'
            return [[row, col+1],...tempVal]
        }
    }

    key = row + '#' + (col - 1);
    if (isValidMove(row, col - 1, grid, visisted) && !visisted[key]) {
       
        visisted[key] = true;
        const tempVal = traverse(row, col -1, grid, visisted)
        if (Array.isArray(tempVal)) {
            grid[row][col-1] = '@'
            return [[row, col - 1],...tempVal]
        }
    }


    return null
}

const isValidMove = (row,col,grid)=>{
    const rowLen = grid.length;
    const colLen = grid[0].length;

    const condA = row >=0 && row < rowLen;
    const condB = col >= 0 && col < colLen;

    return condA && condB
}


console.log(
    traverse(0,0,input)
)
console.log(input)


  //  '@', '@', '@','#', '.', '.','.'
  //  '@', '#', '@','@', '@', '#','.'
  //  '.', '#', '@','@', '@', '.','.'
  //  '.', '.', '#','#', '@', '.','.'
  //  '#', '.', '#','@', '@', '#','.'
    