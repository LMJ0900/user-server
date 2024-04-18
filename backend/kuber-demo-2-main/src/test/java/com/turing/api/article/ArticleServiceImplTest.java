package com.turing.api.article;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.article.service.ArticleService;
import com.turing.api.article.service.ArticleServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class ArticleServiceImplTest {

    private ArticleService service;
    private static Article testArticle;
    @Mock
    private ArticleRepository repository;
    @BeforeEach
    void setup(){
        this.service = new ArticleServiceImpl(repository);
    }
    @BeforeEach
    void init(){
        testArticle = Article.of("테스트 제목", "테스트 글");
    }
    @Test
    public void 게시글_제목_검색()throws Exception{
        // Given
        repository.save(testArticle);

        //when
        Article article = repository.findById(1L).get();

        //Then
        assertThat(article.getTitle())
                .isEqualTo("테스트 제목");
    }
    @Test
    public void 게시글_전체_검색()throws Exception{

        List<Article> articles = getList();
        BDDMockito.given(repository.findAll()).willReturn(articles);
        List<ArticleDto> list = service.findAll();
        assertThat(list.size())
                .isEqualTo(3);
    }
    private List<Article> getList(){
        return Arrays.asList(
                Article.builder().id(1L).title("자바").content("인스턴스").build(),
                Article.builder().id(1L).title("리액트").content("컴포넌트").build(),
                Article.builder().id(1L).title("도커").content("컨테이너").build()
        );
    }

}
