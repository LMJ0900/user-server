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
import router from "next/router";
import { saveArticle } from "@/app/components/articles/service/article.service";
import { IArticle } from "@/app/components/articles/model/article";
// import React from "react";

export default function WriteArticlePage() {
  const [article, setArticle] = useState({} as IArticle)
  const handelCancel = () => {}
  const handleSubmit = () => {
  dispatch(saveArticle(article))
  }
  const handleInsert = (e:any) => {
    const {
      target: { value, name }
    } = e;
    setArticle(dto => ({ ...dto, [name]: value }));
    //공부하기
  }
  
  const dispatch = useDispatch()
  const allBoards:IBoard[] = useSelector(getAllBoards);
  useEffect(()=>{
      dispatch(findAllBoards(1))
  },[])
  

  const [selected, setSelected] = useState("게시판 선택");
  
  const handleSelect = (e:any) => {
    setSelected(e.target.value);
  };

    return(<>

<form className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Board</label>
  <select onChange={handleSelect} value={selected}> {allBoards.map((item) => (
            <option value={item.id} key={item.id}>
            {item.title}
            </option>
          ))}

  </select>
</form>
<div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      {MyTypography('Article 작성', "1.5rem")}
      <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" name="title" onChange={handleInsert} />
      <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here" name="content" onChange={handleInsert}></textarea>
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
        <div className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handleSubmit}> Post </div>
      </div>
    </div>

</>)
}

