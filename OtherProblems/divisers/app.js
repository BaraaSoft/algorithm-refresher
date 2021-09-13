

const divisers = (num)=>{
    let arr  = []
    for(let i =1;i<=Math.sqrt(num);i++){
        if(num%i == 0){
            if(num/i == i)
                arr.push(i)
            else
                arr.push(Math.floor(num/i),i)
        }
    }

    return arr;
}


console.log(divisers(100))