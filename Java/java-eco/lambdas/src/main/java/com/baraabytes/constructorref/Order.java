package com.baraabytes.constructorref;



public class Order {
   public enum OrderType{
        TAKEAWAY,
        DINEIN
    }
    private int id;
    private String name;
    private OrderType orderType;

    public Order(String name,OrderType orderType) {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public OrderType getOrderType() {
        return orderType;
    }

    public void setOrderType(OrderType orderType) {
        this.orderType = orderType;
    }
}