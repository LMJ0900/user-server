import { createSlice } from "@reduxjs/toolkit";
import { existsByUsername, findAllUsers, findUserById, login, logout } from "./user.service";
import { IUser } from "../model/user.model";

const status ={
    pending: 'pending',
    fullfilled: 'fullfilled',
    rejected: 'rejected'
}

interface IAuth{
    message?: string
    token?: string
}

interface UserState  {
    array? : Array<IUser>,
    json? : IUser,
    auth? : IAuth
    existsUsername?: boolean
}
export const initialState:UserState = {
    json: {} as IUser,
    array : [],
    auth: {} as IAuth,
    existsUsername: false
}
export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const{pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, (state: any, {payload}: any) =>{state.array = payload})
        .addCase(findUserById.fulfilled, (state: any, {payload}: any) =>{state.json = payload})
        .addCase(login.fulfilled, (state: any, {payload}: any) =>{state.auth = payload})
        .addCase(existsByUsername.fulfilled,(state: any, {payload}: any) =>{state.existsByUsername = payload})
    }
})


export const getAllUsers = (state: any) => {
    return state.user.array;
}
export const getUserById = (state: any) => {
    return state.user.json;
}
export const getAuth = (state: any) => {
    return state.user.auth;
}
export const getExistsByUsername = (state: any) => {
    return state.user.existsByUsername;
}

export const {} = userSlice.actions

export default userSlice.reducer;