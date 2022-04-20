/*
You’re given two arrays of integers. Find a pair of values (one value from each array) 
that you can swap to give the two arrays the same sum.

For example:
A: [2, 3, 1, 3], 
B: [1, 5, 1, 4],
the program should return [3,4]
// [1,2,3,3] 1 3 6 9 
// [1,1,4,5] 1 2 6 11
because 
A’: [2, 4, 1, 3], sumA’ = 10
B’: [1, 5, 1, 3], sumB’= 10

*/

function main(arrA, arrB) {
  let sumA = arrA.reduce((curr, prev) => curr + prev, 0);
  let sumB = arrB.reduce((curr, prev) => curr + prev, 0);
  // console.log({ sumA, sumB });
  // let len = arrA.length < arrB.length ? arrA.length : arrB.length;

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      let elmA = arrA[i];
      let elmB = arrB[j];
      let sumWithoutElmA = sumA - elmA;
      let sumWithoutElmB = sumB - elmB;

      let newSumA = sumWithoutElmA + elmB;
      let newSumB = sumWithoutElmB + elmA;
      if (newSumA == newSumB) {
        return [elmA, elmB];
      }
    }
  }

  return -1;
}

let res = main([2, 0, 0, 1, 3, 3], [1, 5, 1, 4]);
let resB = main([2, 1, 3, 3], [1, 5, 1, 4]);

console.log(res);
console.log(resB);

// [1,2,3,3]
// [1, 1, 4,5]
