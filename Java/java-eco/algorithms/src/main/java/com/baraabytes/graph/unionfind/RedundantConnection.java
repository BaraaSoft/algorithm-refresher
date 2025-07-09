package com.baraabytes.graph.unionfind;

import java.util.Arrays;

public class RedundantConnection {

    public static void main(String[] args) {
        RedundantConnection redundantConnection = new RedundantConnection();
        Arrays.stream(redundantConnection.findRedundantConnection(new int[][]{{1,2},{2,3},{3,4},{3,1}}))
                .forEach(System.out::println);

    }

    public int[] findRedundantConnection(int[][] edges){
        UnionFind unionFind = new UnionFind();
        for(int[] edge : edges){
            int a = edge[0];
            int b = edge[1];
            if(!unionFind.union(a, b)) return new int[]{a,b};
        }

        return new int[]{};
    }
}
