'use client'


import MoveButton from "@/app/atoms/button/MoveButton"
import ArticleColumns from "@/app/components/articles/module/colums"
import { findAllArticles } from "@/app/components/articles/service/article.service"
import { getAllArticles } from "@/app/components/articles/service/article.slice"
import { StyledDataGrid } from "@/app/components/common/style/board"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Articlepage: NextPage =  ({data}:any) => {
    const dispatch = useDispatch()

    const allArticles: [] = useSelector(getAllArticles)

useEffect(()=>{
    dispatch(findAllArticles(1))
},[])
  
return(<>
<MoveButton text={"글쓰기"} path={`$PG.ARTICLE/save`}></MoveButton>
<h2>게시글 목록</h2>
        <div style={{ height: "100%", width: "100%" }}>
  {allArticles && <DataGrid // 🔥 4
        rows={allArticles}
        columns={ArticleColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
</>)
}
export default Articlepage;
