function reverseVowels(word) {

    let arr = [];
    //let vow = []
    let wordArr = word.split("")
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'A' ||
            word[i] == 'i' || word[i] == 'I' ||
            word[i] == 'o' || word[i] == 'O' ||
            word[i] == 'u' || word[i] == 'U' ||
            word[i] == 'e' || word[i] == 'E') {
            arr.push(word[i])
            wordArr[i] = '@'
        }
    }


    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == '@') {
            wordArr[i] = arr.pop()
        }
    }

    return wordArr.join("")

}

// Other Problem to check
// Maximum occuring Character - Problem
// Non Consecutive ones - Problem