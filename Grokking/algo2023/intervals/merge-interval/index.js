function merge(intervals) {
  let resArr = [];
  let r1 = intervals[0][0];
  let r2 = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= r2) {
      r2 = Math.max(end, r2);
    } else {
      resArr.push([r1, r2]);
      r1 = start;
      r2 = end;
    }
  }
  resArr.push([r1, r2]);
  return resArr;
}

console.log(
  merge([
    [1, 4],
    [3, 6],
    [7, 9],
  ]),
);
