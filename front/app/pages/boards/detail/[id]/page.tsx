'use client'


import { IBoard } from "@/app/components/boards/model/board"
import { BoardColums } from "@/app/components/boards/model/board-colums"
import BoardColumns from "@/app/components/boards/module/colums"
import { findAllBoards, findBoardById } from "@/app/components/boards/service/board.service"
import { getAllBoards, getSingleBoard } from "@/app/components/boards/service/board.slice"
import { MyTypography } from "@/app/components/common/style/cell"
import { Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"




export default function BoardDetailPage({params}:any) {
    const dispatch = useDispatch()
    const board:IBoard = useSelector(getSingleBoard)

    
useEffect(()=>{
    dispatch(findBoardById(params.id))
},[])

    return (<>
    게시판 상세
    <span> {MyTypography('ID :'+params.id,"1.5rem")}</span>
    <span> {MyTypography('게시판 이름 :'+board.title,"1.5rem")}</span>
    <span> {MyTypography('게시판 종류 :'+board.description,"1.5rem")}</span>
    </>
)

}
