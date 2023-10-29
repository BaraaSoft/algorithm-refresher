function merge(intervals) {
  let results = [];
  let prevStart = intervals[0][0];
  let prevEnd = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    let [currStart, currEnd] = intervals[i];
    if (currStart <= prevEnd) {
      prevEnd = Math.max(currEnd, prevEnd);
    } else {
      results.push([prevStart, prevEnd]);
      prevStart = currStart;
      prevEnd = currEnd;
    }
  }

  results.push([prevStart, prevEnd]);

  return results;
}

function insert(existingIntervals, newInterval) {
  existingIntervals.push(newInterval);
  existingIntervals.sort((arrA, arrB) => {
    return arrA[0] - arrB[0];
  });
  return merge(existingIntervals);
}

console.log(
  insert(
    [
      [1, 3],
      [4, 5],
      [7, 8],
      [9, 12],
      [13, 14],
    ],
    [2, 10],
  ),
);
