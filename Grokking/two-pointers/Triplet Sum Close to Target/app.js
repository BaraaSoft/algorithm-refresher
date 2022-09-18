const solve = (arr, target) => {
  arr.sort((a, b) => a - b);
  let num = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      sum = target - arr[i] - arr[j] - arr[k];
      if (sum == 0) {
        return sum;
      }

      if (Math.abs(sum) < Math.abs(num)) {
        num = sum;
      }

      if (sum > 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return target - num;
};

console.log(solve([-2, 0, 1, 2], 2));
console.log(solve([-3, -1, 1, 2], 1));
console.log(solve([1, 0, 1, 1], 100));
