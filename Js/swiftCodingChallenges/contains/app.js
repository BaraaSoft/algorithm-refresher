

const contains = (strOrg, term) => {
    let i = 0, j = 0;
    do {
        if (strOrg[i] != term[j]) {
            i++;
            // Because do-while loop preform before do checking 
            // confirm i<j then reset the j counter 
            if (i < j) j = 0;
            continue;
        } else if (strOrg[i] == term[j]) {
            i++;
            j++;
        }
    } while (i < strOrg.length);

    return j == term.length
}

console.log(contains("Hello, world", "o, w"))

