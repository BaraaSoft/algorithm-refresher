const threeSum = (target, arr) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum == target) return true;

      if (sum < target) j++;
      else k--;
    }
  }
  return false;
};

//console.log(threeSum(20, [3, 7, 1, 2, 8, 4, 5]));

const longestRepeatChar = (s, k) => {
  let start = 0,
    end = 1;
  let currk = 0;
  while (end < s.length) {
    if (s[end] == s[end - 1]) {
      end++;
      start++;
    } else {
      currk++;
      end++;

      if (currk == k) {
        start++;
      }
    }
  }
};
