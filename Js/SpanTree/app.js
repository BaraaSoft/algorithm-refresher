const BI = Number.MAX_SAFE_INTEGER
const graph = [
    //00  01  02  03  04  05  06  07 
    [BI, BI, BI, BI, BI, BI, BI, BI],//0
    [BI, BI, 25, BI, BI, BI, 05, BI],//1
    [BI, 25, BI, 12, BI, BI, BI, 10],//2
    [BI, BI, 12, BI, 08, BI, BI, BI],//3
    [BI, BI, BI, 08, BI, 16, BI, 14],//4
    [BI, BI, BI, BI, 16, BI, 20, 18],//5
    [BI, 05, BI, BI, BI, 20, BI, BI],//6
    [BI, BI, BI, BI, 14, 18, BI, BI],//7
];


const alog = (graph) => {
    const nearArry = Array(8).fill(BI);
    const NavArry = new Array(8);
}


const nearRoutine = (vt1, vt2, graph, nearArry) => {
    nearArry[vt1] = 0;
    nearArry[vt2] = 0;

    for (const [key, val] of Object.entries(Array(8).fill())) {
        // if ((key != vt1) && (key != vt2)) {
        //     nearArry[key] = graph[vt2][key] <= graph[vt1][key] ? vt2 : vt1
        // }

        if (val != 0) nearArry[key] = graph[vt2][key] <= graph[vt1][key] ? vt2 : vt1
    }

    return nearArry;
}

const minimumConnect = (nearArry, graph) => {
    const next = nearArry.reduce((accum, current, index) => {
        if (graph[index][current] < graph[index][accum.node]) return { node: index, edge: current };
        else return accum;
    }, { node: 0, edge: 0 })

    return next;
}


let arr = [6, 0, 1, 6, 6, 6, 0, 6];

console.log(minimumConnect(arr, graph));
