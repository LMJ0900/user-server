import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { deleteArticle, findAllArticles, findArticleByBoardId, findArticleById, modifyArticle, saveArticle } from './article.service';
import { IArticle } from '../model/article';



const articleThunks = [findAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface ArticleState  {
    array? : Array<IArticle>,
    json? : IArticle,
}
export const initialState:ArticleState = {
    json: {} as IArticle,
    array : [],
}

const handleFulfilled =  (state: any, {payload}: any) => {state.array = payload}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}



export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state: any, {payload}: any) => {state.array = payload})
        .addCase(findArticleById.fulfilled, (state: any, {payload}: any) => {state.json = payload})
        .addCase(findArticleByBoardId.fulfilled, (state: any, {payload}: any) => {state.array = payload})
        .addCase(saveArticle.fulfilled, (state: any, {payload}: any) => {state.message = payload})
        .addCase(modifyArticle.fulfilled, (state: any, {payload}: any) => {state.message = payload})
        .addCase(deleteArticle.fulfilled, (state: any, {payload}: any) => {state.message = payload})
    }
})
export const getAllArticles = (state: any) => {
    return state.article.array;
}
export const getArticleById = (state: any) => {
    return state.article.json;
};
export const getfindArticleByBoardId = (state: any) => {
    return state.article.array;
};
export const getSaveArticle = (state: any) => {
    console.log("슬라이스 확인" +state.article.message)
    return state.article.message;
};
export const getModifyArticle = (state: any) => {
    console.log("슬라이스 확인" +state.article.message)
    return state.article.message;
};
export const getDeleteArticle = (state: any) => {
    console.log("슬라이스 확인" +state.article.message)
    return state.article.message;
};

export const {} = articleSlice.actions
export default articleSlice.reducer;