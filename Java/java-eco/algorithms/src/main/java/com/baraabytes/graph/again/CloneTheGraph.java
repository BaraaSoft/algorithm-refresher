package com.baraabytes.graph.again;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class CloneTheGraph {

    public static void main(String[] args) {}
    protected class Node {
        public int val;
        public List<Node> neighbors;
        public Node() {
            val = 0;
            neighbors = new ArrayList<Node>();
        }
        public Node(int _val) {
            val = _val;
            neighbors = new ArrayList<Node>();
        }
        public Node(int _val, ArrayList<Node> _neighbors) {
            val = _val;
            neighbors = _neighbors;
        }
    }


    public Node cloneGraph(Node node) {
        HashMap<Node,Node> visited = new HashMap<Node,Node>();
        return clone(node,visited);
    }

    public Node clone(Node node, HashMap<Node,Node> visited) {
        if(node == null) return null;
        if(visited.containsKey(node)) return visited.get(node);

        Node newNode = new Node(node.val);
        visited.put(node, newNode);

        for(Node neighbor : node.neighbors){
           newNode.neighbors.add(clone(neighbor,visited));
        }

        return newNode;
    }


}
