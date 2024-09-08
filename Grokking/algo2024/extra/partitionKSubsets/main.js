function canPartitionKSubsets(nums, k) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  // If total sum is not divisible by k, it's not possible to partition
  if (totalSum % k !== 0) {
    return false;
  }

  const target = totalSum / k;
  nums.sort((a, b) => b - a); // Sort in descending order for optimization
  const n = nums.length;
  const used = new Array(n).fill(false);
  const memo = new Map();
  const result = Array.from({ length: k }, () => []); // Array to store subsets

  function backtrack(k, currentSum, startIndex) {
    if (k === 0) {
      return true; // All subsets are correctly partitioned
    }
    if (currentSum === target) {
      // Current subset is correctly filled, proceed to next subset
      return backtrack(k - 1, 0, 0);
    }

    const memoKey = used.toString();
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    for (let i = startIndex; i < n; i++) {
      if (used[i] || currentSum + nums[i] > target) {
        continue; // Skip used elements and those that exceed the target
      }
      used[i] = true; // Mark the element as used
      result[k - 1].push(nums[i]); // Add number to the current subset

      if (backtrack(k, currentSum + nums[i], i + 1)) {
        memo.set(memoKey, true);
        return true;
      }

      used[i] = false; // Backtrack
      result[k - 1].pop(); // Remove number from the current subset
    }

    memo.set(memoKey, false);
    return false;
  }

  if (backtrack(k, 0, 0)) {
    return result;
  } else {
    return false;
  }
}

// Example usage
//const nums = [4, 3, 2, 3, 5, 2, 1];
//const k = 4;
//console.log(canPartitionKSubsets(nums, k)); // Output: [ [ 5 ], [ 4, 1 ], [ 3, 2 ], [ 3, 2 ] ]

function partitionKSubsets(nums, k) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  // If total sum is not divisible by k, it's not possible to partition
  //   if (totalSum % k !== 0) {
  //     return false;
  //   }

  const target = totalSum / k;
  nums.sort((a, b) => b - a); // Sort in descending order for optimization
  const n = nums.length;
  const used = new Array(n).fill(false);
  const memo = new Map();
  const result = Array.from({ length: k }, () => []); // Array to store subsets

  function backtrack(k, currentSum, startIndex) {
    if (k === 0) {
      return true; // All subsets are correctly partitioned
    }
    if (currentSum == target) {
      // Current subset is correctly filled, proceed to next subset
      return backtrack(k - 1, 0, 0);
    }

    const memoKey = used.toString();
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    for (let i = startIndex; i < n; i++) {
      if (used[i] || currentSum + nums[i] > target) {
        continue; // Skip used elements and those that exceed the target
      }
      used[i] = true; // Mark the element as used
      result[k - 1].push(nums[i]); // Add number to the current subset

      if (backtrack(k, currentSum + nums[i], i + 1)) {
        memo.set(memoKey, true);
        return true;
      }

      used[i] = false; // Backtrack
      result[k - 1].pop(); // Remove number from the current subset
    }

    memo.set(memoKey, false);
    return false;
  }

  if (backtrack(k, 0, 0)) {
    return result;
  } else {
    return false;
  }
}

// Example usage
//const nums = [4, 3, 2, 3, 5, 2, 1, 1];
// const k = 4;
//console.log(partitionKSubsets(nums, k)); // Output: [ [ 5 ], [ 4, 1 ], [ 3, 2 ], [ 3, 2 ] ]

function greedyPartition(nums, k) {
  // Step 1: Sort the array in descending order
  nums.sort((a, b) => b - a);

  // Step 2: Initialize k partitions
  const partitions = Array.from({ length: k }, () => []);

  // Step 3: Initialize an array to keep track of the sum of each partition
  const partitionSums = new Array(k).fill(0);

  // Step 4: Assign numbers to partitions
  for (const num of nums) {
    // Find the partition with the minimum current sum
    let minIndex = 0;
    for (let i = 1; i < k; i++) {
      if (partitionSums[i] < partitionSums[minIndex]) {
        minIndex = i;
      }
    }

    // Assign the current number to the selected partition
    partitions[minIndex].push(num);
    partitionSums[minIndex] += num;
  }

  return partitions;
}

let nums1 = [4, 3, 2, 3, 5, 2, 1, 1];
let k1 = 4;

console.log(' 1 >>', greedyPartition(nums1, k1));

nums1 = [4, 3, 2, 3, 5, 2, 1, 1];
k1 = 4;

console.log(' 2 >>', greedyPartition(nums1, k1));
