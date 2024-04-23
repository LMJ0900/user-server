import  instance  from "../../common/configs/axios-config"
import { IUser } from "../model/user.model"



export const findAllUsersAPI = async (page : number) => {
    console.log()
    try{
        const response = await instance().get('/users/list',{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const findUserByIdAPI = async (id : number) => {
    try{
        const response = await instance().get('/users/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const loginAPI= async (user : IUser) => {
    console.log(`로그인 api에 넘어온 파라미터 : ${JSON.stringify(user)}`)
    try{
        const response = await instance().post('/auth/login',user)
        // java에서 Messenger.message 에 값을 담음
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const existsByUsernameAPI= async (username : string) => {
    try{
        console.log(await instance().get('/auth/exists-Username',{params: {username}}));
        const response = await instance().get('/auth/exists-Username',{params: {username}}
        )
        // java에서 Messenger.message 에 값을 담음
        console.log('existsUsernameAPI 결과: '+ response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }

}
export const logoutAPI= async () => {
    try{
        const response = await instance().get(`/users/logout`)
        return response.data
    }catch(error){
        console.log(error)
    }
}
