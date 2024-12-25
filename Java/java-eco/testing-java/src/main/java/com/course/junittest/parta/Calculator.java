package com.course.junittest.parta;

public class Calculator {
    public int integerDivision(int dividend, int divisor) {
        return dividend / divisor;
    }

    public double calculateInterest(double principal, double interestRate,double period) {
        // Formula: ((P*(1+i)^n) - P)
        return (principal *  Math.pow((1+interestRate),period)) -  principal;
    }

}
