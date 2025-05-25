package com.baraabytes.graph.again;

import java.util.*;


public class NetworkDelayTwo{


    public record Pair(int node, int time){};

    public static void main(String[] args){

        NetworkDelayTwo networkDelayTwo = new NetworkDelayTwo();

        int res = networkDelayTwo.networkDelayTime(
                new int[][]{{2,1,1},{2,3,1},{3,4,1}},
                4,
                2
        );

        System.out.println(res);

        res = networkDelayTwo.networkDelayTime(
                new int[][]{{1,2,5},{1,3,10},{1,4,15}},
                4 , 1
        );
        System.out.println(res);

    }


    public int networkDelayTime(int[][] times, int n, int k) {

        HashMap<Integer,ArrayList<Pair>> graph = new HashMap<>();
        HashSet<Integer> visited = new HashSet<>();

        for(int i = 1;i <= n;i++){
            graph.putIfAbsent(i,new ArrayList<>());
        }

        for(int i = 0; i < times.length; i++) {
            if(!graph.containsKey(times[i][0]))continue;
            graph.get(times[i][0]).add(new Pair(times[i][1], times[i][2]));
        }

        PriorityQueue<Integer[]> queue = new PriorityQueue<>((a,b)->a[1].compareTo(b[1]));

        queue.offer(new Integer[]{k,0});


        int totalDelay = 0;

        while (!queue.isEmpty()){
            Integer[] theCurrNode = queue.poll();
            int currNode = theCurrNode[0];
            int currTime = theCurrNode[1];

            if(visited.contains(currNode)) continue;
            visited.add(currNode);

            totalDelay = Math.max(totalDelay,currTime);
            for(var pair : graph.getOrDefault(currNode,new ArrayList<>())){
                int node = pair.node;
                int time = pair.time;
//                if(!visited.contains(node)){
                    int newTime = time + currTime;
                    queue.offer(new Integer[]{node,newTime});
//                }

            }
        }


        if(visited.size() != n) return -1;

        return totalDelay;
    }
}