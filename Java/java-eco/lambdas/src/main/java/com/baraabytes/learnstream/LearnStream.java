package com.baraabytes.learnstream;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.stream.Stream;

public class LearnStream {

    public static void main(String args[]){

        LearnStream learnStream = new LearnStream();
        learnStream.fileStream();
        learnStream.listOfDirectories();

    }


    public void fileStream(){
        final String path = "/Users/baraa/DevZone/algorithm-refresher/Java/java-eco/pom.xml";

        try {
            Stream<String> fileLines = Files.lines(Paths.get(path));
            fileLines.forEach(System.out::println);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public void listOfDirectories(){
        final String path = "/Users/baraa/DevZone/algorithm-refresher/Java/java-eco";
        File[] directories = new File(path).listFiles(File::isDirectory);

        Arrays.stream(directories).forEach((dir)-> {
            System.out.println(dir.getPath()+" size: "+dir.length());
        });
    }
}
