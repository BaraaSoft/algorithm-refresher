package com.baraabytes.graph;

import java.util.*;

public class CloneGraph {

    public class Node {
        int data;
        List<Node> neighbors;

        public Node(int data) {
            this.data = data;
            this.neighbors = new ArrayList<Node>();
        }
    }

    public static void main(String args[]){
        CloneGraph cloneGraph = new CloneGraph();
        cloneGraph.clone(null);
    }

    public Node clone(Node root){


        Node node3 = new Node(3);
        Node node2 = new Node(2);
        Node node1 = new Node(1);

        node1.neighbors =  Arrays.asList(node2,node3);
        node2.neighbors = Arrays.asList(node1,node3);
        node3.neighbors = Arrays.asList(node1,node2);

        HashMap<Node,Node> seen = new HashMap<>();

        return this.dfs(node1,seen);
    };


    public  Node dfs(Node root,HashMap<Node,Node> seen){
        if(root == null) return null;


        Node newNode =  new Node(root.data);
        seen.put(root,newNode);

        for(var neighbour: root.neighbors){
            Node clonedNode = seen.get(neighbour);

            if(clonedNode == null){
                newNode.neighbors.add(this.dfs(neighbour,seen));
            }else {
                newNode.neighbors.add(clonedNode);
            }
        }
        return newNode;
    }
}
