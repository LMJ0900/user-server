package com.turing.api.user.service;


import com.turing.api.common.component.security.JwtProvider;
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
    @Transactional
    public Messenger save(UserDto dto) {
        var ent = repository.save(dtoToEntity(dto));
        System.out.println((ent instanceof User) ? "SUCCESS" : "FAILURE");

        return Messenger.builder()
                .message((ent instanceof User) ? "SUCCESS" : "FAILURE")
                .build();
    }

    @Override
    @Transactional
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
    @Transactional
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
        log.info("로그인 서비스 확인 :" + param);
        User user = repository.findByUsername(param.getUsername()).get();
        String accessToken = jwtProvider.createToken(entityToDto(user));
        boolean flag = user.getPassword().equals(param.getPassword());

        jwtProvider.printPayload(accessToken);
        repository.modifyTokenById(user.getId(), accessToken);

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .accessToken(flag ? accessToken : "None")
                .build();
    }
    @Transactional
    @Override
    public Boolean logout(String token){
        String accessToken = token != null && token.startsWith("Bearer ") ? token.substring(7) : "undefined";
        Long id = jwtProvider.getPayload(accessToken).get("user_id", Long.class);
        String updateToken = null;
        Boolean a = repository.existsById(id);
        repository.modifyTokenById(id,updateToken);

        log.info("토큰 삭제 결과 : {]", a);

        return a;
    }


}
