package com.baraabytes.graph.unionfind;

import java.util.HashMap;

public class UnionFind {
    HashMap<Integer, Integer> graph = new HashMap<>();
    public UnionFind() {}

    public Integer find(Integer u) {
        Integer node = u;
        while (graph.getOrDefault(node,-1) != -1) {
            Integer parent = graph.get(node);
            // With path compression
            graph.put(node, parent);
            node = parent;
        }

        return node;
    }

    public boolean union(Integer u, Integer v) {
        Integer uRoot = find(u);
        Integer vRoot = find(v);
        if (uRoot.equals(vRoot)) { return false; }
        graph.put(vRoot, uRoot);

        return true;
    }
}
