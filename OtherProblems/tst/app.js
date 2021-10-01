
const input = [
    [0, 3],
    [0, 6],
    [0, 17],
    [8, 11],
    [19, 23]
]

const constructOptimalSchedule = (intervals) => {

    // let arr = intervals.sort((a, b) => {
    //     const gapA = a[1] - a[0];
    //     const gapB = b[1] - b[0];
    //     return gapA - gapB;
    // });
   let res = [intervals[0]]

   for(let i=1;i<intervals.length;i++){
       const last = res.length -1;
       const [start,end] = intervals[i];
       const gap = end - start;
       const [startRes,endRes] = res[last];
       const gapRes = endRes - startRes
       if(endRes < start){
           res.push([start, end])
       }else{
           if(gap > gapRes){
               res.pop()
               res.push([startRes, endRes])
           }
       }
   }
  
    return res
}

console.log(constructOptimalSchedule(input))


