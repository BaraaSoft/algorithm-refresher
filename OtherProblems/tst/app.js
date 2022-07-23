const Heap = require("collections/heap");

// let str = "ello";

// let code  = str.charCodeAt(0);
// let hex = (code & 0xff ).toString(16)
// console.log( parseInt('048',16))

// console.log(parseInt('082',16))

//---------------------------------------------------------------------------

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

var encode = function (strs) {
  let list = [];
  for (let str of strs) {
    list.push(string2Bin(str));
  }
  console.log(list);
  return "";
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

function string2Bin(str) {
  var result = [d2h(str.length)];
  for (var i = 0; i < str.length; i++) {
    result.push(d2h(str.charCodeAt(i)));
  }
  return result;
}

function bin2String(array) {
  return String.fromCharCode.apply(String, array);
}

function d2h(d) {
  var h = d.toString(16);
  if (h.length === 1) {
    return "00" + h;
  } else if (h.length === 2) {
    return "0" + h;
  }
  return h;
}

// Bianry search

const search = (arr, item) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == item) {
      return mid;
    } else if (arr[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

// Kruskal

// const edges = [
//     [1, 2, 25],
//     [1, 6, 5],
//     [2, 3, 12],
//     [2, 7, 10],
//     [3, 4, 8],
//     [4, 5, 16],
//     [4, 7, 14],
//     [5, 6, 20],
//     [5, 7, 18]
// ]

class DSU {
  constructor(size) {
    this.arr = new Array(size).fill(-1);
  }

  find(u) {
    let x = u;
    let arr = this.arr;
    while (arr[x] > 0) {
      x = arr[x];
    }
    while (x != u) {
      [arr[u], u] = [x, arr[u]];
    }
    return x;
  }

  union(u, v) {
    let arr = this.arr;
    if (arr[u] < arr[v]) {
      arr[u] += arr[v];
      arr[v] = u;
    } else {
      arr[v] += arr[u];
      arr[u] = v;
    }
  }
}

//

class TopologicalSort {
  visited = {};
  stack = [];
  graph = {};
  constructor(graph) {
    this.graph = graph;
  }
  init() {
    for (let [key, val] of Object.entries(this.graph)) {
      if (!this.visited[key]) {
        this.traverse(key);
      }
    }
    return this;
  }
  traverse(node) {
    this.visited[node] = true;
    for (let n of this.graph[node]) {
      if (!this.visited[n]) this.traverse(n);
    }
    this.stack.push(node);
  }
}

const isNoCycle = (node, graph, set = new Set()) => {
  if (set.has(node)) return false;
  if (!graph[node]) return true;
  set.add(node);
  for (let n of graph[node]) {
    if (!isNoCycle(n, graph, set)) return false;
  }
  set.delete(node);
  delete graph[node];
  return true;
};

function create(edges) {
  let map = {};
  for (let [start, end] of edges) {
    if (!map[start]) map[start] = [];
    if (!map[end]) map[end] = [];
    map[start].push(end);
  }
  return map;
}

let edges = [
  ["a", "c"],
  ["a", "b"],
  ["c", "d"],
  ["c", "b"],
  ["b", "d"],
];

let graph = create(edges);
//console.log(graph)

let topOrd = new TopologicalSort(graph);
//console.log(topOrd.stack.reverse());

const dfs = (node, map, visited = new Set()) => {
  if (visited.has(node)) return false;
  if (!map[node]) return true;

  visited.add(node);
  for (let n of map[node]) {
    if (!dfs(n, map, visited)) return false;
  }
  visited.delete(n);
  delete map[node];
  return true;
};

const noCycleDfs = (node, map, visited = new Set()) => {
  if (visited.has(node)) return false;
  if (!map[node]) return true;
  visited.add(node);
  for (let n of map[node]) {
    if (!noCycleDfs(n, map, visited)) return false;
  }
  visited.delete(node);
  delete map[node];
  return true;
};

// const solve = (arr,k)=>{

//     const heap = new Heapz([],null,(a,b)=>a[1]-b[1])
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         let val =  map.get(arr[i]) + 1 || 1;
//         map.set(arr[i],val)
//     }
//     console.log({map})
//     for(let i=0;i<k;i++){
//         heap.push([arr[i],map.get(arr[i])])
//     }
//     for(let i=k;i<arr.length;i++){
//         let curr = map.get(arr[i])
//         if(curr > heap.peek()[1] ){
//             heap.pop()
//             heap.push([arr[i],curr])
//         }
//     }
//     console.log({heap:heap.arr})
//     return heap.arr.map((x)=>x[0])
// }

class Heapz {
  constructor(arr, val, func) {
    this.compare = func;
    this.arr = arr;
  }
  push(item) {
    this.arr.push(item);
    this.arr.sort(this.compare);
  }
  pop() {
    let num = this.arr.shift();
    this.arr.sort(this.compare);
    return num;
  }
  peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

class Edge {
  constructor(weight, start, end) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

class Vertex {
  constructor(name) {
    this.name = name;
    this.edges = [];
    this.visited = false;
    this.distance = Number.MAX_VALUE;
    this.predecessor = null;
  }
}

class Dijstra {
  computePath(source) {
    source.distance = 0;
    const heap = new Heapz([], null, (a, b) => a.distance - b.distance);
    heap.push(source);
    while (heap.length > 0) {
      let currVertex = heap.pop();
      for (let edge of currVertex.edges) {
        let end = edge.end;
        let distance = currVertex.distance + edge.weight;
        if (distance < end.distance) {
          heap.arr = heap.arr.filter((x) => x.name != end.name);
          end.distance = distance;
          end.predecessor = currVertex;
          heap.push(end);
        }
      }
    }
  }

  getShortestPathTo(targetVertex) {
    let path = [];
    let curr = targetVertex;
    while (curr != null) {
      path.push(curr);
      curr = curr.predecessor;
    }
    return path.reverse();
  }
}

const solveDik = () => {
  let vertex0 = new Vertex("A");
  let vertex1 = new Vertex("B");
  let vertex2 = new Vertex("C");
  let vertex3 = new Vertex("D");
  let vertex4 = new Vertex("E");
  let vertex5 = new Vertex("F");
  let vertex6 = new Vertex("G");
  let vertex7 = new Vertex("H");

  vertex0.edges = [
    new Edge(5, vertex0, vertex1),
    new Edge(9, vertex0, vertex4),
    new Edge(8, vertex0, vertex7),
  ];
  vertex1.edges = [
    new Edge(12, vertex1, vertex2),
    new Edge(15, vertex1, vertex3),
    new Edge(4, vertex1, vertex7),
  ];
  vertex2.edges = [
    new Edge(3, vertex2, vertex3),
    new Edge(11, vertex2, vertex6),
  ];
  vertex3.edges = [new Edge(9, vertex3, vertex6)];

  vertex4.edges = [
    new Edge(4, vertex4, vertex5),
    new Edge(20, vertex4, vertex6),
    new Edge(5, vertex4, vertex7),
  ];
  vertex5.edges = [
    new Edge(1, vertex5, vertex2),
    new Edge(13, vertex5, vertex7),
  ];

  vertex7.edges = [
    new Edge(7, vertex7, vertex2),
    new Edge(6, vertex7, vertex5),
  ];

  const dijkstra = new Dijstra();
  dijkstra.computePath(vertex0);
  console.log(dijkstra.getShortestPathTo(vertex6).map((x) => x.name));
};

const solveAllPaths = () => {
  const graph = {
    a: ["b"],
    b: ["d", "c"],
    c: ["d"],
  };
  let destination = "d";
  let res = [];

  const dfs = (node, dist, path = []) => {
    if (node == dist) {
      res.push([...path]);
      return true;
    }
    if (!graph[node]) return false;
    for (let n of graph[node]) {
      path.push(n);
      dfs(n, dist, path);
      path.pop();
    }
  };

  dfs("a", destination);
  console.log(res);
};

class DisjointSet {
  constructor(size) {
    this.arr = Array(size);
    for (let i = 0; i <= size; i++) {
      this.arr[i] = i;
    }
  }

  find(x) {
    return this.arr[x];
  }

  union(x, y) {
    let nodeX = this.find(x);
    let nodeY = this.find(y);
    if (nodeX != nodeY) {
      for (let i = 0; i <= this.arr.length; i++) {
        if (this.arr[i] == nodeY) {
          this.arr[i] = nodeX;
        }
      }
    }
  }
}

const solve1293 = (intervals, newInterval) => {
  let i = 0,
    merged = [];
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && newInterval[1] > intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  merged.push(newInterval);
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

// console.log(solve())

function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  let water = K;
  let cups = 0;

  // water -= N;
  for (let i = N; i >= 1; i--) {
    if (water <= 0) break;
    if (i > water) continue;
    else {
      cups++;
      water -= i;
    }
  }

  console.log({ cups, water });
}

// ------------------------------------

const solve1204 = (arr) => {
  console.log("start");
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let start = i + 1,
      end = arr.length - 1;
    let target = -num;
    while (start < end) {
      let sum = arr[start] + arr[end];

      if (sum == target) {
        res.push([num, arr[start], arr[end]]);
        start++;
        end--;
        // while (start <end && arr[start] == arr[start-1]) start++;
        // while(start <end && arr[end] == arr[end+1]) end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }

  console.log(res);

  return res;
};

// solve1204( [-3, 0, 1, 2, -1, 1, -2])

// const main2 = (arr,k)=>{
//   let map = {};
//   let res = [];
//   for(let i=0;i<arr.length;i++){
//     let num1 = arr[i];
//     let target = k + num1;
//     map[target] = num1;
//   }

//   for(let j=0;j<arr.length;j++){

//     if(map[ arr[j] ] || map[ arr[j] ] == 0 ){
//       res.push([ arr[j],map[ arr[j] ] ])
//     }

//   }
//   return res;
// }

// console.log(main2([1, -2, 7, 0, -1, 2, 9],1))

// const solveIt = (arr,k)=>{
//     let map = {}
//     let start = 0;
//     let maxLen = 0;
//     for(let end=0;end < arr.length;end++){
//         let char = arr[end];
//         map[char] = map[char] +1 || 1;

//         while( Object.keys(map).length > k){
//             let startChar = arr[start]
//             if(map[startChar] > 1){
//                 map[startChar]--;
//             }else{
//                 delete map[startChar];
//             }
//             start++;
//         }

//         maxLen = Math.max(end - start +1,maxLen)

//     }
//     return maxLen
// }

// console.log(solveIt("araaci",2))

const solveit0715 = (fruit) => {
  let map = {};
  let j = 0,
    len = 0;

  for (let i = 0; i < fruit.length; i++) {
    let char = fruit[i];
    map[char] = map[char] ? map[char] + 1 : 1;
    while (Object.keys(map).length > 2) {
      let lchar = fruit[j++];
      if (map[lchar] == 1) {
        delete map[lchar];
      } else {
        map[lchar]--;
      }
    }
    len = Math.max(len, i - j + 1);
  }

  return len;
};

// console.log(solveit0715(["A", "B", "C", "A", "C"]));
// console.log(solveit0715(["A", "B", "C", "B", "B", "C"]));

const solveit0715b = (arr, target) => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == target) return [i, j];
    else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return -1;
};

// console.log(solveit0715b([1, 2, 3, 4, 6], 6));
// console.log(solveit0715b([2, 5, 9, 11], 11));

const solveit0715c = (arr) => {
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end++;
    }
  }

  return end;
};

// console.log(solveit([1, 2, 4, 6, 6, 6, 7, 9, 9, 10]));

const solveit0715d = (arr, key) => {
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != key) {
      [arr[end], arr[i]] = [arr[i], arr[end]];
      end++;
    }
  }
  return end;
};

//console.log(solveit([3, 2, 3, 6, 3, 10, 9, 3], 3));

const solveit0717a = (arr) => {
  let i = 0,
    j = arr.length - 1;
  let res = [];
  let k = 0;
  while (i <= j) {
    let leftVal = arr[i] * arr[i];
    let rightVal = arr[j] * arr[j];

    if (leftVal > rightVal) {
      res[k++] = leftVal;
      i++;
    } else {
      res[k++] = rightVal;
      j--;
    }
  }
  return res;
};

// console.log(solveit([-2, -1, 0, 2, 3]));
// console.log(solveit([-3, -1, 0, 1, 2]));

const solveit0716 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let a = arr[i];
        let b = arr[j];
        let c = arr[k];
        if (a + b + c == 0) {
          res.push([a, b, c]);
        }
      }
    }
  }
  return res;
};

// console.log(solveit0716([-3, 0, 1, 2, -1, 1, -2]));

const solveit = (str) => {
  let keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let bin = "";
  for (let i = 0; i < str.length; i++) {
    bin += str[i].charCodeAt(0).toString(2).padStart(8, 0);
  }
  console.log(bin);
  let res = "";
  for (let i = 0; i < bin.length; i += 6) {
    let chunk = bin.slice(i, i + 6);
    // console.log({ chunk: chunk.padStart(6, 0) });
    let num = parseInt(chunk.padEnd(6, 0), 2);
    res += keyStr[num];
  }

  let data = str;
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");

  console.log("me>> ", res);
  console.log("node>> ", base64data);
};

solveit("DEF");
