const gridTraveler = (a, b, memo = {}) => {
  const key = String(a) + '#' + String(b);
  const key2 = String(b) + '#' + String(a);
  if (key in memo || key2 in memo) return memo[key];
  if (a == 1 && b == 1) return 1;
  if (b == 0 || a == 0) return 0;
  memo[key] = memo[key2] =
    gridTraveler(a - 1, b, memo) +
    gridTraveler(a, b - 1, memo);

  return memo[key];
};

// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(18, 18));

const canSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i = 0; i < arr.length; i++) {
    memo[target] = canSum(target - arr[i], arr, memo);
    if (memo[target] == true) return true;
  }

  return false;
};

// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(2, [5, 3])); //false
// console.log(canSum(300, [7, 14])); //false

const howSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of arr) {
    const newTarget = target - num;
    memo[target] = howSum(newTarget, arr, memo);
    if (Array.isArray(memo[target])) {
      return [num, ...memo[target]];
    }
  }

  return null;
};

// console.log(howSum(7, [5, 3, 4, 7])); // [3,4]
// console.log(howSum(2, [5, 3])); // null
// console.log(howSum(7, [2, 3])); // [2, 2, 3];
// console.log(howSum(300, [7, 14])); // null
