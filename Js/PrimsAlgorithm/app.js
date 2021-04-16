
const M = Number.MAX_VALUE
const graph = [
    [M, M, M, M, M, M, M, M],
    [M, M, 25, M, M, M, 5, M],
    [M, 25, M, 12, M, M, M, M],
    [M, M, 12, M, 8, M, M, M],
    [M, M, M, 8, M, 16, M, 14],
    [M, M, M, M, 16, M, 20, 18],
    [M, 5, M, M, M, 20, M, M],
    [M, M, 10, M, 14, 18, M, M]

]

function prims(graph) {
    let minVal = Number.MAX_VALUE;
    let u = 0, v = 0;
    let temp = [];
    let visit = [...Array(graph.length).fill(M)]
    for (let i = 1; i < graph.length; i++) {
        for (let j = i; j < graph[0].length; j++) {
            let elm = graph[i][j];
            if (elm < minVal) {
                minVal = elm;
                u = i;
                v = j
            }
        }
    }

    temp.push([u, v]);
    visit[u] = 0;
    visit[v] = 0;

    for (let i = 1; i < visit.length; i++) {
        if (visit[i] == 0) continue;
        if (graph[i][u] < graph[i][v]) {
            visit[i] = u
        } else {
            visit[i] = v
        }
    }

    minVal = Number.MAX_VALUE

    for (let i = 1; i < graph.length; i++) {

        for (let j = 0; j < visit.length; j++) {
            let elm = graph[j][visit[j]];
            if (elm < minVal) {
                minVal = elm
                u = j;
                v = visit[j]
            }
        }

        temp.push([u, v])
        visit[u] = 0
        visit[v] = 0

        for (let j = 1; j < visit.length; j++) {
            if (visit[j] == 0) continue;
            if (graph[j][u] < graph[j][visit[j]]) {
                visit[j] = u
            } else {
                visit[j] = visit[j]
            }
        }
        minVal = Number.MAX_VALUE
    }


    return temp.reduce((acc, curr) => {
        if (!(acc.indexOf(curr[0]) > -1)) {
            acc.push(curr[0])
        }
        if (!(acc.indexOf(curr[1]) > -1)) {
            acc.push(curr[1])
        }

        return acc;
    }, [])
}


console.log(prims(graph))
