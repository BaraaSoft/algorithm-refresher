


// Insert into heap
const insert = (arr,index)=>{
    let n = index;
    let temp = arr[index];

    while(n > 0 && temp > arr[n%2 == 0? (n/2)-1:Math.floor(n/2)]){
        arr[n] = arr[n % 2 == 0 ? (n / 2) - 1 : Math.floor(n / 2)];
        n = n % 2 == 0 ? (n / 2) - 1 : Math.floor(n / 2)
    }
    arr[n] = temp;
}

// Insertation sort
const sort = (arr)=>{

    for(let i = 0;i<arr.length;i++){
        let temp = arr[i];
        let j = i;
        while(j > 0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j -=1
        }
        arr[j] = temp
    }

    return arr
}

console.log(sort([10,32,9,45,1,5,9]))