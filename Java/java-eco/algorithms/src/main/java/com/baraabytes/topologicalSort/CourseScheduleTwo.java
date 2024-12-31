package com.baraabytes.topologicalSort;

import java.util.*;
import java.util.stream.Stream;

public class CourseScheduleTwo {
    enum Colors{
        WHITE,
        GREY,
        BLACK
    }
    boolean hasCycle = false;
    public int[] findOrder(int numCourses, int[][] prerequisites) {

        if(prerequisites.length < 1){
            int[] res = new int[numCourses];
            for(int i=0;i<numCourses;i++){
                res[i] = i;
            }
            return res;
        }

        final Map<Integer, HashSet<Integer>> graph = new HashMap<>();
        Map<Integer,Colors> colorMap = new HashMap<>();
        List<Integer> result = new ArrayList<>();

        for(int i=0;i<numCourses;i++){
            graph.putIfAbsent(i,new HashSet<>());
            colorMap.put(i,Colors.WHITE);
        }


        for(var numPair:prerequisites){
            int numA = numPair[0];
            int numB = numPair[1];

            graph.computeIfAbsent(numA,k->new HashSet<>()).add(numB);
        }

        for(var node: graph.keySet()){
            if(colorMap.get(node) == Colors.WHITE) this.dfs(graph,colorMap,result,node);
        }

        if(hasCycle)return new int[]{};
        return result.stream().mapToInt(x->(int)x).toArray();
    }

    public void dfs(Map<Integer,HashSet<Integer>> graph, Map<Integer,Colors> colorMap,List<Integer> result,int node){
        if(hasCycle) return;

        colorMap.put(node,Colors.GREY);

        for(var neighbour:graph.getOrDefault(node,new HashSet<>())){
            if(colorMap.get(neighbour)== Colors.WHITE) this.dfs(graph,colorMap,result,neighbour);
            else if( colorMap.get(neighbour) == Colors.GREY) this.hasCycle = true;
        }

        colorMap.put(node,Colors.BLACK);
        result.add(node);
    }

    private int[] toArray(List<Integer> arr){
        int[] result= new int[arr.size()];
        for(int i=0;i<arr.size();i++){
            result[i]= (int)arr.get(i);
        }
        return result;
    }

}
