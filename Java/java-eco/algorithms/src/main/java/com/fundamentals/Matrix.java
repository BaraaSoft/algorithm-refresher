package com.fundamentals;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Matrix {

    public static void main(String[] args){
        List<List<Integer>> matrix = Stream
                .generate(()-> new ArrayList<>( Collections.nCopies(5,0) ))
                .limit(5)
                .collect(Collectors.toList());

        List<List<Integer>> matrix2 = Collections.nCopies(5,new ArrayList<>());

        System.out.println(matrix);
    }
}
