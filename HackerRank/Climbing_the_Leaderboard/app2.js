
// const scorez = [100, 90, 90, 80, 75, 60];
// const alice = [50, 65, 77, 90, 102];
//const temp = scoreRankRec(scorez.sort(sortDesc), 90, 0);


async function climbingLeaderboard(scores, alice) {
    const res = await allranks(scores, alice);
    return res;
}





const allranks = async (boardScores, playerScores) => {
    const res = playerScores.map(async (x) => {
        const retutl = await rankrec(boardScores, x);
        return retutl;
    })



    return new Promise((resolve) => {
        Promise.all(res).then((arr) => {
            resolve(arr);
        })
    });
}


const rankrec = (array, score) => {
    let rank = 0;
    return new Promise((resolve) => {
        loop((current, prev, index) => {
            if (current != prev) {
                rank += 1;
            }
            if (score >= current) {
                if (rank == 0) resolve(rank + 1)
                resolve(rank)
            }

            if (index + 1 == array.length) {
                resolve(rank + 1)
            }

        }, array, 0)

    });
}


const loop = (callback, array, index) => {


    while (!(index >= array.length)) {
        callback(array[index], array[index - 1], index)
        index++;
    }

    return index;
    //loop(callback, array, index + 1);
}




const looprec = (callback, array, index) => {

    if (index >= array.length) {
        return;
    }
    callback(array[index], array[index - 1], index);
    looprec(callback, array, index + 1);
}

const scorez = [100, 90, 90, 80, 75, 60];
const alicez = [50, 65, 77, 90, 102];




(async function main() {
    const scorez = [100, 90, 90, 80, 75, 60];
    const alicez = [50, 65, 77, 90, 102];
    const res = await climbingLeaderboard(scorez, alicez);
    console.log(res);
}())

