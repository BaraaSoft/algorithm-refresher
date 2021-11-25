// https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let vals = intervals.sort((a, b) => a[0] - b[0]);
    let heap = new MinHeap((a, b) => a - b)
    heap.insert(vals[0][1])
    for (let i = 1; i < vals.length; i++) {
        let elm = vals[i]
        let lastVacant = heap[1]
        if (elm[0] >= heap.peek()) {
            heap.extract()
        }
        heap.insert(elm[1])
    }

    return heap.size

};

class MinHeap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = [];
    }

    insert(val) {
        this.heap.unshift(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        if (this.size === 0) return null;
        return this.heap.shift();
    }

    peek() {
        if (this.size === 0) return null;
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}



const insert = (arr, n) => {
    let temp = arr[n];
    let i = n;

    while (i > 1 && temp < arr[Math.floor(i / 2)]) {
        arr[i] = arr[Math.floor(i / 2)]
        i = Math.floor(i / 2)
    }
    arr[i] = temp

    return arr;
}

const deletes = (arr, l) => {
    let temp = arr[l];
    arr[1] = arr[l]
    let i = 1, j = i * 2
    while (j <= (l - 1)) {
        if (j < l - 1 && arr[j + 1] > arr[j]) {
            j += 1
        }
        if (arr[j] > arr[i]) {
            let tp = arr[i]
            arr[i] = arr[j];
            arr[j] = tp
            i = j
            j *= 2
        } else {
            break
        }
    }
    arr.pop()
}


