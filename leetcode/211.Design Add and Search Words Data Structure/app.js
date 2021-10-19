// https://leetcode.com/problems/design-add-and-search-words-data-structure/
// 211. Design Add and Search Words Data Structure

var WordDictionary = function () {
    this.root = new TrieNode();

};

const TrieNode = function () {
    this.children = {};
    this.endOfWord = false
}

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root
    for (let char of word) {
        if (!(char in node.children)) {
            node.children[char] = new TrieNode()
        }
        node = node.children[char]
    }
    node.endOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let node = this.root;

    return search(node, word);
};

const search = (node, word) => {
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (char == '.') {
            for (let [subchar,] of Object.entries(node.children)) {
                let subnode = node.children[subchar];
                if (search(subnode, word.slice(i + 1))) {
                    return true
                }
            }

        }
        if (!(char in node.children)) {
            return false;
        }
        node = node.children[char]
    }
    return node.endOfWord
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */