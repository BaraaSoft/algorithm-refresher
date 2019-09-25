



const combin = (arr, data, start, end, r, index) => {

    if (end == 0) {
        console.log(data)
    }

    for (let i = start; i <= arr.length - r; i++) {
        data[arr.length - r] = arr[i];

        combin(arr, data, i + 1, end - 1, r, index + 1);
    }
}






const tempArr = [1, 2, 3, 4, 5]

combin(tempArr, [], 0, tempArr.length - 1, 3, 0)