package com.turing.api.article;


import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.service.ArticleServiceImpl;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.tool.schema.spi.SqlScriptException;
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
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto dto) {
       log.info("글쓰기 컨트롤러" + dto);
       return ResponseEntity.ok(service.save(dto));
   }
    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam("id") Long id){
       log.info("삭제 컨트롤러" + id);
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
    @PutMapping("/modify")
    public ResponseEntity<Messenger> modify(@RequestBody ArticleDto dto){
       log.info("modify 정보 : {} ", dto);
       return ResponseEntity.ok(service.modify(dto));
    }
}