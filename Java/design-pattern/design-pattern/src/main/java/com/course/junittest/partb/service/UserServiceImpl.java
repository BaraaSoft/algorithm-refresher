package com.course.junittest.partb.service;

import com.course.junittest.partb.model.User;
import com.course.junittest.partb.repository.UserRepository;

public class UserServiceImpl implements UserService<User> {
    private final UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByUserId(String id) {
        return userRepository.find(id);
    }

    @Override
    public User updateUser(String id, User user) {
        return userRepository.update(id, user);
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Boolean deleteUser(String id) {
        User user = userRepository.find(id);
        return userRepository.delete(user);
    }
}
