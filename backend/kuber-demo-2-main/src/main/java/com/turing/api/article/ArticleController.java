package com.turing.api.article;


import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.service.ArticleServiceImpl;
import com.turing.api.common.component.Messenger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/api/articles")
@Slf4j
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleServiceImpl service;


   @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto dto){
       log.info("글쓰기 입력값 : " + dto);
       return ResponseEntity.ok(service.save(dto));
   }
    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam Long id){
        return ResponseEntity.ok(service.deleteById(id));
    }
    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findAll(){
        log.info("입력받은 정보 : {}" );
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/detail")
    public ResponseEntity<Optional<ArticleDto>> findById(@RequestParam Long id){
        return ResponseEntity.ok(service.findById(id));
    }
    @GetMapping("/find")
    public ResponseEntity<List<ArticleDto>> findArticleByBoardId(@RequestParam("id") Long boardId) {
        return ResponseEntity.ok(service.findArticleByBoardId(boardId));
    }


    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok( service.count());
    }
    @GetMapping("/existId")
    public ResponseEntity<Boolean> existsById(@RequestBody long id){
        return ResponseEntity.ok(service.existsById(id));
    }
}