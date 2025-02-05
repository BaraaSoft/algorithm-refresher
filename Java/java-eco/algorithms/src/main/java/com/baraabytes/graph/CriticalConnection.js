/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {

    const graph = {};

    const result = new Set();
    const rankMap = new Map();

    for(let i=0;i<n;i++){
        graph[i] = [];
        rankMap.set(i,null);
    }
    for(let [a,b] of connections ){
        graph[a] =  graph[a]?? [];
        graph[a].push(b)

        graph[b] =  graph[b]?? [];
        graph[b].push(a)

        const u = Math.min(a,b),v= Math.max(a,b)

        result.add([u,v].toString())

    }




    const dfs = (node,rank)=>{
        if(rankMap.get(node) != null) return rankMap.get(node);
        rankMap.set(node, rank);

        let minRank = rank +1;

        for(let neighbour of graph[node]){

            const neighbourRank = rankMap.get(neighbour);

            if( neighbourRank != null && neighbourRank == rank -1) continue;

            const nextRank = dfs(neighbour,rank+1);

            if(nextRank <= rank ){
                const u = Math.min(node,neighbour),v= Math.max(node,neighbour)
                result.delete([u,v].toString())
            }

            minRank = Math.min(minRank,nextRank)

        }


        return minRank;

    }

    dfs(0,0)

    return  [...result].map(st=> st.split(',').map(num=>+num))

};