package com.course.junittest.partb.repository;

import java.io.Serializable;

public interface Repository<T extends Serializable> {
    public T find(String id);
    public T save(T model);
    public T update(String id, T newModel);
    public Boolean delete(T model);
}
