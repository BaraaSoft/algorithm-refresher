


const rmDuplicate = (orgStr) => {
    const result = [];

    for (const char of orgStr) {

        if (result.indexOf(char) == -1) {
            result.push(char)
        }
    }

    return result.join('')

}


console.log(rmDuplicate("wombat"))