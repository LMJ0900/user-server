'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Link, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/articles/module/colums";
import React from "react";
import { IArticle } from "@/app/components/articles/model/article";
import { getArticleById, getfindArticleByBoardId } from "@/app/components/articles/service/article.slice";
import { findArticleByBoardId, findArticleById } from "@/app/components/articles/service/article.service";
import { MyTypography } from "@/app/components/common/style/cell";
import ArticleColumns from "@/app/components/articles/module/colums";
import MoveButton from "@/app/atoms/button/MoveButton";
import { PG } from "@/app/components/common/enums/PG";


export default function Articlepage(props:any){
    const dispatch = useDispatch()

    const ArticlesList : IArticle[] = useSelector(getfindArticleByBoardId)

useEffect(()=>{
    dispatch(findArticleByBoardId(props.params.id))
},[])
return(<>
<h2>게시글 목록</h2>
<MoveButton text={"글쓰기"} path={`${PG.ARTICLE}/save/`}></MoveButton>
        <div style={{ height: "100%", width: "100%" }}>
  {ArticlesList && <DataGrid // 🔥 4
        rows={ArticlesList}
        columns={ArticleColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
</>)
}

