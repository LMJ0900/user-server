import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../../articles/model/article";

import axios from "axios";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig, { instance } from "@/app/components/common/configs/axios-config";
import { findAllArticles } from "../../articles/service/article.service";

export const fetchAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{
        console.log('fetchAllArticles page : '+ page)
        const data:any = await  findAllArticles(1);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)