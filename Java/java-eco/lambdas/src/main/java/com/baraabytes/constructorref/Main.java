package com.baraabytes.constructorref;

public class Main {
    public static void main(String[] args) {
        OrderFactory orderFactory = Order::new;
        orderFactory.createOrder("noodles", Order.OrderType.TAKEAWAY);

    }
}
