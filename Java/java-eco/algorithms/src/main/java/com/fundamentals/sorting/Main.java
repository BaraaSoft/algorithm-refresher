package com.fundamentals.sorting;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee("John", "123");
        Employee e2 = new Employee("Jane", "456");
        Employee e3 = new Employee("Ali", "789");
        Employee e4 = new Employee("Baraa", "234");

        List<Employee> employees = Arrays.asList(e1, e2, e3,e4);
        Collections.sort(employees,Comparator.comparing(Employee::name).reversed());
        System.out.println(employees);

        Employee[] employeeArray = {e1, e2, e3, e4};
        Arrays.stream(employeeArray).sorted(Comparator.comparing(Employee::name).reversed()).forEach(System.out::println);


        /*
            Sorting arrays:

            int[] a2 = IntStream.of(a).sorted().toArray();
            int[] a2 = a.clone();
            Arrays.sort(a2);

            Useful Arrays util:

            Arrays.stream(nums).forEach(System.out::println);
            ---
            String[][] deepArray = new String[][] {{"John", "Mary"}, {"Alice", "Bob"}};
            Arrays.deepToString(deepArray) // [[John, Mary], [Alice, Bob]]
            ---
            String[] array = new String[] {"John", "Mary", "Bob"};
            Arrays.toString(array)


         */

    }
}