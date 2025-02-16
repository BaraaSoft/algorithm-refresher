package com.fundamentals;

import java.nio.charset.StandardCharsets;

public class BytesSize {

    public static void main(String[] args) {
        final String numStr = Long.toString(Long.MAX_VALUE);
        final byte[] numBytes = numStr.getBytes(StandardCharsets.UTF_16);
        System.out.println(numBytes.length);
    }
}
