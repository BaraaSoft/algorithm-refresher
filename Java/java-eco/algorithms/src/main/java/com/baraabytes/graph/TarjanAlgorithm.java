package com.baraabytes.graph;

import java.util.*;

//https://www.youtube.com/watch?v=ZeDNSeilf-Y&ab_channel=Techdose


record Pair<K,V>(K key,V  value){};

public class TarjanAlgorithm {


    public static void main(String[] args){

        TarjanAlgorithm tarjan = new TarjanAlgorithm();
        List<List<Integer>> graph = new ArrayList<>( Collections.nCopies(7,  new ArrayList<>( Arrays.asList(new Integer[7]) ) ));

        graph.get(0).add(1);
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(3).add(4);
        graph.get(4).add(0);
        graph.get(4).add(5);
        graph.get(4).add(6);
        graph.get(5).add(6);
        graph.get(6).add(5);

        //tarjan.tarjan(graph);

        List<Integer> listA = new ArrayList<>(Arrays.asList(1,2));

        System.out.println(listA);

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

class Solution {

    private Map<Integer, List<Integer>> graph;
    private Map<Integer, Integer> rank;
    private Map<Pair<Integer, Integer>, Boolean> connDict;

    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {

        this.formGraph(n, connections);
        this.dfs(0, 0);

        List<List<Integer>> result = new ArrayList<List<Integer>>();
        for (Pair<Integer, Integer> criticalConnection : this.connDict.keySet()) {
            result.add(new ArrayList<Integer>(Arrays.asList(criticalConnection.key(), criticalConnection.value())));
        }

        return result;
    }

    private int dfs(int node, int discoveryRank) {

        // That means this node is already visited. We simply return the rank.
        if (this.rank.get(node) != null) {
            return this.rank.get(node);
        }

        // Update the rank of this node.
        this.rank.put(node, discoveryRank);

        // This is the max we have seen till now. So we start with this instead of INT_MAX or something.
        int minRank = discoveryRank + 1;

        for (Integer neighbor : this.graph.get(node)) {

            // Skip the parent.
            Integer neighRank = this.rank.get(neighbor);
            if (neighRank != null && neighRank == discoveryRank - 1) {
                continue;
            }

            // Recurse on the neighbor.
            int recursiveRank = this.dfs(neighbor, discoveryRank + 1);

            // Step 1, check if this edge needs to be discarded.
            if (recursiveRank <= discoveryRank) {
                int sortedU = Math.min(node, neighbor), sortedV = Math.max(node, neighbor);
                this.connDict.remove(new Pair<Integer, Integer>(sortedU, sortedV));
            }

            // Step 2, update the minRank if needed.
            minRank = Math.min(minRank, recursiveRank);
        }

        return minRank;
    }

    private void formGraph(int n, List<List<Integer>> connections) {

        this.graph = new HashMap<Integer, List<Integer>>();
        this.rank = new HashMap<Integer, Integer>();
        this.connDict = new HashMap<Pair<Integer, Integer>, Boolean>();

        // Default rank for unvisited nodes is "null"
        for (int i = 0; i < n; i++) {
            this.graph.put(i, new ArrayList<Integer>());
            this.rank.put(i, null);
        }

        for (List<Integer> edge : connections) {

            // Bidirectional edges
            int u = edge.get(0), v = edge.get(1);
            this.graph.get(u).add(v);
            this.graph.get(v).add(u);

            int sortedU = Math.min(u, v), sortedV = Math.max(u, v);
            connDict.put(new Pair<Integer, Integer>(sortedU, sortedV), true);
        }
    }
}
