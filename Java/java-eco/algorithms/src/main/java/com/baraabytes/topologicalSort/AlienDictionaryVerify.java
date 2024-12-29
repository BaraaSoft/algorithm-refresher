package com.baraabytes.topologicalSort;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class AlienDictionaryVerify {

    public static void main(String[] args){
    }

    enum Colors{
        WHITE,
        GREY,
        BLACK
    }

    boolean hasCycle = false;

    public String find(List<Character> chars){


        return "";
    }
    private void dfs(Map<Character, List<Character>> graph, Map<Character,Colors> colorsMap, List<Character> results,Character node ){
        if(hasCycle) return;
        colorsMap.put(node,Colors.GREY);

        for(var neighbour:graph.getOrDefault( node, new ArrayList<>())){
            if(colorsMap.get(neighbour) == Colors.WHITE) this.dfs(graph,colorsMap,results,neighbour);
            else if (colorsMap.get(neighbour) == Colors.GREY ) this.hasCycle = true;
        }

        colorsMap.put(node,Colors.BLACK);
        results.add(node);
    }


}
