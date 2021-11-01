// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    if (prerequisites.length < 1) return true
    let graph = {}
    for (let i = 0; i < prerequisites.length; i++) {
        const [sub, preSub] = prerequisites[i];
        if (!graph[sub]) {
            graph[sub] = []
        }
        graph[sub].push(preSub)
    }

    let memo = {}

    for (let [key, value] of Object.entries(graph)) {
        if (isCyclic(graph, key, [], memo)) {
            return false
        }
    }

    return true



};


const isCyclic = (graph, node, visited = [], memo) => {
    if (node in memo) return memo[node]
    if (visited[node] == true) return true

    let list = graph[node]
    if (!list) return false

    visited[node] = true
    let res = false
    for (let n of list) {
        res = isCyclic(graph, n, visited, memo)
        if (res) {
            break;
        }
    }

    memo[node] = res
    visited[node] = false

    return res

}