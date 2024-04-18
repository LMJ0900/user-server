package com.turing.api.user.model;


import com.turing.api.article.model.Article;
import com.turing.api.common.model.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name="users")
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @Getter
    @Setter

public class User extends BaseEntity {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String phone;
    //private Long addressId;
    private String job;
    //private Double height;
    //private Double weight;

    @Builder(builderMethodName = "builder")
    public User(long id, String username, String password,
                String name, String phone, String job) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.job = job;
//        this.height = height;
//        this.weight = weight;
    }


    @OneToMany(mappedBy = "writer", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Article> articles;


    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", phone=" + phone +
//                ", address='" + addressId + '\'' +
                ", job='" + job + '\'' +
//                ", height=" + height +
//                ", weight=" + weight +
                '}' + '\n';
    }

    public void setPassword(String password) {
        this.password = password;
    }
}