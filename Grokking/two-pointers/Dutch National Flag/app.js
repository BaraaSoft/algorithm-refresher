const solve = (arr) => {
  let start = 0,
    end = arr.length - 1;
  let i = 0;
  while (i <= end) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i++] = arr[start];
      arr[start++] = temp;
    } else if (arr[i] == 2) {
      let temp = arr[i];
      arr[i] = arr[end];
      arr[end--] = temp;
    } else {
      i++;
    }
  }
  return arr;
};

console.log(solve([1, 0, 2, 1, 0]));
console.log(solve([2, 2, 0, 1, 2, 0]));
