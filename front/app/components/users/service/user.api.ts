import { instance } from "../../common/configs/axios-config"
import { IUser } from "../model/user.model"



export const findAllUsersAPI = async (page : number) => {
    console.log()
    try{
        const response = await instance.get('/users/list',{
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
        const response = await instance.get('/users/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const loginAPI= async (user : IUser) => {
    try{
        const response = await instance.post('/users/login',user)
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
        const response = await instance.get('/users/exists-Username',{params: {username}}
        )
        // java에서 Messenger.message 에 값을 담음
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)

        return error
    }

}