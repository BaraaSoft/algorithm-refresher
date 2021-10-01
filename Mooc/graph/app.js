

const dfs = (graph,source)=>{
    const arr = graph[source]
    console.log(source);
    for(let val of arr){
        dfs(graph,val)
    }
}


const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

dfs(graph,'a')