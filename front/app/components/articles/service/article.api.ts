import { instance } from "../../common/configs/axios-config"
import { IArticle } from "../model/article"


export const findAllArticlesAPI = async (page: number) =>{
    try{
        const response = await instance.get('/articles/list',{
            params: {page}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const findArticleByIdAPI = async (id: number) =>{
    try{
        const response = await instance.get('/articles/detail',{
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
        const response = await instance.delete('/articles/detail',{
            params: {id}
        })

        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const findArticleByBoardIdAPI = async (id: number) =>{
    try{
        const response = await instance.get('/articles/find',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}
export const saveArticleAPI = async (article:IArticle) =>{
    try{
        const response = await instance.post('/articles/save',
            article
        )
        return response.data
    }catch(error){
        console.log(error)
    }
}