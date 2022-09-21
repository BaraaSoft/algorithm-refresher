const solve = (arr, target) => {
  let res = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let end = arr.length - 1;
      let start = j + 1;
      while (start < end) {
        let num = arr[i] + arr[j] + arr[start] + arr[end];
        if (num == target) {
          res.push([arr[i], arr[j], arr[start], arr[end]]);
          start++;
          end--;
        } else if (num < target) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return res
};

solve([4, 1, 2, -1, 1, -3], 1);
solve([2, 0, -1, 1, -2, 2], 2);
