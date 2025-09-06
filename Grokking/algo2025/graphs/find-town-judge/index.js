// 997. Find the Town Judge


// O(n) Optimized
var findJudge = function(n, trust) {
    if(trust.length ==0 && n ==1) return n

    const hasTrusties = new Set()

    const inDegree =[0];

    for(let[a,b] of trust){
        inDegree[b] = inDegree[b]?++inDegree[b]:1;
        inDegree[a] = inDegree[a]??0;
        hasTrusties.add(a)
    }

   const judge = inDegree.indexOf(n-1);
  

    if(hasTrusties.has(judge))return -1
    return judge ? judge:-1
};






/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (trust.length == 0 && n == 1) return n

    const graph = {};


    for (let [a, b] of trust) {
        graph[a] ||= new Set()
        graph[a].add(b)
        graph[b] ||= null
    }


    const suspectJudgeList = [];

    Object.keys(graph).forEach((person) => {
        if (!graph[person]) suspectJudgeList.push(person);
    })


    if (suspectJudgeList.length > 1) return -1
    const theJudge = +suspectJudgeList.at(0);



    if (!theJudge) return -1

    const isTrusted = Object.values(graph).filter(Boolean)
        .every((trusties) => trusties.has(theJudge))


    return isTrusted ? theJudge : -1
};