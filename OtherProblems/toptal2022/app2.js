
/*

Task Description
A precedence rule is given as "P>E", which means that letter "P" is followed directly by the letter "E". Write a function, given an array of precedence rules, that finds the word represented by the given rules.

Note: Each represented word contains a set of unique characters, i.e. the word does not contain duplicate letters.

Examples:
findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN


findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND


*/

// ["I>N","A>I","P>A","S>P"]
const findWord  = (arr)=>{

    let list =  arr.map(x=>{
        return x.split('>')
    })
    let graph = { }

    for(let [start,end] of list){
        graph[start] = [end]
    }

    let res = []

    // console.log(graph);
     let visited = {}

    for(let start of list){

        let que = [start[0]];
        let word = start[0];
        let visited = {}
    
        while(que.length > 0){
            let node = que.pop();
            if(!graph[node]) break;
            for(let n of graph[node] ){
                if(!visited[n]){
                    que.unshift(n)
                    word +=n;
                    visited[n] = true
                }
                    
            }
        }

        res.push(word)

    }

    // console.log({res})

    res = res.filter(x=> x.length  > arr.length)

   return res[0]


}


const dfs = (graph,path = [])=>{

}


console.log( findWord(["I>N","A>I","P>A","S>P"]) )
console.log(  findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) )
console.log( findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) )
