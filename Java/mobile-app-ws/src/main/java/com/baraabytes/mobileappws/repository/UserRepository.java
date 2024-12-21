package com.baraabytes.mobileappws.repository;

import com.baraabytes.mobileappws.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, String> {
    UserEntity findUserByEmail(String email);
}
