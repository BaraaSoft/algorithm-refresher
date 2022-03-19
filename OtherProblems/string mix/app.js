



function mix(s1, s2) {

    let map1 = {};
    let map2 = {};
    let startChar = 'a'.charCodeAt(0);
    let endChar = 'z'.charCodeAt(0);
    for (let i=0;i<s1.length;i++) {
        let char = s1[i]
        let charCode = char.charCodeAt(0);
        if (charCode >= startChar && charCode <= endChar) {
            if (map1[char]){
                let [key,fr,pos] = map1[char];
                map1[char] = [key, fr +1, pos]
               
            }else{
                map1[char] = [char, 1, i]
            }
           
        }

    }
    for (let i = 0; i < s2.length; i++) {
        let char = s2[i]
        let charCode = char.charCodeAt(0);
        if (charCode >= startChar && charCode <= endChar) {
            if (map2[char]) {
                let [key, fr, pos] = map2[char];
                map2[char] = [key, fr + 1, pos]

            } else {
                map2[char] = [char, 1, i]
            }
        }
    }

    console.log({ map1, map2 })
    let arr1 = []
    let arr2 = []
   
    for (let key in map1) {
        const [char, fr, pos] = map1[key];
        if (fr <= 1) {
            arr1.push([char, 0 , pos])
        } else {
            arr1.push(map1[key])
        }
    }
    for (let key in map2) {
        const [char, fr, pos] = map2[key];
        if (fr <= 1){
            arr2.push([char, 0 , pos] )
        }else{
            arr2.push(map2[key])
        }
      
    }


    //------------
    for (let key in map1) {
        const [char,fr,pos] = map1[key];

       if(!(key in map2)){
           console.log("1-noooo ",char)
           arr2.push([char, 0, pos])
       }
          
    }
    for (let key in map2) {
        const [char, fr, pos] = map2[key];
       
        if (!(key in map1)){
            console.log("2-noooo ",char)
            arr1.push([char, 0, pos])
        }
           
    }

    console.log({arr1,arr2})

    arr1 = arr1.sort((a, b) => {
       // if(a[1] == 0) return -1
        if (a[0].repeat(a[1]) > b[0].repeat(a[1])) return 1
        else if (a[0].repeat(a[1]) < b[0].repeat(a[1])) return -1
        return -1
    })
    arr2 = arr2.sort((a, b) => {
       // if (a[1] == 0) return -1
        if (a[0].repeat(a[1]) > b[0].repeat(a[1])) return 1
        else if (a[0].repeat(a[1]) < b[0].repeat(a[1])) return -1
     return -1
    })

    

    arr1 = arr1.sort((b,a) => b[2] - a[2]).sort((a, b) => b[1] - a[1])
    arr2 = arr2.sort((b,a) => b[2] - a[2]).sort((a, b) => b[1] - a[1])


    console.log({ arr1, arr2 })
    //console.log( JSON.stringify({ arr1, arr2 },2,null))

    let len = Math.max(arr1.length, arr2.length);
    let str = "";
    //    let str1= "1:";
    //    let str2= "2:"
    for (let i = 0; i < len; i++) {
        let [ch1, fr1] = arr1[i] || ['', 0];
        let [ch2, fr2] = arr2[i] || ['', 0];

        if (fr1 > fr2) {
            str += "1:" + ch1.repeat(fr1) + '/'
        }

        if (fr1 < fr2) {
            str += "2:" + ch2.repeat(fr2) + '/'
        }

        if (fr1 == fr2) {
            str += "=:" + ch1.repeat(fr2) + '/'
        }

    }



    return str.slice(0, -1)
}


let output = mix("Are they here","yes, they are here");
let expected = "2:eeeee/2:yy/=:hh/=:rr"

console.log({ output, expected, isValid: (output == expected)})