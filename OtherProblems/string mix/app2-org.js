


function mix(s1, s2) {

    let map1 = {};
    let map2 = {};
    let startChar = 'a'.charCodeAt(0);
    let endChar = 'z'.charCodeAt(0);
    for (let char of s1) {
        let charCode = char.charCodeAt(0);
        if (charCode >= startChar && charCode <= endChar) {
            map1[char] = map1[char] + 1 || 1
        }

    }
    for (let char of s2) {
        let charCode = char.charCodeAt(0);
        if (charCode >= startChar && charCode <= endChar) {
            map2[char] = map2[char] + 1 || 1
        }
    }

    let arr1 = [];
    let arr2 = [];
    for (let key in map1) {
        arr1.push([key, map1[key]])
    }
    for (let key in map2) {
        //
        arr2.push([key, map2[key]])
    }

    arr1 = arr1.sort((a, b) => {
        if (a[0] > b[0]) return 1
        else if (a[0] < b[0]) return -1
        return 0
    })
    arr2 = arr2.sort((a, b) => {
        if (a[0] > b[0]) return 1
        else if (a[0] < b[0]) return -1
        return 0
    })

    arr1 = arr1.sort((a, b) => b[1] - a[1]).filter(x => x[1] > 1)
    arr2 = arr2.sort((a, b) => b[1] - a[1]).filter(x => x[1] > 1)


    console.log({ arr1, arr2 })

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






/* 
>> INPUT:
looping is fun but dangerous
less dangerous than coding
--------------------------------------
>> OUTPUT:
1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg
--------------------------------------
*/

/*
>> INPUT:
Are they here
yes, they are here
>> OUTPUT:
2:eeeee/2:yy/=:hh/=:rr
*/
