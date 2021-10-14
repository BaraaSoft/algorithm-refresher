const question = ()=>{
    let list = [10,20,30,25,5,40,35];
    console.log(list)
    for(let i=1;i<list.length;i++){
        insert(list, i)
    }
   

    return list;
}


const insert = (arr,idx)=>{

    let n = idx;
    let temp = arr[n]
    while (n > 0 && temp > arr[n % 2 == 0 ? (n / 2) - 1 : Math.floor(n / 2)] ){
        arr[n] = arr[n % 2 == 0 ? (n / 2) - 1 : Math.floor(n / 2)]
        n = n % 2 == 0 ? (n / 2) - 1 : Math.floor(n / 2)
    }

    arr[n] = temp
}


console.log(question())



