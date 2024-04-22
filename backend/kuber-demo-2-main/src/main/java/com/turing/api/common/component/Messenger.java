package com.turing.api.common.component;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Messenger {
    private String message;
    private int status;
    private String accessToken;
    private String refreshToken;
    private String code;


}