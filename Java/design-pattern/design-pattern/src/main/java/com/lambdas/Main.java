package com.lambdas;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        List<User> users = Arrays.asList(new User("Baraa","x@me.com",UserType.EMPLOYEE),
                new User("Mirghani","mr@io.com",UserType.CUSTOMER),
                new User("McKerthy","mk@io.com",UserType.EMPLOYEE)
                );


       Map<UserType,List<User>> empGroup = users.stream().collect(Collectors.groupingBy(User::getUserType));

       System.out.println(empGroup);
    }
}