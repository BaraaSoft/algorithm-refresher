package com.baraabytes.designpatterns.builder;

import java.util.Collections;
import java.util.List;


public class HtmlElement{

    private String tag;
    private List<HtmlElement> elements;
    private String content;
    private static int Space = 1;



    public HtmlElement(){}
    public HtmlElement(String tag) {
        this.tag = tag;
    }
    public HtmlElement(String tag, String content) {
        this.tag = tag;
        this.content = content;
    }

    private String stringify(int indent,HtmlElement element){
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder
                .append("\n")
                .append(String.join("", Collections.nCopies(indent, " ")))
                .append("<"+element.getTag()+">");

        StringBuilder bodyStringBuilder = new StringBuilder();
        bodyStringBuilder.append(System.lineSeparator());
        if(element.getContent() != null){
            bodyStringBuilder
                    .append(String.join("", Collections.nCopies(indent+1, " ")))
                    .append(element.getContent());
        }
        else{
            for(HtmlElement el:element.getElements()){
                bodyStringBuilder.append(stringify(indent+Space,el));
            }
        }

        stringBuilder.append(bodyStringBuilder.toString());

        stringBuilder
                .append(System.lineSeparator())
                .append(String.join("", Collections.nCopies(indent, " ")))
                .append("<"+element.getTag()+"/>")
                .append(System.lineSeparator());

        return stringBuilder.toString();
    }

    @Override
    public String toString() {
        return this.stringify(1,this);
    }
    public String getTag() {
        return tag;
    }
    public void setTag(String tag) {
        this.tag = tag;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    public List<HtmlElement> getElements() {
        return elements;
    }

    public void setElements(List<HtmlElement> elements) {
        this.elements = elements;
    }

}
