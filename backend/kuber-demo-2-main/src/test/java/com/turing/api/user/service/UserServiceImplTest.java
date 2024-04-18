package com.turing.api.user.service;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
public class UserServiceImplTest {

    @Autowired
    private UserService service;


    @Test
    @DisplayName("회원수 카운트")
    void count() {
        assertThat(service.count()).isEqualTo(20);

    }

    @Test
    @DisplayName("로그인 테스트")
    void save() {
        Assertions.assertEquals(service.save(UserDto.builder()
                        .username("a")
                        .password("1")
                        .name("da")
                        .phone("11")
                        .job("ㅎ")
                        .regDate("2")
                        .modDate("2")
                .build()),"회원가입완료");
    }

    @Test
    @Transactional
    @DisplayName("회원삭제 테스트")
    void deleteById() {
    }

    @Test
    @DisplayName("아이디찾기 테스트")
    void findById() {
    }
}