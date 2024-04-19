package com.turing.api.user.service;


import com.turing.api.common.component.JwtProvider;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Base64;
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
    public boolean existsByUsername(String username) {
        return repository.existsByUsername(username);
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

    @Transactional
    @Override
    public Messenger login(UserDto param) {

        User user = repository.findByUsername(param.getUsername()).get();
        String token = jwtProvider.createToken(entityToDto(user));
        boolean flag = user.getPassword().equals(param.getPassword());

        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info("TOKEN Header : " + header);
        log.info("TOKEN Payload : " + payload);

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .token(flag ? token : "None")
                .build();
    }


}
