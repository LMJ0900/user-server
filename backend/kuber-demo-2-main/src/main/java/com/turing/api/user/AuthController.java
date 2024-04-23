package com.turing.api.user;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;
import com.turing.api.user.service.UserService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.processing.Messager;
import java.awt.print.Pageable;
import java.sql.SQLException;
import java.util.*;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/auth")
@Slf4j
public class AuthController {
    private final UserService service;

    @GetMapping("/exists-Username")
    public ResponseEntity<Boolean> existByUsername(@RequestParam("username") String username){
        log.info("입력받은 정보 : {}", username);
        return ResponseEntity.ok(service.existsByUsername(username));
    }
    @PostMapping(path = "/login")
    public ResponseEntity<Messenger> login(@RequestBody UserDto param) {
        log.info("로그인 파라미터 : {}", param );
        Messenger messenger = service.login(param);
        log.info("로그인 결과 메신저 확인 : {} ", messenger.toString());
        return ResponseEntity.ok(messenger);

    }


}