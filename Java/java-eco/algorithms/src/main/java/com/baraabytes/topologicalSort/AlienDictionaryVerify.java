package com.baraabytes.topologicalSort;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class AlienDictionaryVerify {

    public static void  streamGrouping (String[] words){
                Map<Character, Set<Character>> graph = Stream.of(words)
                .flatMap(x-> x.chars().mapToObj(c-> Character.valueOf((char)c)) )
                .peek(System.out::println)
                .collect(Collectors.groupingBy(Character::charValue, Collectors.mapping(Character::charValue, Collectors.toSet())));
        System.out.println(graph);
    }

    public static void main(String[] args){


    }



}
