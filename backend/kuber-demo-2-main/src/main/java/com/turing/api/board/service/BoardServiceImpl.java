package com.turing.api.board.service;


import com.turing.api.board.model.BoardDto;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository repository;
    @Override
    public Messenger save(@RequestBody BoardDto t) {
        return Messenger.builder()
                .message("회원가입성공" + t.getId())
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        return null;
    }

    @Override
    public Messenger modify(BoardDto boardDto) {
        return null;
    }

    @Override
    public List<BoardDto> findAll() {
       return repository.findAll().stream().map(i->entityToDto(i)).toList();
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
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
}