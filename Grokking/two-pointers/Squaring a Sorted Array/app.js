const solve1 = (arr) => {
  return arr
    .sort((a, b) => {
      return a * a - b * b;
    })
    .map((x) => x * x);
};

const solve = (arr) => {
  let res = Array(arr.length).fill(0);
  let i = 0,
    k = arr.length - 1,
    j = arr.length - 1;
  while (i < j) {
    let sqLeft = arr[i] * arr[i];
    let sqRight = arr[j] * arr[j];
    if (sqLeft > sqRight) {
      res[k--] = sqLeft;
      i++;
    } else {
      res[k--] = sqRight;
      j--;
    }
  }
  return res;
};

console.log(solve([-2, -1, 0, 2, 3]));
