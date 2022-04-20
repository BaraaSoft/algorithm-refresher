

const Twisted_3_7 = (arr = [])=>{
   // arr.sort((a,b)=> a-b);
    // for(let i=0;i<arr.length;i++){
        
    // }

    arr.sort((a,b)=>{
        let newAArr =String(a).split('');
        let newBArr = String(b).split('');
        let numA = a,numB = b;
        if(newAArr.includes('3') ||  newAArr.includes('7')){
            newAArr =  newAArr.map(x=>{
                if(x == '7') return '3';
                if(x == '3') return '7';
                return x
            })
            numA = +newAArr.join('');
        }

        if(newBArr.includes('3') ||  newBArr.includes('7')){
            newBArr =  newBArr.map(x=>{
                if(x == '7') return '3';
                if(x == '3') return '7';
                return x
            })
            numB = +newBArr.join('');
        }


        return numA - numB


    });

    return arr;
}


console.log( Twisted_3_7([1,2,3,4,5,6,7,8,9]))
console.log( Twisted_3_7([12,13,14]) )

console.log( Twisted_3_7([9,2,4,7,3]) )
console.log( Twisted_3_7([88, 106]) )
console.log( Twisted_3_7([72, -20, 77, 11]) )
console.log( Twisted_3_7([66, 35, 70, 60, 66, 44, 71, 86]) )







// console.log(String('13').split('').map(x=>+x))





