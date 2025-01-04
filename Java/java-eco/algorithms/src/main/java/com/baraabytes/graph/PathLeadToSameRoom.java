package com.baraabytes.graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

/***
 * [<a href="https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/description/">Question</a>]
 ***/
public class PathLeadToSameRoom {

    public static void main(String[] args){
        PathLeadToSameRoom pathLeadToSameRoom= new PathLeadToSameRoom();

        System.out.println(
                pathLeadToSameRoom.numberOfPaths(
                        5,
                        new int[][]{
                                new int[]{1,2},
                                new int[]{5,2},
                                new int[]{4,1},
                                new int[]{2,4},
                                new int[]{3,1},
                                new int[]{3,4}
                        }
                )
        );
    }

    enum  Colors{
        WHITE,
        GREY,
        BLACK
    }


    public int numberOfPaths(int n, int[][] corridors) {
        HashMap<Integer, List<Integer>> graph = new HashMap<>();
        HashMap<Integer,Colors> colorMap = new HashMap<>();
        HashSet<String> path = new HashSet<>();

        for(var pairNode : corridors){
            int from = pairNode[0];
            int to= pairNode[1];
            graph.computeIfAbsent(from,k->new ArrayList<>()).add(to);
            graph.computeIfAbsent(to,k->new ArrayList<>()).add(from);

            colorMap.putIfAbsent(from,Colors.WHITE);
            colorMap.putIfAbsent(to,Colors.WHITE);
        }

        System.out.println(path);
        return  0;

    }




}
