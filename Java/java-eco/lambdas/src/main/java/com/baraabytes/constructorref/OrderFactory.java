package com.baraabytes.constructorref;

@FunctionalInterface
public interface OrderFactory{
    Order createOrder(String name, Order.OrderType type);
}
