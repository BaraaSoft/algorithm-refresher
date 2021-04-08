

const graph = [
    [-1],
    [-1, 0, 1, 1, 1, 0, 0, 0],
    [-1, 1, 0, 1, 0, 0, 0, 0],
    [-1, 1, 1, 0, 0, 1, 0, 0],
    [-1, 1, 0, 0, 0, 1, 0, 0],
    [-1, 0, 0, 1, 1, 0, 1, 1],
    [-1, 0, 0, 0, 0, 1, 0, 0],
    [-1, 0, 0, 0, 0, 1, 0, 0],
];


function dfs(n, graph, visited) {
    if (!visited[n]) {
        console.log(n)
        visited[n] = 1
        for (let i = 0; i < graph[n].length; i++) {
            if (graph[n][i] == 1)
                dfs(i, graph, visited)
        }
    }
}



function bfs(graph, n) {
    let visited = []
    let queue = [n]
    while (queue.length != 0) {
        let node = queue.shift()
        for (let i = 0; i < graph[node].length; i++) {
            if (graph[node][i] == 1) {
                if (!visited[i]) {
                    console.log(i)
                    queue.push(i)
                    visited[i] = 1
                }

            }
        }
    }

}


dfs(1, graph, [])
console.log("-----------")
bfs(graph, 1)