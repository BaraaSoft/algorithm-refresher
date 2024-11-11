package com.baraabytes.designpatterns.builder;

import java.util.Arrays;

public class Main {
     public static void main(String[] args) {
        HtmlElement div1 = new HtmlElement("div","Baraa");
        HtmlElement div2 = new HtmlElement("div");
        div2.setElements(Arrays.asList(new HtmlElement("p","Mirghani"),new HtmlElement("p","Mohamed")));

        HtmlElement liElement = new HtmlElement();
        liElement.setTag("li");
        liElement.setElements(Arrays.asList(div1,div2));

        System.out.println(liElement.toString());
    }

}
