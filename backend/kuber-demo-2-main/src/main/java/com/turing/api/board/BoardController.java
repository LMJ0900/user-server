package com.turing.api.board;


import com.turing.api.board.model.BoardDto;
import com.turing.api.board.service.BoardServiceImpl;
import com.turing.api.common.component.Messenger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RequestMapping(path="/api/boards")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardServiceImpl service;

    @PostMapping("")
    public ResponseEntity<Messenger> save(@RequestBody BoardDto dto){
        log.info("입력받은 정보 : {}", dto);
        return ResponseEntity.ok(service.save(dto));
    }

    @DeleteMapping ("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestBody Long id){
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(service.deleteById(id));
    }
    @GetMapping("/list")
    public ResponseEntity<List<BoardDto>> findAll(){
        log.info("입력받은 정보 : {}" );
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/detail")
    public ResponseEntity<Optional<BoardDto>> findById(@RequestParam Long id){
        return ResponseEntity.ok(service.findById(id));
    }
    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok(service.count());
    }
    @GetMapping("/existId")
    public ResponseEntity<Boolean> existsById(@RequestBody long id){
        return ResponseEntity.ok(service.existsById(id));
    }

}