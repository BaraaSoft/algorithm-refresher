package com.baraabytes.explore;

import java.util.Comparator;
import java.util.HashMap;
import java.util.SortedSet;
import java.util.TreeSet;


class NumberContainers {
    HashMap<Integer, SortedSet<Integer>> container;
    HashMap<Integer,Integer> map;
    public NumberContainers() {
        this.container = new HashMap<>();
        this.map =  new HashMap<>();
    }

    public void change(int index, int number) {
        if(map.containsKey(index)){
            var oldSet = container.get(map.get(index));

            if(oldSet != null){
                oldSet.remove(index);
                if(oldSet.isEmpty()) container.remove(map.get(index));
            }

        }

        map.put(index, number);
        container.computeIfAbsent(number,k->new TreeSet<>(
                Comparator.naturalOrder()
        )).add(index);
    }

    public int find(int number) {
        if(!container.containsKey(number)) return -1;

        return  this.container.get(number).first();
    }
}