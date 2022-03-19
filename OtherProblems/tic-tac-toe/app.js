/**
 * @param {number[][]} moves
 * @return {string}
 */

const State = {
    A: 'A',
    B: 'B',
    Pending: 'Pending',
    Draw: 'Draw'
}
var tictactoe = function (moves) {
    let xlist = [];
    let olist = [];
    let matrix = Array(3).fill(0).map(x => new Array(3).fill(null))

    for (let i = 0; i < moves.length; i++) {
        let [rw, cl] = moves[i];
        if (i % 2 == 0) {
            matrix[rw][cl] = 'x'
        } else {
            matrix[rw][cl] = 'o'
        }
    }

    let colOrigin = [];
    let rowOrigin = [];
    let mainDiagonal = [0, 0]
    let secDiagonal = [0, 2]
    for (let i = 0; i < 3; i++) {
        colOrigin.push([0, 0 + i]);
        rowOrigin.push([0 + i, 0]);

    }

    let isPending = false;
    for (let [row, col] of rowOrigin) {
        let tempRes = winRowCol(matrix, row, col, true);
        if (tempRes == State.A) return 'A'
        if (tempRes == State.B) return 'B'
        if (tempRes == State.Pending) isPending = true
    }
    for (let [row, col] of colOrigin) {
        let tempRes = winRowCol(matrix, row, col, false);
        if (tempRes == State.A) return 'A'
        if (tempRes == State.B) return 'B'
        if (tempRes == State.Pending) isPending = true
    }

    let mainDiagSttate = winDiagonal(matrix, mainDiagonal[0], mainDiagonal[1], true)
    if (mainDiagSttate == State.A) return 'A'
    if (mainDiagSttate == State.B) return 'B'
    if (mainDiagSttate == State.Pending) isPending = true
    let secDiagSttate = winDiagonal(matrix, secDiagonal[0], secDiagonal[1], false)
    if (secDiagSttate == State.A) return 'A'
    if (secDiagSttate == State.B) return 'B'
    if (secDiagSttate == State.Pending) isPending = true

    return isPending ? State.Pending : State.Draw
};

const winRowCol = (matrix, row, col, checkRow) => {
    let countX = 0;
    let countO = 0;
    let empty = 0
    for (let i = 0; i < 3; i++) {
        let [rw, cl] = checkRow ? [row, col + i] : [row + i, col]
        if (matrix[rw][cl] == 'x')
            countX++;
        else if (matrix[rw][cl] == 'o')
            countO++;
        else {
            empty++;
        }
    }

    if (countX == 3) return State.A
    if (countO == 3) return State.B
    if (empty > 0) return State.Pending
    return State.Draw
}

const winDiagonal = (matrix, row, col, isMainDiagonal) => {
    let countX = 0;
    let countO = 0;
    let empty = 0
    for (let i = 0; i < 3; i++) {
        let [rw, cl] = isMainDiagonal ? [row + i, col + i] : [row - i, col - i]
        if (matrix[rw][cl] == 'x')
            countX++;
        else if (matrix[rw][cl] == 'o')
            countO++;
        else {
            empty++;
        }
    }

    if (countX == 3) return State.A
    if (countO == 3) return State.B
    if (empty > 0) return State.Pending
    return State.Draw

}



let input = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]

console.log(tictactoe(input))