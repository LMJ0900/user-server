import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { findAllBoardsAPI, findBoardByIdAPI, } from "./board.api";
import { IBoard } from "../model/board";


export const findAllBoards: any = createAsyncThunk(
    'boards/findAllboards',
    async (page: number)=>{
        const data:any = await  findAllBoardsAPI(1);
        return data
    }
)
export const findBoardById: any = createAsyncThunk(
    'boards/findBoardById',
    async (id: number)=>{
        const data:any = await  findBoardByIdAPI(id);
    
        return data
    }
)
