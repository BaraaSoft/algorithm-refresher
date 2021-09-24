
// Idenify the the number of surrounding mines (X) arround

// GIVEN:
// "X O O" 
// "O O O"
// "X X O"

// OUTPUT:
// X 1 O
// 3 3 1
// X X 1
//----------------

//GIVEN:
// XOOO 
// OOOO 
// XOXO

//OUTPUT:
// X1OO 
// 2311 
// X2X1


const parseCell = (str) => {
    if (str === 'O' || str == 'o') {
        return 1;
    }

    return str != 'X' ? parseInt(str) + 1 : str
}

const isValid = (row, col, arr) => {
    const colLen = arr[0].length;
    return (row < arr.length) && (row >= 0) && (col < colLen) && (col >= 0)

}

const mine = (arr) => {
    let top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, right;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == 'X') {

                if (i - 1 >= 0) {
                    top = arr[i - 1][j];
                    arr[i - 1][j] = parseCell(top)
                    if (j - 1 >= 0) {
                        topLeft = arr[i - 1][j - 1];
                        arr[i - 1][j - 1] = parseCell(topLeft)
                    }
                    if (j + 1 < arr[0].length) {
                        topRight = arr[i - 1][j + 1];
                        arr[i - 1][j + 1] = parseCell(topRight)
                    }
                }


                if (i + 1 < arr.length) {
                    bottom = arr[i + 1][j];
                    arr[i + 1][j] = parseCell(bottom);
                    if (j - 1 >= 0) {
                        bottomLeft = arr[i + 1][j - 1];
                        arr[i + 1][j - 1] = parseCell(bottomLeft)
                    }
                    if (j + 1 < arr[0].length) {
                        bottomRight = arr[i + 1][j + 1];
                        arr[i + 1][j + 1] = parseCell(bottomRight)
                    }
                }

                if (j - 1 >= 0) {
                    left = arr[i][j - 1];
                    arr[i][j - 1] = parseCell(left)
                }

                if (j + 1 < arr[0].length) {
                    right = arr[i][j + 1];
                    arr[i][j + 1] = parseCell(right)
                }
            }
        }
    }

    return arr.map(x => x.join(''));

}


console.log(mine([['X', 'O', 'O'], ['O', 'O', 'O'], ['X', 'X', 'O']]))
console.log(mine([['X', 'O', 'O', 'O'], ['O', 'O', 'O', 'O'], ['X', 'O', 'X', 'O']]))







