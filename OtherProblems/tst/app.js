


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
        list.push(string2Bin(str))
    }
    console.log(list)
    return ''
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
    var h = (d).toString(16);
    if (h.length === 1) {
        return '00' + h
    } else if (h.length === 2) {
        return '0' + h
    }
    return h
}

// Bianry search


const search = (arr,item)=>{
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        mid = start + Math.floor((end - start) / 2);
        if(arr[mid] == item ){
            return mid
        }else if(arr[mid] > item){
            end = mid -1
        }else{
            start = mid +1
        }
    }

    return -1
}



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
    constructor(size){
        this.arr = new Array(size).fill(-1)
    }
    
    find(u){
        let x = u;
        let arr = this.arr;
        while(arr[x] > 0){
            x = arr[x]
        }
        while(x != u){
            [arr[u],u] = [x,arr[u]]
        }
        return x
    }


    union(u,v){
        let arr = this.arr;
        if(arr[u] < arr[v]){
            arr[u] += arr[v]
            arr[v] = u
        }else{
            arr[v] += arr[u]
            arr[u] = v
        }
    }
}

// 

class TopologicalSort{
   visited = {};
   stack = [];
   graph = {}
   constructor(graph){
       this.graph = graph;
   }
   init(){
       for(let [key,val] of Object.entries(this.graph)){
           if(!this.visited[key]){
               this.traverse(key)
           }
       }
       return this;
   }
   traverse(node){
       this.visited[node] = true;
       for(let n of this.graph[node]){
           if(!this.visited[n])
                this.traverse(n)
       }
       this.stack.push(node)
   }
    
}


const isNoCycle=(node,graph,set= new Set())=>{
    if(set.has(node)) return false;
    if(!graph[node]) return true;
    set.add(node);
    for(let n of graph[node]){
        if(!isNoCycle(n,graph,set)) return false;
    }
    set.delete(node);
    delete graph[node];
    return true;
}

function create(edges){

    let map = {};
    for (let [start, end] of edges) {
        if (!map[start]) map[start] = [];
        if (!map[end]) map[end] = [];
        map[start].push(end);
       
    }
    return map;
}

let edges = [
    ['a','c'],
    ['a','b'],
    ['c','d'],
    ['c','b'],
    ['b','d']
];

let graph = create(edges);
//console.log(graph)

let topOrd = new TopologicalSort(graph);
//console.log(topOrd.stack.reverse());


const dfs = (node,map,visited = new Set())=>{
    if(visited.has(node)) return false;
    if(!map[node]) return true;

    visited.add(node);
    for(let n of map[node]){
        if(!dfs(n,map,visited)) return false;
    }
    visited.delete(n)
    delete map[node];
    return true

}


const noCycleDfs = (node,map,visited= new Set())=>{
    if(visited.has(node)) return false;
    if(!map[node]) return true;
    visited.add(node);
    for(let n of map[node]){
        if(!noCycleDfs(n,map,visited))
            return false
    }
    visited.delete(node)
    delete map[node];
    return true;
}



// 




const solve = (arr,target)=>{

    let product = 1,left = 0;
    let res = [];
    for(let i =0;i<arr.length;i++){
        product *=arr[i];
        while(product >= target && left < arr.length){
            product /= arr[left++]
        }
        let subarr = []
        for(let j = i;j>left-1;j--){
            subarr.unshift(arr[j])
            res.push(subarr)
        }
    }

    return res
}

console.log(solve([2, 5, 3, 10], 30));
console.log(solve([8, 2, 6, 5], 50));

