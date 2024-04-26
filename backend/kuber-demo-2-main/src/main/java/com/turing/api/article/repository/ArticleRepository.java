package com.turing.api.article.repository;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.user.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{
//
///// JPQL Default
//    @Query(" select a from articles a where a.board.id = :boardId ")
//    public List<Article> getArticlesByBoardId(@Param("boardId")long id);
/////Native
//    @Query(value = " select * from articles a where a.board.id = 1 ", nativeQuery = true)
//    public List<Article> getQnaArticles();
//    @Query(value = " select * from articles a where a.board.id = 2 ", nativeQuery = true)
//    public List<Article> getReviewArticles();
///// JPSQL Return Type DTO
//    String articleDtoMapping = " new com.turing.api.article.model.ArticleDto(" +
//            ", a.id, a.title a.content, a.writer.id, a.board.id" +
//            ", a.regDate, a.modDate) ";
//    @Query("SELECT " + articleDtoMapping + " FROM articles a WHERE a.board.id = :boardId")
//    public List<ArticleDto> getArticleDTOsByBoardId(@Param("boardId") Long boardId);
    List<Article> findArticleByBoardId(Long boardId);
}