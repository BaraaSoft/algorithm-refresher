package com.lambdas;

import java.lang.instrument.UnmodifiableModuleException;

enum UserType{
    EMPLOYEE,
    CUSTOMER,
}

public class User {
    String name;
    String email;

    UserType userType;

    public User(String name, String email, UserType userType) {
        this.name = name;
        this.email = email;
        this.userType = userType;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

