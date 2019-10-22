
// const scorez = [100, 90, 90, 80, 75, 60];
// const alice = [50, 65, 77, 90, 102];
//const temp = scoreRankRec(scorez.sort(sortDesc), 90, 0);


async function climbingLeaderboard(scores, alice) {
    const res = await allranks(scores, alice);
    return res;
}





const allranks = async (boardScores, playerScores) => {
    const res = []

    let start = 0;
    let innerRes;
    for (let value of playerScores) {
        if (start == 0) {
            innerRes = await rankrec(boardScores, value, 0, 0);

        }
        else {

            innerRes = await rankrec(boardScores, value, innerRes.index, innerRes.rank);
        }
        res.push(innerRes)
        start++;
    }



    return new Promise((resolve) => {
        Promise.all(res).then((arr) => {
            resolve(arr);
        })
    });
}


const rankrec = (array, score, startAt, rk = 0) => {
    let rank = rk;
    console.log(`>> startAt ${startAt} rank :${rank}`)
    return new Promise((resolve) => {
        loop((current, prev, index) => {
            if (current != prev) {
                rank += 1;
            }
            if (score >= current) {
                if (rank == 0) resolve({ rank: rank + 1, index })
                resolve({ rank: rank + 1, index })
                return true;
            }

            if (index + 1 == array.length) {
                resolve({ rank: rank + 1, index })
                return true;
            }
            console.log(`>>>>>>>>>>>>>>>>`)
            return false;

        }, array, startAt)

    });
}


const loop = (callback, array, index) => {
    let inc = index;
    let end = false;
    while (!(inc >= array.length) && end == false) {
        end = callback(array[inc], array[inc - 1], inc)
        inc++;
    }
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
    //const alicez = [50, 65, 77, 90, 102].reverse();;
    const alicez = [102, 90, 77, 65, 50]
    const res = await climbingLeaderboard(scorez, alicez);
    console.log(res);
}())

