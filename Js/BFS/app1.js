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

const graph2 = [
    [-1],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0]
]

const solve = (graph, n, width) => {
    let visited = [];
    let queue = [...Array(width).fill(0)];
    let node = n;
    visited[n] = 1;
    queue.push(n);
    console.log(">> ", n)
    let len = graph[1].length;
    while (queue.length != 0) {
        node = queue.pop();
        for (let e = 0; e <= len; e++) {
            if (graph[node][e] == 1) {
                if (!visited[e] && !(queue.indexOf(n) > -1)) {
                    visited[e] = 1
                    queue.push(e)
                    console.log(">> ", e)
                }
            }

        }

    }
}


solve(graph2, 1, 5)