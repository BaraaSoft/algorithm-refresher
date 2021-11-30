

// const flat = (arr) => {
//     if (arr.length <= 0) return []
//     let first = arr[0]
//     let rest = arr.slice(1);
//     if (Array.isArray(arr[0])) {
//         return flat(first).concat(flat(rest))
//     } else {
//         return [first, ...flat(rest)] //"0".charCodeAt/ fromCharCode
//     }
// }

const solve = (target)=>{
    if(target == '') return []

    let word = '';
    let allres = ['']
    for (let i = 0; i < target.length;i++){
        let decodeFirst = encode(+target[0]);
        let decode2nd = encode(+(target[0] + target[1]));

        let str = target.slice(1);
        let str2 = target.slice(2);

        let deWords = solve(str);
        let deWords2 = solve(str2);
       
        if(deWords){
            if (decodeFirst){
                for (let combo of [...deWords,...deWords2]) {
                    if(decodeFirst ){
                        allres.push(decodeFirst + combo)

                    }
                    if (decode2nd){
                        allres.push(decodeFirst + combo + decode2nd)
                    }
                       
                    
                       
                }
                
            }  
            
        }

        // if(deWords2){
        //     if (decode2nd) {
        //         for (let combo of [...deWords, ...deWords2]) {
        //             allres.push(decode2nd + combo)
        //         }
        //     }
        // }
        return [...allres, ...deWords];;

    }

    return null; 
}




const decode = (char)=>{
    return char.charCodeAt(0) - 64
}

const encode = (num)=>{
    if(num > 26) return null;
    return String.fromCharCode(num + 64)
}



console.log(solve('1262').filter(x=>x.length >2))

// input: S = '1262'
// output: 3
// explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.

