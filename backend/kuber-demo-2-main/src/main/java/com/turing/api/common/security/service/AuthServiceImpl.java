package com.turing.api.common.security.service;

import com.turing.api.common.component.security.JwtProvider;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;


@Service
@RequiredArgsConstructor
@RequestMapping(path="/api/auth")
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserRepository repository;
    private final JwtProvider jwtProvider;
    @Override
    public Messenger login(UserDto param) {

        boolean flag = repository.findByUsername(param.getUsername()).get()
                .getPassword().equals(param.getPassword());

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .accessToken(flag ? jwtProvider.createToken(param) : "None")
                .build();
    }

    @Override
    public String createToken(UserDto user) {
        return null;
    }

}
