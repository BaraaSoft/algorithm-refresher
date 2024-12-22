package com.course.junittest.parta;

import com.course.junittest.parta.Calculator;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static java.util.Arrays.stream;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Test arithmetics operations in Calculator class")
public class CalculatorTest {

    Calculator calculator;

    @BeforeAll
    public static void setup(){
        System.out.println("Running Calculator setup - Before all methods");
    };
    @AfterAll
    public static void cleanup(){
        System.out.println("Running Calculator cleanup - After all methods");
    }

    @BeforeEach
    public void beforeEach(){
        calculator = new Calculator();
    }

    @DisplayName("test 4/2 == 2")
    @Test
    public void testIntegerDivision_WhenFourDividedByTwo_shouldReturnTwo() {
        assertEquals(2,calculator.integerDivision(4,2),()-> "Did not produce the expected result");
    }

    @DisplayName("test 4/0 throws exception")
    @Test
    public void testIntegerDivision_whenDividedByZero_shouldThrowException() {
      ArithmeticException actualException =  assertThrows(ArithmeticException.class, () -> calculator.integerDivision(4,0));
      assertEquals("/ by zero", actualException.getMessage());
    }

    @DisplayName("test interest rate over one year")
    @ParameterizedTest
    @MethodSource
    public void testInterestRateCalculation_whenCalculateAnnualInterest_shouldReturnInterestRate(double principle, double rate, double years, double expectedResult) {
        double actualResult = this.calculator.calculateInterest(principle,rate,years);
        assertEquals(expectedResult,actualResult,()-> "Calculate: interestRate:"+ principle +" rate:"+rate+" != "+expectedResult);
    }

    @DisplayName("test interest rate over two years")
    @ParameterizedTest
    @CsvSource({"1000, 0.1000, 2, 210"})
    public void testCalculateInterestRate_whenPeriodOverTwoYears_shouldReturnInterestRate(double principle, double rate, double years, double expectedResult) {
        double actualResult = this.calculator.calculateInterest(principle,rate,years);
        assertTrue(Math.abs(actualResult-expectedResult) < 0.000_001);
    }

    public static Stream<Arguments> testInterestRateCalculation_whenCalculateAnnualInterest_shouldReturnInterestRate() {
        return Stream.of(
                Arguments.of(10000,0.05,1,500),
                Arguments.of(10000,0.08,1,800),
                Arguments.of(10000,0.1,1,1000)
        );
    }
}
