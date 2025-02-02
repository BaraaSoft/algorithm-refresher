package com.fundamentals;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Sorting {
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


        String str = "sss";
        char[] arr = str.toCharArray();

        System.out.println(String.valueOf(arr));

        int[] nums = new int[]{1,3,5,7};
        List<Integer> listNum = Arrays.stream(nums).boxed().toList();
        int[] convertBack = listNum.stream().mapToInt(x->(int)x).toArray();



        /*
            Sorting arrays:


            Collections.sort(list, Collections.reverseOrder());
            Arrays.sort(array, Collections.reverseOrder());

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


            String join:
            String[] array = new String[] { "a", "b", "c" };
            String joined2 = String.join(",", array);

            List<String> list = Arrays.asList(array);
            String joined3 = String.join(",", list);


         */

    }
}
