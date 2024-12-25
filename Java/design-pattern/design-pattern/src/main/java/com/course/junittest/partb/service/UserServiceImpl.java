package com.course.junittest.partb.service;

import com.course.junittest.partb.model.User;
import com.course.junittest.partb.repository.Repository;
import com.course.junittest.partb.repository.UserRepository;

public class UserServiceImpl implements UserService<User> {
    private final Repository<User> userRepository;
    private final EmailService<User> emailService;
    public UserServiceImpl(Repository<User> userRepository, EmailService<User> emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @Override
    public User findByUserId(String id) throws UserServiceException {
        User user = userRepository.find(id);
        if (user == null) throw new UserServiceException("user not found!");
        return user;
    }

    @Override
    public User updateUser(String id, User user) {
        User newUser;

        try {
            newUser = userRepository.update(id, user);
        } catch (RuntimeException e) {
            throw new UserServiceException("Failed update user details!");
        }

        return newUser;
    }

    @Override
    public User addUser(User user) throws UserServiceException {
        User createdUser = userRepository.save(user);
        if(createdUser == null) throw new UserServiceException("couldn't create user!");
        try {
            emailService.sendConfirmationEmail(user,"Welcome to future land!");
        }catch (RuntimeException e) {
            throw new UserServiceException(e.getMessage());
        }
        return createdUser;
    }

    @Override
    public Boolean deleteUser(String id) {
        User user = userRepository.find(id);
        return userRepository.delete(user);
    }
}
