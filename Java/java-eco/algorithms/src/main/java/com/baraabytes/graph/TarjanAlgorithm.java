package com.baraabytes.graph;

import java.util.*;

//https://www.youtube.com/watch?v=ZeDNSeilf-Y&ab_channel=Techdose

public class TarjanAlgorithm {


    public static void main(String[] args){

        TarjanAlgorithm tarjan = new TarjanAlgorithm();
        List<List<Integer>> graph = new ArrayList<>();

        graph.get(0).add(1);
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(3).add(4);
        graph.get(4).add(0);
        graph.get(4).add(5);
        graph.get(4).add(6);
        graph.get(5).add(6);
        graph.get(6).add(5);

        tarjan.tarjan(graph);

    }


    public void tarjan(List<List<Integer>> graph){
        int len = graph.size();
        int time = 0;
        List<Integer> discovery = Collections.nCopies(len,-1);
        List<Integer> lowLink = Collections.nCopies(len,-1);
        List<Integer> stack = new ArrayList<>();
        Set<Integer> existInStack = new HashSet<>();

        for(int i=0;i<len;i++){
            if(discovery.get(i) == -1) this.dfs(i,graph,discovery,lowLink,stack,existInStack,time);
            time++;
        }

    }

    private void dfs(int node,List<List<Integer>> graph,List<Integer> discovery,List<Integer> lowLink,List<Integer> stack,
                     Set<Integer> existInStack,int time){
        existInStack.add(node);
        for(int neighbour: graph.get(node)){

            if(existInStack.contains(neighbour)){

            }

        }
    }
}
