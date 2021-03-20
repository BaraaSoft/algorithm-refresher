
//https://www.hackerrank.com/challenges/minimum-swaps-2/
// Minimum Swaps 2

const minimumSwaps = (arr) => {
    let realIndex = 0;
    let swapCount = 0;
    let cycleIndex = realIndex;
    let nextIndex;
    let visited = Array(arr.length).fill(false)
    let startIndex = 0;
    while (realIndex < arr.length) {

        do {
            nextIndex = arr[cycleIndex] - 1;
            visited[cycleIndex] = true;
            cycleIndex = nextIndex
            swapCount++;
        } while (cycleIndex != startIndex);
        do {
            cycleIndex++;
            realIndex++;
        } while (visited[realIndex])
        startIndex = cycleIndex;
        swapCount--;
    }
    return swapCount;
}

// [4, 3, 1, 2] // 3
// [7, 1, 3, 2, 4, 5, 6] //5
// [1, 3, 5, 2, 4, 6, 7] // 3

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))