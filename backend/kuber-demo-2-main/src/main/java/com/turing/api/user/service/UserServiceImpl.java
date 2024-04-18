package com.turing.api.user.service;


import com.turing.api.common.component.JwtProvider;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@RequestMapping(path="/api/users")
@Slf4j
public class UserServiceImpl/* extends AbstractService<User>*/ implements UserService {

    private final UserRepository repository;
    private final JwtProvider jwtProvider;


    @Override
    public Messenger save(UserDto dto) {
        User ent = repository.save(dtoToEntity(dto));
        System.out.println((ent instanceof User) ? "SUCCESS" : "FAILURE");

        return Messenger.builder()
                .message((ent instanceof User) ? "SUCCESS" : "FAILURE")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {

        repository.deleteById(id);

        return Messenger.builder()
                .message(repository.findById(id).isPresent() ? "SUCCESS" : "FAILURE")
                .build();
    }

    @Override
    public List<UserDto> findAll() {
        return repository.findAll().stream().map(i->entityToDto(i)).toList();
    }

    @Override
    public Optional<UserDto> findById(Long id) {


        return Optional.ofNullable(
                entityToDto(repository.findById(id).orElse(null)));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public Messenger modify(UserDto user) {
        User ent = repository.save(dtoToEntity(user));


        return Messenger.builder()
                .message("수정완료")
                .build();
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return null;
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return null;
    }

    @Override
    public Optional<UserDto> findUserByUsername(String username) {
        Optional<User> user = repository.findByUsername(username);
        return Optional.of(entityToDto(user.get()));
    }

    @Override
    public Messenger login(UserDto param) {

        boolean flag = repository.findByUsername(param.getUsername()).get()
                .getPassword().equals(param.getPassword());

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .token(flag ? jwtProvider.CreateToken(param) : "None")
                .build();
    }


}