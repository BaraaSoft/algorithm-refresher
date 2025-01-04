package com.baraabytes.graph;

import java.util.*;

public class NetworkDelay {

    record Pair<T,E>(T first,E second){}

    public static void main(String[] args){

        NetworkDelay networkDelay = new NetworkDelay();



        System.out.println(
                networkDelay.networkDelayTime(
                        new int[][]{
                                new int[]{2,1,1},
                                new int[]{2,3,1},
                                new int[]{3,4,1}
                        },4,2
                )
        );

        System.out.println(
                networkDelay.networkDelayTime(
                        new int[][]{
                                new int[]{1,2,1},
                                new int[]{2,3,2},
                                new int[]{1,3,2}
                        },3,1
                )
        );

        System.out.println(
                networkDelay.networkDelayTime(
                        new int[][]{
                                new int[]{1,2,1},
                                new int[]{2,3,2},
                                new int[]{1,3,4}
                        },3,1
                )
        );


    }

    public int networkDelayTime(int[][] times, int n, int k) {

        final Map<Integer, List<Integer[]>> graph = new HashMap<>();
        final Queue<Integer[]> queue = new ArrayDeque<>();

        for(int i=1;i<=n;i++){
            graph.putIfAbsent(i,new ArrayList<>());
        }

        for(var connection:times){
            Integer source = connection[0];
            Integer dest = connection[1];
            Integer time = connection[2];

            graph.computeIfAbsent(source,node->new ArrayList<>()).add(new Integer[]{dest,time});
        }

        queue.add(new Integer[]{k,0});

        Integer[] timeArr = new Integer[n+1];
        Arrays.fill(timeArr,Integer.MAX_VALUE);
        timeArr[k] = 0;

        while (!queue.isEmpty()){
            Integer[] curr = queue.remove();
            Integer node = curr[0];

            for(var neighbour:graph.get(node)){
                Integer nSource = neighbour[0];
                Integer nTime = neighbour[1];
                Integer arrivalTime = timeArr[node] + nTime;
                if (arrivalTime <  timeArr[nSource]) {
                    timeArr[nSource]=  arrivalTime;
                    queue.add(neighbour);
                }

            }
        }

        int result = Arrays.stream(timeArr).skip(1).max(Comparator.naturalOrder()).get();
        return  result == Integer.MAX_VALUE? -1:result;

    }
}
