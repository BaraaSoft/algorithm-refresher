
const question = ()=>{
    let list = [10, 20, 30, 25, 5, 40, 35];
    heapInit(list)
    console.log(list)
    for(let i =1;i<list.length;i++ ){
        insert(list,i)
    }

    console.log(list)
}


const heapInit =(arr)=>{
    arr = arr.unshift(0)
    return arr
}


const insert = (arr,n)=>{
    let temp = arr[n];
    let i = n;

    while(i > 1 && temp > arr[Math.floor(i/2)]){
        arr[i] = arr[Math.floor(i/2)]
        i = Math.floor(i/2)
    }
    arr[i] = temp

    return arr;
}

const deletes = (arr,l)=>{
    const temp = arr[l];
    arr[1] = arr[l]
    let i = 1,j= i * 2
    while(j <= (l - 1)){
        if(arr[j+1] > arr[j]){
            j +=1 
        }
        if(arr[j]> arr[i]){
            let temp = arr[i]
            arr[i] = arr[j];
            arr[j] = temp
            i = j
            j *= 2
        }else{
            break
        }
    }
}




question();