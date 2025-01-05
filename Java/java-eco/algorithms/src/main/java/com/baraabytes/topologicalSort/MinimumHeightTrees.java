package com.baraabytes.topologicalSort;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;



//  O(n^2) Solution
public class MinimumHeightTrees {



    public static void main(String[] args){
        MinimumHeightTrees minimumHeightTrees = new MinimumHeightTrees();

        System.out.println(
                minimumHeightTrees.findMinHeightTrees(
                        4, new int[][]{
                                new int[]{1,0 },
                                new int[]{1,2},
                                new int[]{1,3}
                        }
                )
        );
        System.out.println(
                minimumHeightTrees.findMinHeightTrees(
                        6, new int[][]{
                                new int[]{3,0 },
                                new int[]{3,1},
                                new int[]{3,2},
                                new int[]{3,4},
                                new int[]{5,4}
                        }
                )
        );




    }



    public record MTree(Integer size,List<Integer> list){}
    enum Colors{
        WHITE,
        GREY,
    }

    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        final Map<Integer,List<Integer>> graph = new HashMap<>();
        final Map<Integer,Colors> colorsMap = new HashMap<>();

        for(var edge: edges){
            graph.computeIfAbsent(edge[0],k->new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1],k->new ArrayList<>()).add(edge[0]);
            colorsMap.putIfAbsent(edge[0],Colors.WHITE);
            colorsMap.putIfAbsent(edge[1],Colors.WHITE);
        }


        List<MTree> smallestTree = new ArrayList<>();
        int smallestTreeSize = Integer.MAX_VALUE;

        for(int i=0;i<n;i++){
            IntStream.range(0,n).forEach(num->colorsMap.put(num,Colors.WHITE));
            List<Integer>[] result = new List[n];
            this.dfs(graph,colorsMap,result,0,i);
            var fileredResult = filter(result);
            if(fileredResult.size() <= smallestTreeSize){
                smallestTreeSize = fileredResult.size();
                smallestTree.add( new MTree(smallestTreeSize, List.copyOf(fileredResult.get(0))));
            }

        }

        final int finalSmallestTreeSize = smallestTreeSize;
        List<Integer> theFinalResult = smallestTree.stream()
                .filter(x->x.size == finalSmallestTreeSize)
                .flatMap(x->x.list.stream()).collect(Collectors.toList());

        return  theFinalResult;
    }

    List<List<Integer>> filter(List<Integer>[] results){
        List<List<Integer>>  newResult = new ArrayList<>();
        for(var arr: results){
            if(arr == null) continue;
            if(arr.isEmpty()) continue;
            newResult.add(arr);
        }
        return  newResult;
    }


    void dfs(Map<Integer,List<Integer>> graph, Map<Integer,Colors> colorsMap, List<Integer>[] result,Integer level,Integer node){
        colorsMap.put(node,Colors.GREY);

        for(var neighbour:graph.getOrDefault(node,new ArrayList<>())){

            if(colorsMap.get(neighbour)==Colors.WHITE) this.dfs(graph,colorsMap,result,level+1,neighbour);
        }

        if(result[level] == null) result[level] = new ArrayList<Integer>();
        result[level].add(node);

    }

}
