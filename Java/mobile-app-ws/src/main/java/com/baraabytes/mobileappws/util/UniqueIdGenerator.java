package com.baraabytes.mobileappws.util;

import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class UniqueIdGenerator {

    private final String alphabet = "MV7RWLvOr91cUbAKxfd83TajuFqX024s5EtwYPhegkmlICNoipQJHDSGnZy6zB_@";
    private final Random random = new SecureRandom();

    public String generate(Integer length) {
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < length; i++) {
            str.append(alphabet.charAt(random.nextInt(alphabet.length())));
        }

        return str.toString();
    }
}
