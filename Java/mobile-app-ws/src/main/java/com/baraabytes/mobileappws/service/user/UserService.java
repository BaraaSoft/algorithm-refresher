package com.baraabytes.mobileappws.service.user;

import com.baraabytes.mobileappws.entity.UserEntity;
import com.baraabytes.mobileappws.repository.UserRepository;
import com.baraabytes.mobileappws.ui.Dto.shared.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(userDto, userEntity);
        userEntity.setEncryptedPassword("test-encrypted");
        UserEntity storedUser = userRepository.save(userEntity);

        UserDto createdUserDto = new UserDto();

        BeanUtils.copyProperties(storedUser, createdUserDto);

        return createdUserDto;
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        return null;
    }

    @Override
    public UserDto getUserById(String id) {
        return null;
    }

    @Override
    public UserDto getUserByEmail(String email) {
        UserEntity userEntity = userRepository.findUserByEmail(email);
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userEntity, userDto);
        return userDto;
    }

    @Override
    public UserDto deleteUser(Long id) {
        return null;
    }
}
