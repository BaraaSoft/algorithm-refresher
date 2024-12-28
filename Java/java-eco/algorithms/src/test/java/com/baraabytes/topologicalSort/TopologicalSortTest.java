package com.baraabytes.topologicalSort;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class TopologicalSortTest {


    @ParameterizedTest
    @MethodSource
    public void testFindCompilationOrder_shouldPass(List<List<Character>> dependencies){
        System.out.println(dependencies);
    }

   public static Stream<Arguments> testFindCompilationOrder_shouldPass(){
        return Stream.of(Arguments.of(
                Arrays.asList( Arrays.asList('A','B'), Arrays.asList('A','C'))
        ));
    }
}
