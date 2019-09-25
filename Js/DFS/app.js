
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
//let visited = [];
const algo = (nodenum, visited = []) => {

    if (!visited[nodenum]) {
        visited[nodenum] = 1
        console.log(nodenum);
        for (const [key, value] of Object.entries(graph[nodenum])) {
            if (value == 1) {
                algo(key, visited)
            }
        }
    }


}


algo(7);