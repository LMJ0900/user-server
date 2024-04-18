package com.turing.api.board.model;

import com.turing.api.article.model.Article;
import lombok.*;
import org.springframework.stereotype.Component;
import java.util.*;


@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardDto {

    private long id;
    private String title;
    private String description;
    private String regDate;
    private String modDate;
}