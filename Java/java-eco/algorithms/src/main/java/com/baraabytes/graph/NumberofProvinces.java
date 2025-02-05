package com.baraabytes.graph;

public class NumberofProvinces {

    public static void main(String[] args){
    }


    public int findCircleNum(int[][] isConnected) {

    }
}


/***************** JS *****************
 **************************************

var findCircleNum = function(isConnected) {

    const graph = {};

    const Colors = Object.freeze({White:1,Grey:2,Black:3});
    const colorMap = new Map();

    const len = isConnected.length;

    for(let i=0;i< len;i++){
        graph[i] = graph[i]??[];
        colorMap.set(i,Colors.White);

        for(let j =0;j<isConnected[i].length;j++){
            const hasConnection = isConnected[i][j];
            if(i == j)continue;
            if(hasConnection)
                graph[i].push(j)
        }
    }

    let hasCycle = false;

    const dfs = (node)=>{
        colorMap.set(node,Colors.Grey);
        for(let neighbour of graph[node]){
            const neighbourColor = colorMap.get(neighbour);
            if(neighbourColor == Colors.White ) dfs(neighbour);
            else if(neighbourColor == Colors.Grey) hasCycle = true;
        }

        colorMap.set(node,Colors.Black);
    }

    let count = 0;

    for(let i=0;i< len;i++){
        const node = i;
        if(colorMap.get(i) == Colors.White){
            dfs(node);
            count++;
            hasCycle = false
        }
    }

   return count;
};

 */