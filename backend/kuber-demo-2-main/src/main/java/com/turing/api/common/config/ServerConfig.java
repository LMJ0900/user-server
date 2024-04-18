package com.turing.api.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.datetime.DateFormatter;

import java.text.DateFormat;

@Configuration
public class ServerConfig {

    @Bean
    public String datePattern(){
        return "yyyy-MM-dd'T'HH:mm.XXX";
    }

    @Bean
    public DateFormatter dafaultDateFormatter(){
        return new DateFormatter(datePattern());
    }
}
