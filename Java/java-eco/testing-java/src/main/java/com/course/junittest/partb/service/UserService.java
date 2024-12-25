package com.course.junittest.partb.service;

import com.course.junittest.partb.model.User;

public interface UserService<T extends User> {
    public T findByUserId(String username) throws UserServiceException;
    public T updateUser(String id,T user);
    public T addUser(T user);
    public Boolean deleteUser(String id);
}
