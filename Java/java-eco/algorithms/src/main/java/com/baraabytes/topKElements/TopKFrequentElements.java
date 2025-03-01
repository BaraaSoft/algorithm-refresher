package com.baraabytes.topKElements;

import java.util.*;

public class TopKFrequentElements {

    public static void main(String[] args) {


    }

    public List<Integer> topKFrequent(int[] arr, int k) {

        PriorityQueue<Integer[]> queue = new PriorityQueue<>((a,b)->Integer.compare(b[1],a[1]));
        Map<Integer,Integer> frequency = new HashMap<>();

        List<Integer> result = new ArrayList<>();

        Arrays.stream(arr).forEach((num)->{
            frequency.putIfAbsent(num,0);
            frequency.put(num ,frequency.get(num) +1);
        });


        for(var key:frequency.keySet()){
            queue.offer(new Integer[]{key,frequency.get(key)});
        }

        while (k >0 && !queue.isEmpty()){
            result.add(queue.poll()[0]);
            k--;
        }


        return result;
    }
}
