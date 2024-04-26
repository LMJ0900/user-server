package com.turing.api.article.service;


import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.board.model.Board;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.repository.UserRepository;
import jakarta.transaction.Transactional;
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
    private final BoardRepository boardRepo;
    private final UserRepository userRepo;
    @Override
    @Transactional
    public Messenger save(ArticleDto articleDto) {
        log.info("1. 서비스 테스트" + articleDto);
        Board board = boardRepo.findById(articleDto.getBoardId()).orElseThrow();
        log.info("2. 보드 찾은 뒤 " + articleDto.getBoardId());
        User user = userRepo.findById(articleDto.getWriterId()).orElseThrow();
        log.info("3. 유저 찾은 뒤 " + articleDto.getWriterId());

        Article ent = repository.save(dtoToEntity(articleDto,board,user));
        System.out.println("4. 성공 실패 확인 : "+((ent instanceof Article) ? "SUCCESS" : "FAILURE"));
        log.info("임플 테스트" + ent);
        return Messenger.builder()
                .message((ent instanceof Article) ? "SUCCESS" : "FAILURE")
                .id(ent.getBoard().getId())
                .build();
    }

    @Override
    @Transactional
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        log.info("삭제 임플 : " + id);
        return Messenger.builder()
                .message("SUCCESS").build();
    }

    @Override
    @Transactional
    public Messenger modify(ArticleDto dto) {
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