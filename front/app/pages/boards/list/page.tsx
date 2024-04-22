'use client'

import CardButton from "@/app/atoms/button/CardButton";
import { IBoard } from "@/app/components/boards/model/board"
import { findAllBoards } from "@/app/components/boards/service/board.service";
import { getAllBoards } from "@/app/components/boards/service/board.slice";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function BoardCards(){


// const dispatch = useDispatch()
// const allBoards:IBoard[] = useSelector(getAllBoards);
// useEffect(()=>{
//     dispatch(findAllBoards(1))
// },[allBoards])




    
return (<>
    <h1>게시판 목록</h1>
        {/* {allBoards && allBoards.map((v) =>(
            <CardButton key ={v.id} id = {v.id}
           title= {v.title}
           description={v.description} />
            ))} */}
    </>
    )
}

function userSelector(getBoardList: any) {
    throw new Error("Function not implemented.");
}
