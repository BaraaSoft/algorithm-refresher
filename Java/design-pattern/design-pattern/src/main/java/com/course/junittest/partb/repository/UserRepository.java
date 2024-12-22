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
    public User save(User user) {
        user.setId(UUID.randomUUID().toString());
        if(users.containsKey(user.getId())) { return users.get(user.getId()); }
        users.put(user.getId(), user);
        return user;
    }

    @Override
    public User update(String id, User newModel) {
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
