package com.baraabytes.twoPointers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class LowestCommonAncestor {

    class Node {
        public int val;
        public Node left;
        public Node right;
        public Node parent;
    }

    public static void main(String[] args) {
        LowestCommonAncestor lca = new LowestCommonAncestor();

    }

    public Node lowestCommonAncestor(Node p, Node q) {
        Set<Node> nodeSet = new HashSet<>();
        Node nodeQ = q;
        Node nodeP = p;
        while (nodeP != null) {
            nodeSet.add(nodeP);
            nodeP = nodeP.parent;
        }
        while(nodeQ != null){
            if(nodeSet.contains(nodeQ)) return nodeQ;
            if(nodeQ != null) nodeQ = nodeQ.parent;
        }
        return null;
    }

    public Node lca(Node node, Set<Node> nodeSet){
        if(node == null) return null;
        if(nodeSet.contains(node)) return node;

        nodeSet.add(node);

        Node leftnode = lca(node.parent,nodeSet);
        Node rightnode = lca(node.parent,nodeSet);


        return node;
    }



}
