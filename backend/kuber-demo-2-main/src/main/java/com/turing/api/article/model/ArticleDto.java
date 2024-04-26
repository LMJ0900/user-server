package com.turing.api.article.model;

import org.springframework.stereotype.Component;
import lombok.*;
import lombok.extern.log4j.Log4j;


@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {

    private Long id;
    private String title;
    private Long writerId;
    private Long boardId;
    private String content;
    private String regDate;
    private String modDate;

}