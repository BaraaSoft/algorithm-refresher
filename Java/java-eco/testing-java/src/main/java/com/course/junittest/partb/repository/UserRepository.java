package com.course.junittest.partb.repository;

import com.course.junittest.partb.model.User;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class UserRepository implements Repository<User> {
    private Map<String,User> users;
    public UserRepository() {
        users = new HashMap<>();
    }

    @Override
    public User find(String id) {
        if (!users.containsKey(id)) { return null; }
        return users.get(id);
    }

    @Override
    public User save(User user) throws IllegalArgumentException  {
        if(user.getName() == null || user.getName().isEmpty()) throw new IllegalArgumentException("Username cannot be empty");
        if(user.getEmail() == null || user.getEmail().isEmpty()) throw new IllegalArgumentException("Email cannot be empty");

        user.setId(UUID.randomUUID().toString());
        if(users.containsKey(user.getId())) { return users.get(user.getId()); }
        users.put(user.getId(), user);
        return user;
    }

    @Override
    public User update(String id, User newModel) throws IllegalArgumentException {
        if(id == null || id.isEmpty()) throw new IllegalArgumentException("Id cannot be empty");
        if(newModel.getName() == null || newModel.getName().isEmpty()) throw new IllegalArgumentException("Username cannot be empty");

        User oldModel = users.get(id);
        if(oldModel == null) { return null; }

        newModel.setId(oldModel.getId());
        users.put(id, newModel);
        return newModel;
    }

    @Override
    public Boolean delete(User model) {
        if(!users.containsKey(model.getId())) return false;
        users.remove(model.getId());
        return true;
    }
}
