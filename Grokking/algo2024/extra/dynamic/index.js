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


const bestSum = (target, arr) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = { length: Number.MAX_VALUE };
  for (let num of arr) {
    const nextTarget = target - num;

    const res = bestSum(nextTarget, arr);
    if (Array.isArray(res)) {
      const combination = [num, ...res];

      shortest =
        combination.length < shortest?.length
          ? combination
          : shortest;
    }
  }

  return shortest;
};

//console.log(bestSum(8, [2, 3, 5]));

const canConstruct = (word, arr) => {
  if (word === '') return true;

  for (let str of arr) {
    const index = word.indexOf(str);
    if (index == 0) {
      if (
        canConstruct(word.substring(str.length), arr) ==
        true
      ) {
        return true;
      }
    }
  }

  return false;
};

// console.log(
//   canConstruct('abcdef', [
//     'ab',
//     'abc',
//     'cd',
//     'def',
//     'abcd',
//   ]),
// );

// console.log(
//   canConstruct('skateboard', [
//     'bo',
//     'rd',
//     'ate',
//     't',
//     'ska',
//     'sk',
//     'boar',
//   ]),
// );

const countConstruct = (word, arr) => {
  if (word === '') return 1;
  let sum = 0;
  for (let str of arr) {
    const index = word.indexOf(str);
    if (index === 0) {
      const count = countConstruct(
        word.substring(str.length),
        arr,
      );
      sum += count;
    }
  }
  return sum;
};

console.log(
  countConstruct('abcdef', [
    'ab',
    'abc',
    'cd',
    'def',
    'abcd',
  ]),
);

console.log(
  countConstruct('purple', [
    'purp',
    'p',
    'ur',
    'le',
    'purpl',
  ]),
);