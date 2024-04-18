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
import { findArticleById } from "@/app/components/articles/service/article.service";
import { MyTypography } from "@/app/components/common/style/cell";

export default function ArticleDetail({params}:any){

    const dispatch = useDispatch()
    const article:IArticle = useSelector(getArticleById)

    useEffect(()=>{dispatch(findArticleById(params.id))},[])
    return(<>
    <h2>{params.id} 상세페이지 </h2>
    <span> {MyTypography('ID :'+params.id,"1.5rem")}</span>
    <span> {MyTypography('제목 :'+article.title,"1.5rem")}</span>
    <span> {MyTypography('내용 :'+article.content,"1.5rem")}</span>
    </>)
}