

/*

Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

*/




const solve = (arr,k)=>{

    let start = 0;
    let sum =0;
    let res = []
    for(let i=0;i<arr.length;i++){
        sum += arr[i];

        if(i >= k-1){
            res.push(sum/5);
            sum -= arr[start];
            start++;
        }
    }

    return res
}


//console.log(solve([1, 3, 2, 6, -1, 4, 1, 8, 2], K=5))



const solve2 = (arr,k)=>{
    let sum =0;
    let start = 0;
    let maxSum = 0
    let subArr =[]
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
        if(i >= k -1){
            if(sum > maxSum){
                maxSum = sum;
                subArr = arr.slice(start,i+1)
            }
            sum -= arr[start++] 
        }
    }

    return subArr;

}

console.log(solve2([2, 1, 5, 1, 3, 2], 3 ))