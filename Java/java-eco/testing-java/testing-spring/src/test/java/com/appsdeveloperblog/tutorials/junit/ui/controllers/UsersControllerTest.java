package com.appsdeveloperblog.tutorials.junit.ui.controllers;


import com.appsdeveloperblog.tutorials.junit.service.UsersService;
import com.appsdeveloperblog.tutorials.junit.service.UsersServiceImpl;
import com.appsdeveloperblog.tutorials.junit.shared.UserDto;
import com.appsdeveloperblog.tutorials.junit.ui.request.UserDetailsRequestModel;
import com.appsdeveloperblog.tutorials.junit.ui.response.UserRest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@WebMvcTest(
        controllers = UsersController.class,
        excludeAutoConfiguration = {SecurityAutoConfiguration.class}
)
@MockBean(classes = {UsersServiceImpl.class})
public class UsersControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UsersService usersService;

    @DisplayName("Create user")
    @Test
    void testCreateUser_whenValidUserProvided_shouldReturnCreateUserDetails() throws Exception {
        // Arrange
        UserDetailsRequestModel userDetailsRequestModel = new UserDetailsRequestModel();
        userDetailsRequestModel.setFirstName("Baraa");
        userDetailsRequestModel.setLastName("Mirghani");
        userDetailsRequestModel.setEmail("baraa@me.com");
        userDetailsRequestModel.setPassword("12345678");
        userDetailsRequestModel.setRepeatPassword("12345678");

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/users")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(userDetailsRequestModel));


        UserDto userDto = new ModelMapper().map(userDetailsRequestModel,UserDto.class);
        userDto.setUserId(UUID.randomUUID().toString());
        when(usersService.createUser(any(UserDto.class))).thenReturn(userDto);

        // Act
        MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
        String responseContent = mvcResult.getResponse().getContentAsString();
        UserRest userResponse = new ObjectMapper().readValue(responseContent, UserRest.class);

        // Assert
        assertEquals(userDetailsRequestModel.getFirstName(),userResponse.getFirstName());
        assertEquals(userDetailsRequestModel.getEmail(),userResponse.getEmail(),"The return email is incorrect");
        assertFalse(userResponse.getUserId().isEmpty(),"userId should not be empty");
    }
}
