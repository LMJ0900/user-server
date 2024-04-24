package com.turing.api.board.service;


import com.turing.api.board.model.Board;
import com.turing.api.board.model.BoardDto;
import com.turing.api.common.component.Messenger;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {

    default Board dtoToEntity(BoardDto dto){
        return Board.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .description(dto.getDescription())
                .build();
    }

    default BoardDto entityToDto(Board ent){
        return BoardDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .content(ent.getContent())
                .description(ent.getDescription())
                .regDate(String.valueOf(ent.getRegDate()))
                .modDate(String.valueOf(ent.getModDate()))
                .build();
    }


    Messenger save(@RequestBody BoardDto t);

    Messenger deleteById(Long id);

    Messenger modify(BoardDto boardDto);

    List<BoardDto> findAll();

    Optional<BoardDto> findById(Long id);

    long count();

    boolean existsById(Long id);
}