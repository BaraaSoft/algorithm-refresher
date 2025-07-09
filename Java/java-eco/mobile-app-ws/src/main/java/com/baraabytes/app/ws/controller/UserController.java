package com.baraabytes.app.ws.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
public class UserController {

    public UserController() {}

    @GetMapping
    public ResponseEntity<String> getUserName() {
        return ResponseEntity.ok("Baraa");
    }
}
