import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI, loginAPI } from "./user.api";
import { IUser } from "../model/user.model";

export const findAllUsers : any = createAsyncThunk(
    'users/findAllUsers',
    async (page: number) => {
        console.log('findAllUsers' + page)
        const data:any = await findAllUsersAPI(1);
        return data
    }
)
export const findUserById : any = createAsyncThunk(
    'users/findUserById',
    async (id: number) => {
        const data:any = await findUserByIdAPI(id);
        return data
    }
)
export const login : any = createAsyncThunk(
    'users/login',
    async (user : IUser) =>  await loginAPI(user)

    
)