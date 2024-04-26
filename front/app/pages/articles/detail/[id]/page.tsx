'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/articles/module/colums";
import React from "react";
import { IArticle } from "@/app/components/articles/model/article";
import { getArticleById } from "@/app/components/articles/service/article.slice";
import {deleteArticle, findArticleById, modifyArticle } from "@/app/components/articles/service/article.service";
import { MyTypography } from "@/app/components/common/style/cell";
import { PG } from "@/app/components/common/enums/PG";

export default function ArticleDetail({params}:any){

    const dispatch = useDispatch()
    const router = useRouter()
    const article:IArticle = useSelector(getArticleById)
    const handleModify=(data:any)=>{
        dispatch(modifyArticle(data))
        .then((res:any)=>{
            const data = res.payload
            alert(`게시글 수정 완료 ${res.payload}`)
            
        })
        .catch((err:any)=>{});
    }
    const handleDelete=()=>{
        dispatch(deleteArticle(params.id))
        .then((res:any)=>{
        alert(`게시글 삭제 완료 ${res.payload}`)
        router.push(`${PG.ARTICLE}/list`)  
    })
}

    useEffect(()=>{dispatch(findArticleById(params.id))},[])
    return(<>
    <h2>{params.id} 상세페이지 </h2>
    <span> {MyTypography('ID :'+params.id,"1.5rem")}</span>
    <span> {MyTypography('제목 :'+article.title,"1.5rem")}</span>
    <span> {MyTypography('내용 :'+article.content,"1.5rem")}</span>
    <button onClick={handleModify}>수정하기</button><br></br>
    <button onClick={handleDelete}>삭제하기</button>
    </>)
}