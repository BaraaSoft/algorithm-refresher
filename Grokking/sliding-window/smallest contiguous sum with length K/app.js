


const solve =(arr,s)=>{
    let sum = 0
    
    let minLen =   Number.MAX_VALUE;
    let end = 0
    for(let i=0;i<arr.length;i++){
         sum += arr[i];
       while(sum >=s){
           minLen = Math.min(minLen,i-end+1);
           sum -= arr[end++]
       }
    }
    return minLen;
}

console.log(solve([2, 1, 5, 2, 3, 2], 7 ))