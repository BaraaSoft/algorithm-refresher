package com.baraabytes.mobileappws.service.user;

import com.baraabytes.mobileappws.ui.Dto.shared.UserDto;

public interface IUserService {
    UserDto createUser(UserDto userDto);
    UserDto updateUser(UserDto userDto);
    UserDto getUserById(String id);
    UserDto getUserByEmail(String email);
    UserDto deleteUser(Long id);
}
