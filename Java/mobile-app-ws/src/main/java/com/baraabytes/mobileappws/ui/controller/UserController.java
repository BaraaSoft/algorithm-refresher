package com.baraabytes.mobileappws.ui.controller;

import com.baraabytes.mobileappws.ui.Dto.request.UserRequestDto;
import com.baraabytes.mobileappws.ui.Dto.response.UserResponseDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {
    @GetMapping
    public String getUser(){
        return "Get User";
    }

    @PostMapping
    public UserResponseDto createUser(@RequestBody UserRequestDto userRequestModel){
        return null;
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
