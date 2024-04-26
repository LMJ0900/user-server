import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { deleteArticleAPI, findAllArticlesAPI, findArticleByBoardIdAPI, findArticleByIdAPI, modifyArticleAPI, saveArticleAPI } from "./article.api";
import { IArticle } from "../model/article";

export const findAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{const data:any = await  findAllArticlesAPI(1);
        return data
    })
    export const findArticleById: any = createAsyncThunk(
        'articles/findArticleById',
        async (id: number)=>{const data:any = await  findArticleByIdAPI(id);
            return data
        })
    export const findArticleByBoardId: any = createAsyncThunk(
        'articles/findArticleByBoardId',
        async (id: number)=>{const data:any = await  findArticleByBoardIdAPI(id);
            return data
        })
    export const saveArticle: any = createAsyncThunk(
        'articles/saveArticle',
        async (article:IArticle)=>{
            const data:any = await  saveArticleAPI(article);
            console.log("서비스 확인" + data)
            return data
        })
        export const modifyArticle: any = createAsyncThunk(
            'articles/modify',
            async (article:IArticle)=>{
                const data:any = await  modifyArticleAPI(article);
                console.log("수정 서비스 확인" + data)
                return data
            })
            export const deleteArticle: any = createAsyncThunk(
                'articles/delete',
                async (id: number)=>{
                    console.log("삭제 서비스 확인" + id)
                    await  deleteArticleAPI(id)
                })