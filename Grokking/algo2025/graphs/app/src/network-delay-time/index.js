
import { PriorityQueue } from 'datastructures-js';

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {



    const minHeap = new PriorityQueue((a, b) => a[1] - b[1])
    const graph = {}
    for (let [a, b, time] of times) {
        graph[a] ||= []
        graph[a].push([b, time])
    }

    minHeap.enqueue([k, 0]);
    const seen = {}

    while (!minHeap.isEmpty()) {

        const [currNode, currTime] = minHeap.dequeue();

        if (seen[currNode] === undefined && currNode != k) {
            seen[currNode] = Number.MAX_VALUE
        }

        if (currTime < seen[currNode] && currNode != k) {
            seen[currNode] = currTime
        }

        for (let [neighbour, nextTime] of graph[currNode] ?? []) {
            if (nextTime + currTime < (seen[neighbour] ?? Number.MAX_VALUE))
                minHeap.enqueue([neighbour, nextTime + currTime])
        }

    }


    const delayList = Object.values(seen);

    if (delayList.length != n - 1) return -1

    return Math.max(...delayList)
};


















/* Solution A

var networkDelayTime = function(times, n, k) {
    const graph={};

    for(let [u,v,w] of times){
        graph[u] ||= [];
        graph[u].push([v,w])
    };

    const queue =[[k,0]];
    const seen= new Set();
    let delay =0;

    while(queue.length >0){

        const [source,weight] = queue.shift();
        if(seen.has(source)) continue;
        seen.add(source)
        delay = weight;

        for(let [v,w] of graph[source]??[]){
            if(!seen.has(v)){
                queue.push([v,w+weight])
                queue.sort((a,b)=>a.at(1)-b.at(1))
           }
        }

    }

    if(seen.size != n ) return -1

    return delay || -1;
};


*/