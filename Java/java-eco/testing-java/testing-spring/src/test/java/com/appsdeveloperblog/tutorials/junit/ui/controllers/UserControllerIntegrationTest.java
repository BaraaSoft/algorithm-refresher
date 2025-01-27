package com.appsdeveloperblog.tutorials.junit.ui.controllers;

import com.appsdeveloperblog.tutorials.junit.ui.response.UserRest;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

/************  Use with define port
    @SpringBootTest(
            webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT
           // properties = {"server.port=8081"}
    )
    @TestPropertySource(
            locations = "/application-test.properties"
            //properties = {"server.port=8081"}
)
******************/
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
        // properties = {"server.port=8081"}
)
public class UserControllerIntegrationTest {

    @Value("${server.port}")
    private int serverPort;

    @LocalServerPort
    private int localServerPort;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    void contextLoads(){
        System.out.println(">> Testing server start at port: "+localServerPort);
    }
    @Test
    @DisplayName("User can be created")
    void testCreateUser_WhenValidDetailsProvided_returnUserDetails() throws JSONException {
        // Arrange
        JSONObject userDetailsRequestJson = new JSONObject();
        userDetailsRequestJson.put("firstName","Baraa");
        userDetailsRequestJson.put("lastName","Mirghani");
        userDetailsRequestJson.put("email","me@hotmail.com");
        userDetailsRequestJson.put("password","me@hotmail123");
        userDetailsRequestJson.put("repeatPassword","me@hotmail123");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        HttpEntity<String> requestEntity = new HttpEntity<>(userDetailsRequestJson.toString(),headers);

        // Act
        ResponseEntity<UserRest> createdUserResponseEntity = testRestTemplate.postForEntity("/users",requestEntity, UserRest.class);
        UserRest createdUserDetails = createdUserResponseEntity.getBody();

        // Assert

        assertEquals(HttpStatus.OK,createdUserResponseEntity.getStatusCode());
        assertEquals(userDetailsRequestJson.get("firstName"),createdUserDetails.getFirstName());
        assertFalse(createdUserDetails.getUserId().isEmpty());

    }

    @Test
    @DisplayName("GET /users requires JWT")
    void testGetUsers_whenMissingJWT_returns403(){

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        HttpEntity requestEntity = new HttpEntity(null,headers);

       ResponseEntity<List<UserRest>> responseEntity = testRestTemplate.exchange("/users", HttpMethod.GET, requestEntity,
                new ParameterizedTypeReference<List<UserRest>>() {
                });

       assertEquals(HttpStatus.FORBIDDEN,responseEntity.getStatusCode());
    }

}
