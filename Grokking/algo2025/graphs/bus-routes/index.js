
// 815. Bus Routes

var numBusesToDestination = function(routes, source, target) {
     if(source == target) return 0;
    const stationRouteGraph = {}

    for(let i=0;i<routes.length;i++){
        const route = routes[i];

        for(let station of route){
            stationRouteGraph[station] = [...stationRouteGraph[station]??[],i]
        }
    }


    const queue = new Que()
    const visited = new Set();
    queue.enqueue([source,0])

   
    while(queue.size >0){
        const [currStation,numOfStop] = queue.dequeue();
        if(stationRouteGraph[currStation] === undefined ) return -1

        if(currStation === target) return numOfStop;
        for(let route of stationRouteGraph[currStation]){
            if(visited.has(route))continue;
            for(let station of routes[route] ){
                queue.enqueue([station,numOfStop+1])
            }
            visited.add(route)
        }
    }

    return -1;
    
};