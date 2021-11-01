

// const twosum = (arr,target,res = [])=>{
//     if(target == 0) return []
//     if(target < 0) return null

//     let result = []
//     for(let num of arr){
//         const remainder = target - num;
//         const tmp = twosum(arr,remainder,res)
//         if(tmp){
//             return [...tmp,num]
//         }else{
//             return []
//         }
       
//     }

//     return result

// }


const twosum = (arr,target)=>{
    let res = []
    for(let i =0;i<arr.length;i++){
        for(let j = i +1;j<arr.length;j++){
            const sum = arr[i] + arr[j];
            if(sum == target){
                res.push(arr[i],arr[j])
            }
        }
    }

    return res;
}






console.log(twosum([1,3,7,9,2],26))