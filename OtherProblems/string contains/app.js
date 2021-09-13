const contains = (blob, target) => {
    let str =""
  
    for(let i =0;i<blob.length;i++){
        if(target.indexOf(blob[i])> -1){
            str += blob[i]
        }
        if(str.length == target.length) break;
    }
   
    return target.length == str.length;
}

console.log(contains('rssBuzaidaa','Baraa'))
console.log(contains('a', 'b'))
// let str = 'baraa';
// const x = str.indexOf('r');
// const start = str.slice(0,x).concat(str.slice(x+1,str.length))
// console.log(start)