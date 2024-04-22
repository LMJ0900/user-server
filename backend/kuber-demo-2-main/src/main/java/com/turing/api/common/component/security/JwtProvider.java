package com.turing.api.common.component.security;


import com.turing.api.user.model.UserDto;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import io.jsonwebtoken.security.Keys;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;

@Slf4j
@Component
public class JwtProvider {
    @Value("${jwt.iss}")
    private String issuer;

    private final SecretKey secretKey;
    Instant expiredDate = Instant.now().plus(1, ChronoUnit.DAYS);

    public JwtProvider(@Value("${jwt.secret}") String secretKey) {
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretKey));
    }
    public String createToken(UserDto dto) {
        String token = Jwts.builder()
                .issuer(issuer)
                .signWith(secretKey)
                .expiration(Date.from(expiredDate))
                .subject("turing")
                .claim("userId", dto.getId())
                .claim("username", dto.getUsername())
                .claim("job", dto.getJob())
                .compact();

        log.info("로그인으로 발급한 토큰 :" + token);
        return token;
    }
    public String extractTokenFromHeader(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if(bearerToken != null && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }
        return null;
    }
    public String getPayload(String accessToken) {
        String[] chunks = accessToken.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info("Access TOKEN Header : " + header);
        log.info("Access TOKEN Payload : " + payload);

//        return new StringBuilder().append(header).append(payload).toString();
        return payload;
    }
}
