package com.baraabytes.mobileappws.ui.Dto.request;

public class UserRequestDto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public UserRequestDto() {}
    public UserRequestDto(String firstName, String lastName, String email, String password) {}

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
