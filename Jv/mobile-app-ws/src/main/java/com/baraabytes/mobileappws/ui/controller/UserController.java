package com.baraabytes.mobileappws.ui.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {
    @GetMapping
    public String getUser(){
        return "Get User";
    }

    @PostMapping
    public  String createUser(){
        return "Create User";
    };

    @PutMapping
    public String updateUser(){
        return "Update User";
    };

    @DeleteMapping
    public String deleteUser(){
        return "Delete User";
    };
}
