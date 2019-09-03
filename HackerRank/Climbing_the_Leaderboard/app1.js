// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    const scoresSorted = scores.sort(sortDesc);
    console.log(`>> ${scoresSorted}`)
    const result = alice.map((x) => {
        console.log(`\n---->> alice:: ${x} <<----`)
        return scoreRankRec(scoresSorted, x, 0);

    });
    return result;
}


const sortDesc = (a, b) => {
    return (b - a);
}

const scoreRankRec = (scoreArry, score, index, rank = 0) => {

    // Debug:: console.log(`>> index:${index} score:${score} rank:${rank}`)
    console.log(`>> index:${index} score:${score} rank:${rank}`)
    if (score > scoreArry[index]) {
        if (rank) {
            return Math.abs(index - rank) + 1;
        }
        return scoreRankRec(scoreArry, score, index + 1, rank)
    }
    if (score == scoreArry[index]) {
        //console.log(`====>> Equal stack ::: index:${index} score:${score} rank:${rank}`)
        const newIndex = index + 1;
        return scoreRankRec(scoreArry, score, newIndex, rank + 1);
    }

    if (index >= scoreArry.length) return index + rank;
    return scoreRankRec(scoreArry, score, index + 1, rank);
}

// const scoreRankRec = (scoreArry, score, index) => {

//     // Debug:: 
//     console.log(`>> index:${index} score:${score}`)
//     if (score > scoreArry[index]) return index + 1;
//     if (score == scoreArry[index]) scoreRankRec(scoreArry, score, index + 1)
//     if (index >= scoreArry.length) return index;
//     return scoreRankRec(scoreArry, score, index + 1);
// }

const rankCompare = (scoreArry, score, index) => {

}

const rankrec = () => {

}


// const scorez = [100, 90, 90, 80, 75, 60];
// const alice = [50, 65, 77, 90, 102];
//const temp = scoreRankRec(scorez.sort(sortDesc), 90, 0);

const scorez = [100, 90, 90, 90, 80, 80, 75, 60];
const alice = [50, 65, 77, 90, 102, 80];

const temp2 = climbingLeaderboard(scorez, alice);
console.log(temp2);
