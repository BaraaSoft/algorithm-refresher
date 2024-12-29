package com.baraabytes.topologicalSort;

import java.util.*;

public class CompilationOrder {



    public static void main(String[] args){

        CompilationOrder compilationOrder = new CompilationOrder();
       var list = new ArrayList<ArrayList<Character>>() {
            {
                add(new ArrayList<Character>(Arrays.asList('C', 'A')));
                add(new ArrayList<Character>(Arrays.asList('B', 'A')));
                add(new ArrayList<Character>(Arrays.asList('B', 'C')));
                add(new ArrayList<Character>(Arrays.asList('D', 'C')));
                add(new ArrayList<Character>(Arrays.asList('D', 'B')));
                add(new ArrayList<Character>(Arrays.asList('E', 'B')));
                add(new ArrayList<Character>(Arrays.asList('E', 'D')));
            }
        };

        compilationOrder
                .findCompilationOrder(list)
                .forEach(System.out::println);
    }


    enum Colors{
        WHITE,
        GREY,
        BLACK
    }

    private boolean hasCycle = false;

    public List<Character> findCompilationOrder(ArrayList<ArrayList<Character>> dependencies) {
        Map<Character,Colors> colorsMap = new HashMap<>();
        Map<Character,List<Character>> graph = new HashMap<>();
        List<Character> result = new ArrayList<>();
        for(var node : dependencies){
            var order1 = node.get(0);
            var baseOrder = node.get(1);
            graph.computeIfAbsent(order1,k-> new ArrayList<Character>()).add(node.get(1));
            graph.computeIfAbsent(baseOrder,k-> new ArrayList<Character>());
            // color the nodes
            colorsMap.putIfAbsent(order1,Colors.WHITE);
            colorsMap.putIfAbsent(baseOrder,Colors.WHITE);
        }

        for(var node: graph.keySet()){
            if(colorsMap.get(node) == Colors.WHITE) this.dfs(graph,colorsMap,result,node);
        }

        if(this.hasCycle) return  new ArrayList<>();


        return  result;
    }

    private void dfs( Map<Character,List<Character>> graph,Map<Character,Colors> colorsMap, List<Character> result ,Character node){
        if(this.hasCycle) return;
        colorsMap.put(node,Colors.GREY);
        for(var neighbour: graph.get(node)){
            if(colorsMap.get(neighbour) == Colors.WHITE) this.dfs(graph,colorsMap,result,neighbour);
            else if(colorsMap.get(neighbour) == Colors.BLACK){
                // There is cycle
                this.hasCycle = true;
            }
        }

        colorsMap.put(node,Colors.BLACK);
        result.add(node);
    }


}
