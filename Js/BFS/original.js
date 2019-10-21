
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

    let vertixToExplore = [];

    const visited = [];
    vertixToExplore.push(nodenum)
    visited[nodenum] = 1;

    console.log(nodenum);
    while (vertixToExplore.length != 0) {
        let [vertixIndex, ...rest] = vertixToExplore;
        vertixToExplore = rest;
        for (const [key, vertix] of Object.entries(graph[vertixIndex])) {
            if ((visited[key] != 1) && vertix == 1) {
                visited[key] = 1;
                console.log(key);
                vertixToExplore.push(key)
            }
        }
    }


}


algo(3);