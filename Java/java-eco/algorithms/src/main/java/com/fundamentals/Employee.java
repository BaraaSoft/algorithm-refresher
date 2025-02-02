package com.fundamentals;

import java.util.*;

public record Employee(String name, String id){
    public Employee{
        if( name == null || name.isEmpty()){
            throw new IllegalArgumentException();
        }
        id = Objects.requireNonNullElse(id, UUID.randomUUID().toString());
    }
}