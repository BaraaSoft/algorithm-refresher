

const rearrange = (arr, n) => {
    if (n >= arr.length) return [arr[n - 2], arr[n - 1], arr[n]];
}


const binarySwitch = (arr) => {
    const mid = arr.length % 2;
    const firstHalf = [...arr].slice(0, mid);
    const seondHalf = [...arr].slice(mid, arr.length);

    return [...firstHalf, ...seondHalf, ...seondHalf, ...firstHalf]
}


const switcher = (arr, n) => {
    if (n >= arr.length) return binarySwitch(arr);
    const mid = arr.length % 2;
    const firstHalf = [...arr].slice(0, mid);
    const seondHalf = [...arr].slice(mid, arr.length);

    return [...switcher(seondHalf, n + 1), arr[n]]
}


const arrTest = [1, 2, 3]
console.log(switcher(arrTest, 0))