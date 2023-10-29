function intervalsIntersection(
  intervalListA,
  intervalListB,
) {
  let i = 0;
  let j = 0;

  let resArr = [];

  while (
    i < intervalListA.length &&
    j < intervalListB.length
  ) {
    let a = intervalListA[i];
    let b = intervalListB[j];

    const conditionA =
      b.at(0) >= a.at(0) && b.at(0) <= a.at(1);
    const conditionB =
      a.at(0) >= b.at(0) && a.at(0) <= b.at(1);

    if (conditionA) {
      resArr.push([
        Math.max(a[0], b[0]),
        Math.min(a[1], b[1]),
      ]);
    } else if (conditionB) {
      resArr.push([
        Math.max(a[0], b[0]),
        Math.min(a[1], b[1]),
      ]);
    }
    if (a[1] > b[1]) j++;
    else if (a[1] < b[1]) i++;
    else {
      j++;
      i++;
    }
  }

  return resArr;
}

console.log(
  intervalsIntersection(
    [
      [2, 6],
      [7, 9],
      [10, 13],
      [14, 19],
      [20, 24],
    ],
    [
      [1, 4],
      [6, 8],
      [15, 18],
    ],
  ),
);
