package com.turing.api.user.model;

import org.springframework.stereotype.Component;
import lombok.*;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;
    private String regDate;
    private String modDate;
    private String token;

}