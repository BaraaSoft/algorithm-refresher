package com.baraabytes.mobileappws.ui.controller;

import com.baraabytes.mobileappws.service.user.IUserService;
import com.baraabytes.mobileappws.ui.Dto.request.UserRequestDto;
import com.baraabytes.mobileappws.ui.Dto.response.UserResponseDto;
import com.baraabytes.mobileappws.ui.Dto.shared.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    IUserService userService;

    @GetMapping
    public String getUser(){
        return "Get User";
    }

    @PostMapping
    public UserResponseDto createUser(@RequestBody UserRequestDto userRequestDto){
        if(userService.getUserByEmail(userRequestDto.getEmail()) != null) throw  new RuntimeException("user already exists");
        UserResponseDto userResponseDto = new UserResponseDto();
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userRequestDto, userDto);
        userDto = userService.createUser(userDto);
        BeanUtils.copyProperties(userDto, userResponseDto);

        return userResponseDto;
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
