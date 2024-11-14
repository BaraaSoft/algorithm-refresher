package com.baraabytes.mobileappws.ui.Dto.response;

public class UserResponseDto {
    private String id;
    private String firstName;
    private String lastName;
    private String email;

    public UserResponseDto(String id, String firstName, String lastName, String email) {}

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
