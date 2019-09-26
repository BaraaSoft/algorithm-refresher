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
        nearArry = nearRoutine(toExplore.node, toExplore.edge, graph, nearArry);
        toExplore = minimumConnect(nearArry, graph);
        traverseArry.push(toExplore)

    } while (miniCostTree.length < 6);

    return miniCostTree;
}



const nearRoutine = (vt1, vt2, graph, nearArry) => {
    nearArry[0] = BI;

    nearArry[vt1] = 0;
    nearArry[vt2] = 0;


    for (const [key, val] of Object.entries(nearArry)) {
        let vt;
        if (val != 0) {
            vt = graph[key][vt2] < graph[key][vt1] ? vt2 : vt1
            nearArry[key] = graph[key][nearArry[key]] < graph[key][vt] ? +val : vt;
        }

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
    // const next = nearArry.reduce((accum, current, index) => {
    //     console.log(accum)
    //     if (graph[index][current] < graph[index][accum.node]) return { node: parseInt(index, 10), edge: parseInt(current, 10) };
    //     else return accum;
    // }, { node: 0, edge: 0 });

    let min = { node: 0, edge: 0 };
    for (const [key, val] of Object.entries(nearArry)) {
        min = graph[key][val] < graph[min.node][min.edge] ? { node: +key, edge: +val } : min
    }

    return min;
}





console.log(alog(graph));
