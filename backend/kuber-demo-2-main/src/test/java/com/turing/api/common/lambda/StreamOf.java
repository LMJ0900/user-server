package com.turing.api.common.lambda;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamOf {

    @Test
    public void testSame(){
// Creating an integer array
        int arr[] = { 1, 2, 3, 4, 5 };
        // --------- Using Arrays.stream() ---------
        // to convert int array into Stream
        IntStream intStream = Arrays.stream(arr);
        // Displaying elements in Stream
        intStream.forEach(str -> System.out.print(str + " "));
        // --------- Using Stream.of() ---------
        // to convert int array into Stream
        Stream<int[]> stream = Stream.of(arr);
        // Displaying elements in Stream
        stream.forEach(str -> System.out.print(str + " "));
    }
    //결과 1 2 3 4 5 [I@75f32542
    @Test
    public void testDifferent(){
        int arr[] = { 1, 2, 3, 4, 5 };
        IntStream intStream = Arrays.stream(arr);
        System.out.println("\n --------- Using Arrays.stream() ---------");
        intStream.forEach(str -> System.out.print(str + " "));

        Stream<int[]> stream = Stream.of(arr);
        IntStream intStreamNew = stream.flatMapToInt(Arrays::stream);
        System.out.println("\n --------- Using Stream.of() ---------");
        intStreamNew.forEach(str -> System.out.print(str + " "));
    }
    //결과 12345 12345
}
