import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { findAllArticlesAPI, findArticleByBoardIdAPI, findArticleByIdAPI, saveArticleAPI } from "./article.api";
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
        async (article:IArticle)=>{const data:any = await  saveArticleAPI(article);
            return data
        })