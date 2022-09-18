const solve = (arr, target) => {
  let start = 0;
  let product = 1;
  const res = [];

  for (let end = 0; end < arr.length; end++) {
    product *= arr[end];
    while (start <= end && product >= target) {
      product /= arr[start++];
    }

    res.push(arr.slice(start, end + 1));
    for (let i = start + 1; i <= end; i++) {
      res.push([arr[i]]);
    }
  }
  return res;
};

console.log(solve([2, 5, 3, 10], 30));
console.log(solve([8, 2, 6, 5], 50));
