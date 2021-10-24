


const heapIn = (arr,index)=>{
    let n = index;
    let temp = arr[index];

    while(n > 0 && temp > arr[n%2 ==0?(n/2)-1:Math.floor(n/2)] ){

    }
}


const sort = (arr)=>{
    for(let i =0;i<arr.length;i++){
        let elm= arr[i];
        let j = i;
        while(j>0 && elm < arr[j-1]){
            arr[j] = arr[j-1];
            j -=1;
        }
        arr[j] = elm
    }
    return arr;
}

console.log(sort([12,3,8,2,7]))