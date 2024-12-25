package com.course.junittest.partb;

import com.course.junittest.partb.model.User;
import com.course.junittest.partb.repository.Repository;
import com.course.junittest.partb.repository.UserRepository;
import com.course.junittest.partb.service.EmailServiceImpl;
import com.course.junittest.partb.service.UserService;
import com.course.junittest.partb.service.UserServiceException;
import com.course.junittest.partb.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@DisplayName("Test UserService functionality")
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

     @InjectMocks
     UserServiceImpl userService;

     @Mock
     UserRepository userRepository;
     @Mock
     EmailServiceImpl<User> emailService;

     User user1;

    @BeforeEach
    public void beforeEach() {
        user1  = new User("Baraa", "baraa@gmail.com");
    }

    @DisplayName("create user test")
    @Test
    public void testCreateUser_whenUserOnValidInput_shouldReturnUserObject() {
        when(userRepository.save(Mockito.any(User.class))).thenReturn(user1);
        User createdUser = userService.addUser(user1);

        assertEquals(user1, createdUser);
        Mockito.verify(userRepository, Mockito.times(1)).save(Mockito.any(User.class));
    }

    @DisplayName("create user test invalid input")
    @Test
    public void testCreateUser_whenUserIsInvalid_shouldThrowUserServiceException() {
        when(userRepository.save(Mockito.any(User.class))).thenReturn(null);

        assertThrows(UserServiceException.class, () -> userService.addUser(user1));
    }

    @DisplayName("update user testing valid input")
    @Test
    public void testUpdateUser_whenInputParametersAreValid_shouldReturnUserObject() {
        User newUser = new User("Mirghani", "mirghani@gmail.com");
        when(userRepository.update(Mockito.anyString(), Mockito.any(User.class))).thenReturn(newUser);

        User updatedUser = userService.updateUser("Baraa", newUser);
        assertEquals(newUser, updatedUser);
        Mockito.verify(userRepository, Mockito.times(1)).update(Mockito.anyString(), Mockito.any(User.class));
    }

    @DisplayName("update user throws userServiceException on runtime error")
    @Test
    public void testUpdateUser_whenRuntimeException_shouldThrowUserServiceException() {
        when(userRepository.update(Mockito.any(),Mockito.any())).thenThrow(RuntimeException.class);

        assertThrows(UserServiceException.class,()-> userService.updateUser(Mockito.anyString(), Mockito.any()),"should throws UserService Exception");
    }

    @DisplayName("send email confirmation throws userServiceException on runtime error")
    @Test
    public void testSendEmailConfirmation_whenRuntimeException_shouldThrowUserServiceException() {
        when(userRepository.save(Mockito.any())).thenReturn(user1);
        doThrow(RuntimeException.class)
                .when(emailService)
                .sendConfirmationEmail(Mockito.any(User.class), Mockito.anyString());

        //*** make a void method do nothing when it's been called ***//
       // doNothing().when(emailService).sendConfirmationEmail(Mockito.any(User.class), Mockito.anyString());

        assertThrows(UserServiceException.class,()->userService.addUser(user1),"should throw UserServiceException");
        verify(emailService, Mockito.times(1)).sendConfirmationEmail(Mockito.any(User.class), Mockito.anyString());
    }

    @DisplayName("schedule email confirmation is executed")
    @Test
    public void testSendEmailConfirmation_whenUserCreated_scheduleEmailConfirmation() {
        when(userRepository.save(Mockito.any(User.class))).thenReturn(user1);

        //*** It calls a real method even though emailService is mocked ***//
        doCallRealMethod().when(emailService).sendConfirmationEmail(Mockito.any(User.class), Mockito.anyString());
        userService.addUser(user1);

        Mockito.verify(emailService, Mockito.times(1)).sendConfirmationEmail(Mockito.any(User.class), Mockito.anyString());
    }


}
