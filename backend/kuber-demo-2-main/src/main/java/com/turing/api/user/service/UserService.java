package com.turing.api.user.service;



import com.turing.api.common.component.Messenger;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;

import javax.annotation.processing.Messager;
import java.util.List;
import java.util.Optional;


public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {
    Messenger save(UserDto dto);

    Messenger deleteById(Long id);

    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    long count();

    boolean existsById(Long id);

    Messenger modify(UserDto user);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
    Optional<UserDto> findUserByUsername(String username);

    default User dtoToEntity(UserDto dto){
        return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();
    }

    default UserDto entityToDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phone(user.getPhone())
                .job(user.getJob())
                .regDate(String.valueOf(user.getRegDate()))
                .modDate(String.valueOf(user.getModDate()))
                .build();
    }

    Messenger login(UserDto param);



    // default UserDto entityToDto(Optional<User> optional){
    //     return UserDto.builder().build();
    // }

}