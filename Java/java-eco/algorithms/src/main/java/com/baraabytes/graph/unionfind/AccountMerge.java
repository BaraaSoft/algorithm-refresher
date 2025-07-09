package com.baraabytes.graph.unionfind;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class AccountMerge {

    record AccountPair(String name, SortedSet<String> emails) { }

    public static void main(String[] args) {}

    // accounts: ["John","johnsmith@mail.com","john_newyork@mail.com"]
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, AccountPair> unfoldAccounts = new HashMap<>();
        for (List<String> accountList : accounts) {
            String name = accountList.get(0);
           List<String> emails = accountList.subList(1, accountList.size());
           for(String email : emails) {
               AccountPair accountPair = unfoldAccounts.getOrDefault(email, new AccountPair(name, new TreeSet<>(Comparator.naturalOrder()) {
               }));
               accountPair.emails.addAll(emails);
               unfoldAccounts.put(email, accountPair);
           }
        }

        List<List<String>> nameEmailsMap = new ArrayList<>();

        for(Map.Entry<String, AccountPair> entry : unfoldAccounts.entrySet()) {
            nameEmailsMap.add(Arrays.asList(entry.getKey(), entry.getValue().name));
        }

        return unfoldAccounts.entrySet().stream()
                .map(e ->{
                    List<String> newList = new ArrayList<>();
                    newList.add(e.getValue().name);
                    newList.addAll(e.getValue().emails);
                    return newList;
                })
                .collect(Collectors.toList());

    }
}
