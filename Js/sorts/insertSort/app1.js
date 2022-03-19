// 8,2,7,5,3

const insertSort = (orgArr) => {
    const [first, ...resetArr] = orgArr;
    let arr = [first];

    for (let i = 0; i < resetArr.length; i++) {
        const element = resetArr[i];
        arr = shiftInsert(arr, element);
    }
    return arr;
}


const shiftInsert = (orgArr, num) => {
    const orgLen = orgArr.length - 1
    for (let i = orgLen; i >= 0; i--) {
        const element = orgArr[i];
        if (element > num) {
            orgArr[i + 1] = element;
        } else {
            orgArr[i + 1] = num;
        }
        if (i == 0 && (element >= num)) {
            orgArr[i] = num
            break;
        }
    }
    return orgArr;
}
const array = [8, 2, 7, 5, 3];

console.log(insertSort(array))