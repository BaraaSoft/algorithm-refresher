//212. Word Search II
// https://leetcode.com/problems/word-search-ii/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const trie = new Trie();
    let node = trie.root;
    let result = []


    for (let word of words) {
        trie.insert(word)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let char = board[i][j]
            if (node.children[char]) {
                traverse(node, i, j, board, result)
            }
        }
    }

    return result
};

const traverse = (trienode, i, j, board, result) => {
    let chr = board[i][j];
    let node = trienode.children[chr]

    if (node.word != null) {
        result.push(node.word)
        node.word = null
    }

    board[i][j] = '#';
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    for (let [rw, cl] of directions) {
        let row = rw + i;
        let col = cl + j;
        if (!isValid(row, col, board)) continue;
        let char = board[row][col]
        if (char in node.children)
            traverse(node, row, col, board, result)
    }

    board[i][j] = chr
}


const isValid = (i, j, board) => {
    const row = board.length;
    const col = board[0].length;
    const validY = i >= 0 && i < row
    const validX = j >= 0 && j < col
    return validY && validX

}


const Trie = function () {
    this.root = new TrieNode()
}

const TrieNode = function () {
    this.children = {}
    this.word = null
}

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!(char in node.children)) {
            node.children[char] = new TrieNode()
        }
        node = node.children[char];
    }
    node.word = word

}


