import  instance  from "../../common/configs/axios-config"
import { IBoard } from "../model/board"


export const findAllBoardsAPI = async (page: number) =>{
    try{
        const response = await instance().get('/boards/list',{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}
export const findBoardByIdAPI = async (id: number) =>{
    try{
        const response = await instance().get('/boards/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}
export const deleteByIdAPI = async (id: number) =>{
    try{
        const response = await instance().delete('/boards/delete',{
            params: {id}
        })

        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
