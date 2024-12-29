package com.baraabytes.topologicalSort;

import java.util.*;
import java.util.stream.Collectors;

public class AlienDictionary {

    public static void main(String[] args) {

        AlienDictionary letterOrder = new AlienDictionary();

        System.out.println(letterOrder.order(Arrays.asList(
                "wrt",
                "wrt",
                "er",
                "ett",
                "rftt"
        )));

    }


    enum Colors{
        WHITE,
        GREY,
        BLACK
    }

    private boolean hasCycle = false;

    public String order(List<String> words){

        Map<Character,HashSet<Character>> graph = new HashMap<>();
        List<Character> result = new ArrayList<>();
        Map<Character,Colors> colorsMap = new HashMap<>();

        for (String word : words) {
            for (char c : word.toCharArray()) {
                graph.putIfAbsent(c, new HashSet<>());
                colorsMap.putIfAbsent(c, Colors.WHITE);
            }
        }

        for (int i = 0; i < words.size()-1; i++) {
            String wordA = words.get(i);
            String wordB = words.get(i+1);
            int j=0;

            // Skip if the words are identical
            if (wordA.length() > wordB.length() && wordA.startsWith(wordB)) return "";

            while (j < Math.min(wordA.length(),wordB.length())){
                if(wordA.charAt(j) != wordB.charAt(j)) {
                    graph.computeIfAbsent(wordB.charAt(j),c-> new HashSet<>()).add(wordA.charAt(j));
                    break;
                }
                j++;
            }


        }

        for(var node:graph.keySet()){
            if(colorsMap.get(node) == Colors.WHITE) this.dfs(graph,colorsMap,result,node);
        }

        if(hasCycle) return "";
        return result.stream().map(x->x.toString()).collect(Collectors.joining());
    }

    public void dfs(Map<Character,HashSet<Character>> graph,Map<Character,Colors> colorsMap, List<Character> result, Character node ){
        if(hasCycle) return;

        colorsMap.put(node,Colors.GREY);

        for (var neighbour:graph.getOrDefault(node,new HashSet<>())){
            if(colorsMap.get(neighbour) == Colors.WHITE) this.dfs(graph,colorsMap,result,neighbour);
            else if(colorsMap.get(neighbour) == Colors.GREY) this.hasCycle = true;
        }

        colorsMap.put(node,Colors.BLACK);
        result.add(node);
    }
}
