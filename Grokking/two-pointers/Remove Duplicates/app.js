const solve = (arr = []) => {
  let i = 0,
    end = 1;
  while (i < arr.length) {
    if (arr[i] !== arr[end - 1]) {
      arr[end++] = arr[i];
    }

    i++;
  }
  return arr.slice(0, end);
};

console.log(solve([2, 3, 3, 3, 6, 9, 9]));
