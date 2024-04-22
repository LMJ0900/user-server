import { createAsyncThunk } from "@reduxjs/toolkit";
import { existsByUsernameAPI, findAllUsersAPI, findUserByIdAPI, loginAPI, logoutAPI } from "./user.api";
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
export const existsByUsername : any = createAsyncThunk(
    'users/existsByUsername',
async (username : string) => await existsByUsernameAPI(username))

export const logout: any = createAsyncThunk(
    'user/logout',
    async (username : string) => await logoutAPI(username)
)