

const edges = [
    [1,2,25],
    [1,6,5],
    [2,3,12],
    [2,7,10],
    [3,4,8],
    [4,5,16],
    [4,7,14],
    [5,6,20],
    [5,7,18]
]

const union = (u,v,arr)=>{
    if(arr[u] < arr[v]){
        arr[u] += arr[v];
        arr[v] = u
    }else{
        arr[v] += arr[u];
        arr[u] = v
    }
}

const find = (u,arr)=>{
    let x= u;
    while(arr[x] > 0){
        x = arr[x]
    }
    // collapse -> https://www.youtube.com/watch?v=VHRhJWacxis
    while(u != x){
        [arr[u],u] = [x,arr[u]]
    }
    return x;
}



//let max = edges.map(x=> x[0]>1[1]?x[0]:x[1]).sort((a,b)=>b-a)[0];
//console.log({max})


function kruskalMCST(edges){
    edges = edges.sort((a,b)=>b[2]-a[2])
    let spans = [];
    let tree = new Array(8).fill(-1)
    while(edges.length > 0){
        let [a,b,weight] = edges.pop();
        if(find(a,tree) != find(b,tree)){
            spans.push([a,b]);
            union(find(a,tree),find(b,tree),tree);
        }
    }

    return spans;
}

console.log(kruskalMCST(edges))

