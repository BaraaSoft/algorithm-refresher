

import { PriorityQueue } from 'datastructures-js';




const findShortestPath = () => {

    const queue = new PriorityQueue((a, b) => a - b)


    queue.enqueue(5)
    queue.enqueue(3)
    queue.enqueue(8);

    console.log(queue.front())
}

findShortestPath()

Number.MAX_VALUE