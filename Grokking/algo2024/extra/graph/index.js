const depthFirstPrint = (graph, source) => {
  console.log(source);
  const edges = graph[source];

  for (let node of edges) {
    depthFirstPrint(graph, node);
  }
};

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

//depthFirstPrint(graph, 'a');

const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const node = queue.pop();
    console.log(node);

    for (let edge of graph[node]) {
      queue.unshift(edge);
    }
  }
};

breadthFirstPrint(graph, 'a');
