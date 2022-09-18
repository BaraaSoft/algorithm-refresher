const solve = (arr) => {
  let res = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (j < k) {
      let sum = arr[j] + arr[k] * -1;
      if (sum == arr[i]) {
        while (arr[j] == arr[j + 1]) j++;
        while (arr[k] == arr[k - 1]) k--;

        res.push([arr[i], arr[j++], arr[k--]]);
      } else if (sum < arr[i]) j++;
      else k--;
    }
  }
  return res;
};

console.log(solve([-3, 0, 1, 2, -1, 1, -2]));
