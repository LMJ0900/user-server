package com.turing.api.board.model;

import java.util.List;

import com.turing.api.article.model.Article;
import com.turing.api.common.model.BaseEntity;
import jakarta.persistence.*;


import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name = "boards")
public class Board extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;


    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Article> articles;

    @Builder(builderMethodName = "builder")
    public Board(long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }


}