'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import { NextPage } from "next";
import exp from "constants";
import { MyTypography } from "@/app/components/common/style/cell";
import { Article, AttachFile, FmdGood, ThumbUpAlt } from "@mui/icons-material";
import { IBoard } from "@/app/components/boards/model/board";
import { getAllBoards } from "@/app/components/boards/service/board.slice";
import { useDispatch, useSelector } from "react-redux";
import { findAllBoards } from "@/app/components/boards/service/board.service";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { saveArticle } from "@/app/components/articles/service/article.service";
import { IArticle } from "@/app/components/articles/model/article";
import { PG } from "@/app/components/common/enums/PG";
import { useForm } from 'react-hook-form'
import router from "next/router";
import { jwtDecode } from "jwt-decode";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { parseCookies } from "nookies";
// import React from "react";
export default function UpdateArticlePage({}) {
  const router = useRouter()
 

  
  // const[content, setContent] = useState("")
  // const selectHandler = (e:any) => {
  //   setContent(e.target.value)
  // }
  const {register, handleSubmit, formState:{errors}} = useForm();
  const [article, setArticle] = useState({} as IArticle)

  const handelCancel = () => {
   router.push(`${PG.BOARD}/list`)
  }
  // const handleSubmit = () => {
  // dispatch(saveArticle(article))
  // router.push(`${PG.BOARD}/list`)
  // }
  // const options = [
  //   {id:1, title:"REVIEW", content:"리뷰게시판"},
  //   {id:2, title:"QNA", content:"Q&A게시판"},
  //   {id:3, title:"free", content:"자유게시판"},
  // ]
  useEffect(()=>{
    // console.log('토큰을 디코드한 내용 : ')
    // console.log(JSON.stringify(jwtDecode<any>(parseCookies().accessToken)))
    // console.log('토큰을 디코드한 ID : ')
    // console.log(jwtDecode<any>(parseCookies().accessToken).userId)
  } , [])
  const titleWriter= () =>{

  }
  const contentWriter = () => {

  }
  const handleInsert = (e:any) => {
    const {
      target: { options }
    } = e;
    console.log( )
    setArticle(dto => ({ ...dto, "board":options[options.selectedIndex].id }));
    //공부하기
    console.log(JSON.stringify(article))
  }
  
  const dispatch = useDispatch()
  const allBoards:IBoard[] = useSelector(getAllBoards);
  useEffect(()=>{
      dispatch(findAllBoards(1))
      .then((res:any) => {
        console.log(res.payload[0].content)
        setArticle({...article, "content": res.payload[0]?.content})
        console.log(article)
      })
  },[])
  

  const [selected, setSelected] = useState("게시판 선택");
  
  const onSubmit = (data:any) => {
    alert(JSON.stringify(data))
    dispatch(saveArticle(data))
    .then((res:any)=>{
      const data = res.payload
      alert(`게시글 작성 완료 ${res.payload}`)
      const boardId = data.boardId
      router.push(`/ariticle/list.${boardId}`)      

    })
    .catch((err:any)=>{});
  }

    return(<>

{/* <form className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Board</label>
  <select 
  onChange={selectHandler}>
  {options.map((item, index)=>(
    <option key={item.id} title={item.title}>{item.content} </option>
  ))
}
 
  </select>
</form> */}


<form onSubmit={handleSubmit(onSubmit)}className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Board</label>
  <select 
  {...register('id', {required: true})}
  > 
          {allBoards.map((item) => (
            <option key={item.id} id={`${item.id}`} title={item.title} >
            {item.content}
            </option>
          ))}

  </select>


<div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      {MyTypography('Article 작성', "1.5rem")}
      <input type="hidden" value={jwtDecode<any>(parseCookies().accessToken).userId} readOnly
      {...register('Writer', {required: true})}/>
      <input
       {...register('title', {required: true, maxLength : 20})}
      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text"/>
      <textarea 
      {...register('content', {required: true})}
      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"></textarea>
      {/* <!-- icons --> */}
      <div className="icons flex text-gray-500 m-2">
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <ThumbUpAlt component={ThumbUpAlt}></ThumbUpAlt>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <FmdGood component={FmdGood}></FmdGood>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <AttachFile component={AttachFile}></AttachFile>
        </svg>
        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
      </div>
      {/* <!-- buttons --> */}
      <div className="buttons flex">
        <div className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handelCancel}>Cancel</div>
        {/* <div className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onSubmit={handleSubmit}> Post </div> */}
          <input type="submit" value="SUBMIT" />
      </div>
    </div>
    </form>
</>)


  }
