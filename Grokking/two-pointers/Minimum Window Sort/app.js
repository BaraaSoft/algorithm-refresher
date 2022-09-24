const solve = (arr) => {
  let minDiff = 0;
  let orgArr = [...arr];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != orgArr[i]) minDiff++;
  }
  return minDiff;
};

console.log(solve([1, 2, 5, 3, 7, 10, 9, 12]));

console.log(solve([1, 3, 2, 0, -1, 7, 10]));
console.log(solve([1, 2, 3]));
