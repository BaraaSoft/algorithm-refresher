
const graph = [
    [-1],
    [-1, 0, 1, 1, 1, 0, 0, 0],
    [-1, 1, 0, 1, 0, 0, 0, 0],
    [-1, 1, 1, 0, 0, 1, 0, 0],
    [-1, 1, 0, 0, 0, 1, 0, 0],
    [-1, 0, 0, 1, 1, 0, 1, 1],
    [-1, 0, 0, 0, 0, 1, 0, 0],
    [-1, 0, 0, 0, 0, 1, 0, 0],
]

const algo = (nodenum) => {
    console.log(nodenum);

    let expStck = [nodenum];
    let visitedArr = [];

    visitedArr[nodenum] = 1;

    while (expStck.length != 0) {

        let [arryIndex, ...rest] = expStck;
        graph[arryIndex].forEach((value, key) => {
            if (visitedArr[key] != 1 && value == 1) {
                console.log(key);
                visitedArr[key] = 1;
                rest.push(key);
            }
        });

        expStck = rest;
    }


}


algo(7);