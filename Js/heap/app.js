


// Insert into heap
const insert = (arr, index) => {
    let temp = arr[index];
    let i = index;

    while (i > 1 && temp > arr[Math.floor(i / 2)]) {
        arr[i] = arr[Math.floor(i / 2)];
        i = Math.floor(i / 2)
    }

    arr[i] = temp
}

// Delete from the heap
const deletes = (arr) => {
    let len = arr.length;
    // make the last element, at beginning
    arr[1] = arr[len - 1]
    // index of node and it's left child
    let i = 1;
    let j = 2 * i;
    while (j <= len - 1) {
        if (arr[j + 1] > arr[j]) {
            j = j + 1
        }

        if (arr[j] > arr[i]) {
            // swap with parent node
            [arr[j], arr[i]] = [arr[i], arr[j]]
            i = j;
            j = 2 * j
        } else {
            break;
        }
    }
    return arr.slice(0, -1);
}







class Heap {
    constructor(comparator) {
        this.func = comparator.bind(this);
    }

    insert(arr, index) {
        let temp = arr[index || arr.length - 1];
        let i = index || arr.length - 1;
        while (i > 1 && this.func(temp, arr[Math.floor(i / 2)], arr)) {
            arr[i] = arr[Math.floor(i / 2)]
            i = Math.floor(i / 2)
        }
        arr[i] = temp
        return arr;
    }
    delete(arr) {
        let len = arr.length;
        arr[1] = arr[len - 1]
        let i = 1
        let j = 2 * i;
        while (j <= len - 1) {
            if (this.func(arr[j + 1], arr[j])) {
                j = j + 1
            }
            if (this.func(arr[j], arr[i])) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                i = j;
                j = j * 2
            } else {
                break
            }
        }
        return arr.slice(0, -1)
    }
}






let arr = [0, 10, 32, 9, 45, 1, 5, 9]

for (let i = 1; i < arr.length; i++) {
    let pos = arr.length - i - 1
    insert(arr, pos)
}



// comparator
const heap = new Heap((a, b) => {
    if (a > b) return true;
    return false
})
arr = [0, 10, 20, 30, 25, 5, 40, 35]
for (let i = 1; i < arr.length; i++) {
    insert(arr, i)
}
console.log(arr)
arr = deletes(arr)
arr = deletes(arr)
arr = deletes(arr)


console.log(deletes(arr))

// arr.push(100)
// heap.insert(arr)
// console.log(arr)
