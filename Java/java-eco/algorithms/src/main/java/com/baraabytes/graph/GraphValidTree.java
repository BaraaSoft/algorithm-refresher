package com.baraabytes.graph;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class GraphValidTree {

    public static void main (String[] args){

        GraphValidTree graphValidTree = new GraphValidTree();

        System.out.println(
                graphValidTree.validTree(5,new int[][]{
                        new int[]{0,1},
                        new int[]{0,2},
                        new int[]{0,3},
                        new int[]{3,4}
                })
        );

        System.out.println(
                graphValidTree.validTree(5,new int[][]{
                        new int[]{0,1},
                        new int[]{0,2},
                        new int[]{0,3},
                        new int[]{0,4},
                        new int[]{3,4},
                })
        );

        System.out.println(
                graphValidTree.validTree(200,new int[][]{
                })
        );

    }

    enum Colors{
        WHITE, GREY,BLACK
    }

    boolean hasCycle = false;

    public boolean validTree(int n, int[][] edges) {
        if(n <= 1) return true;
        if (edges.length == 0 || edges[0].length == 0) return false;


        HashMap<Integer, List<Integer>> graph = new HashMap<>();
        HashMap<Integer,Colors> colorsMap = new HashMap<>();
        ArrayList<Integer> results = new ArrayList<>();

        Arrays.stream(edges).forEach(edge ->{
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
            colorsMap.put(edge[0], Colors.WHITE);
            colorsMap.put(edge[1], Colors.WHITE);
        });

        this.dfs(graph,colorsMap,results,1);
        if(hasCycle) return false;

        System.out.println(results);

        return results.size() == n;
    }

    void dfs(HashMap<Integer,List<Integer>> graph, HashMap<Integer,Colors> colorsMap, ArrayList<Integer> results ,int node){
        if(hasCycle) return;
        colorsMap.put(node, Colors.GREY);

        for(var neighbour: graph.get(node)){
            if(colorsMap.get(neighbour) == Colors.WHITE) this.dfs(graph, colorsMap, results, neighbour);
            else if(colorsMap.get(neighbour) == Colors.BLACK) this.hasCycle = true;
        }

        colorsMap.put(node, Colors.BLACK);
        results.add(node);
    }
}
