package com.baraabytes.graph.again;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

public class GraphIsValidTree {

    private class UnionFind {
        public int[] arr;
        public UnionFind(int n) {
            this.arr = new int[n];
            Arrays.fill(arr, -1);
        }

        public int find(int x) {
            int curr = x;
            while (arr[curr] != -1) {
               curr = arr[curr];
            }

            return curr;
        }
        public boolean union(int a, int b) {
            int rootA = find(a);
            int rootB = find(b);



            if ( rootA == rootB) { return false; }
            arr[rootA] = rootB;

            return true;
        }
    }


    public static void main(String[] args) {

        GraphIsValidTree graphIsValidTree = new GraphIsValidTree();

        System.out.println(graphIsValidTree.validTree(5,new int[][]{{0,1},{0,2},{0,3},{1,4}}));
        System.out.println(graphIsValidTree.validTree(3,new int[][]{{1,0},{2,0}}));
        System.out.println(graphIsValidTree.validTree(4,new int[][]{{0,1},{2,3}}));


    }


    public boolean validTree(int n, int[][] edges) {
      UnionFind unionFind = new UnionFind(n);
      for (int[] edge : edges) {
          int a = edge[0];
          int b = edge[1];
          if (!unionFind.union(a, b)) { return false; }
      }



      return Arrays.stream(unionFind.arr).filter(x-> x == -1).count() == 1;
    }

}
