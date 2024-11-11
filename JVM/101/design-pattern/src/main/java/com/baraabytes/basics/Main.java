package com.baraabytes.basics;

import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        List<String> strList = Collections.nCopies(2, "Baraa");
        System.out.println(String.join(" ", strList));

    }
}