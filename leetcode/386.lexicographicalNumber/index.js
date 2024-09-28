// https://leetcode.com/problems/lexicographical-numbers/?envType=company&envId=google&favoriteSlug=google-thirty-days

var lexicalOrder = function (n) {
  const result = [];

  for (let num = 1; num <= 9; num++) {
    generateLex(num, n, result);
  }
  return result;
};

const generateLex = function (currNum, limit, result) {
  if (currNum > limit) return;
  result.push(currNum);

  for (let digit = 0; digit <= 9; digit++) {
    let nextNum = currNum * 10 + digit;
    if (nextNum <= limit)
      generateLex(nextNum, limit, result);
    else break;
  }
};
