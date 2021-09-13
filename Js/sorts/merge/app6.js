


const merge = (arrA,arrB)=>{
    const lenA = arrA.length
    const lenB = arrB.length
    let arr = [];
    let i=0,j=0,k = 0;

    while(i < lenA && j < lenB ){
        if(arrA[i]<arrB[j])
            arr[k++] = arrA[i++]
        else
            arr[k++] = arrB[j++]
    }

    for (; i < lenA;)  arr[k++] = arrA[i++];
    for (; j < lenB;)  arr[k++] = arrB[j++];

    return arr;

}


