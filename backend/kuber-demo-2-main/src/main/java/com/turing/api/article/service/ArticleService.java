package com.turing.api.article.service;


import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;

import java.util.List;
import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    default Article dtoToEntity(ArticleDto dto){
        return Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .build();
    }
    default ArticleDto entityToDto(Article ent){
        return ArticleDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .content(ent.getContent())
                .regDate(String.valueOf(ent.getRegDate()))
                .modDate(String.valueOf(ent.getModDate()))
                .build();
    }
    List<ArticleDto> findArticleByBoardId(Long boardId);

}