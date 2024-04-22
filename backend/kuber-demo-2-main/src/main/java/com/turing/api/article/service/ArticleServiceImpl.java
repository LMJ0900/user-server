package com.turing.api.article.service;


import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@RequestMapping(path="/api/articles")
@Slf4j
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repository;


    @Override
    public Messenger save(ArticleDto dto) {
        Article ent = repository.save(dtoToEntity(dto));
        System.out.println((ent instanceof Article) ? "SUCCESS" : "FAILURE");
        return Messenger.builder()
                .message((ent instanceof Article) ? "SUCCESS" : "FAILURE")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return null;
    }

    @Override
    public Messenger modify(ArticleDto articleDto) {
        return null;
    }

    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(i->entityToDto(i)).toList();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
       return Optional.ofNullable(
                entityToDto(repository.findById(id).orElse(null)));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public List<ArticleDto> findArticleByBoardId(Long boardId) {
        return repository.findArticleByBoardId(boardId)   .stream().map(i -> entityToDto(i))
                .toList();
    }
}