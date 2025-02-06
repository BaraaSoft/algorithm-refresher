package com.baraabytes.graph.again;

import java.util.*;

public class NetworkDelay {

    record Pair(Integer node, Integer delay){}

    public static void main(String[] args){
        NetworkDelay networkDelay = new NetworkDelay();
       // [[2,1,1],[2,3,1],[3,4,1]]
        System.out.println( networkDelay.networkDelayTime(
              new int[][]{{2,1,1},{2,3,1},{3,4,1}},
                4,
                2
        ));
    }

    public int networkDelayTime(int[][] times, int n, int k) {
        HashMap<Integer, List<Integer[]>> graph =new HashMap<>();
        PriorityQueue<Integer[]> queue = new PriorityQueue<>((a,b)->Integer.compare(a[1],b[1]));
        HashSet<Integer> visited = new HashSet<>();
        for(int i =1;i<=n;i++){
            graph.put(i,new ArrayList<>());
        }

        for(var point:times){
            int u = point[0];
            int v = point[1];
            int delay = point[2];
            graph.computeIfAbsent(u,key->new ArrayList<>()).add(new Integer[]{v,delay});
        }


        Integer[] nodeDelayArr = new Integer[n+1];
        Arrays.fill(nodeDelayArr,Integer.MAX_VALUE);
        nodeDelayArr[k] =0;
        queue.add(new Integer[]{k,0});

        while (!queue.isEmpty()){
            Integer[] value  = queue.poll();
            Integer node = value[0];
            Integer time = value[1];

            if(visited.contains(node)) continue;

            visited.add(node);

            for(var neighbourValue:  graph.get(node)){
                Integer neighbour = neighbourValue[0];
                Integer delay = neighbourValue[1];
                Integer expectTime =  time+delay;  // nodeDelayArr[node] + delay;

                if(expectTime < nodeDelayArr[neighbour]){
                    queue.offer( new Integer[]{neighbour,expectTime});
                    nodeDelayArr[neighbour] = expectTime;
                }
            }
        }

        int result = Arrays.stream(nodeDelayArr).skip(1).max(Comparator.naturalOrder()).get();

        return  result == Integer.MAX_VALUE? -1:result;

    }





}
