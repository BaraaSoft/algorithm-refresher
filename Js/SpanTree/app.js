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
    [BI, BI, 10, BI, 14, 18, BI, BI],//7
];


const alog = (graph) => {
    let nearArry = Array(8).fill(BI);
    const traverseArry = []


    let toExplore = minimumEdge(graph);
    traverseArry.push(toExplore);

    let miniCostTree = [];
    do {

        toExplore = traverseArry.pop();
        miniCostTree.push(toExplore)
        console.log(toExplore)
        nearArry = nearRoutine(toExplore.node, toExplore.edge, graph, nearArry);
        toExplore = minimumConnect(nearArry, graph);
        traverseArry.push(toExplore)

    } while (miniCostTree.length < 6);

    return miniCostTree;

}



const nearRoutine = (vt1, vt2, graph, nearArry) => {
    nearArry[0] = 0;

    nearArry[vt1] = 0;
    nearArry[vt2] = 0;
    console.log(nearArry)
    for (const [key, val] of Object.entries(nearArry)) {
        //if (key != vt1 && key != vt2) nearArry[key] = graph[vt2][key] < graph[vt1][key] ? vt2 : vt1
        if (val != 0) nearArry[key] = graph[key][vt2] < graph[key][vt1] ? vt2 : vt1
    }



    return nearArry;
}


const sum = arr => arr.reduce((accum, current, index) => accum + current, 0);


const minimumEdge = (graph) => {
    let min = { node: 0, edge: 0 }
    for (const [kn, node] of Object.entries(graph)) {
        for (const [ke, edge] of Object.entries(node)) {
            min = graph[kn][ke] < graph[min.node][min.edge] ? { node: +kn, edge: +ke } : min
        }
    }
    return min;
}

const minimumConnect = (nearArry, graph) => {
    const next = nearArry.reduce((accum, current, index) => {
        if (graph[current][index] < graph[index][accum.node]) return { node: +index, edge: +current };
        else return accum;
    }, { node: 0, edge: 0 })

    return next;
}


let arr = [6, 0, 1, 6, 6, 6, 0, 6];

//console.log(minimumConnect(arr, graph));

console.log(alog(graph));
