package com.baraabytes.topologicalSort;

import java.util.*;

public class CourseSchedule {
    public static void main(String[] args){

        int[][] prerequisites = {{1,4},{2,4},{3,1},{3,2}};

        CourseSchedule courseSchedule = new CourseSchedule();

        System.out.println(courseSchedule.canFinish(5,prerequisites));

    }

    enum Colors{
        WHITE,
        GREY,
        BLACK
    }

    boolean hasCylce = false;

    public boolean canFinish(int numCourses, int[][] prerequisites) {

        Map<Integer, List<Integer>> graph = new HashMap<>();
        Map<Integer,Colors> colorsMap = new HashMap<>();
        HashSet<Integer> result = new HashSet<>();

        Arrays.stream(prerequisites).forEach(arr->{
            graph.computeIfAbsent(arr[0],k->new ArrayList<>()).add(arr[1]);
            colorsMap.putIfAbsent(arr[0],Colors.WHITE);
            colorsMap.putIfAbsent(arr[1],Colors.WHITE);
        });


        for(Integer node : graph.keySet()){
            if(colorsMap.get(node) == Colors.WHITE) dfs(node,graph,colorsMap,result);
            if (hasCylce) return false;
        }

        return true;
    }

    public void dfs(Integer currNode,Map<Integer, List<Integer>> graph ,Map<Integer,Colors> colorsMap,HashSet<Integer> result){
        if(hasCylce) return;

        colorsMap.put(currNode,Colors.GREY);

        for(Integer neighbour: graph.getOrDefault(currNode,new ArrayList<>())){
            if(colorsMap.get(neighbour) == Colors.WHITE) dfs(neighbour,graph,colorsMap,result);
            else if (colorsMap.get(neighbour) == Colors.GREY) hasCylce = true;
        }

        colorsMap.put(currNode,Colors.BLACK);
        result.add(currNode);
    }


}
