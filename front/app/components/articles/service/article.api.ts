import  instance  from "../../common/configs/axios-config"
import { IArticle } from "../model/article"


export const findAllArticlesAPI = async (page: number) =>{
    try{
        const response = await instance().get('/articles/list',{
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
        const response = await instance().get('/articles/detail',{
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
        const response = await instance().delete('/articles/detail',{
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
        const response = await instance().get('/articles/find',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}
export const saveArticleAPI = async (article:IArticle) =>{
    console.log("게시글 api 확인 : ", JSON.stringify(article))
    try{
        const response = await instance().post('/articles/save',
        article
    )
    console.log("api 확인합니다 "+JSON.stringify(article))
    return response.data
}catch(error){
        console.log(error)
    }
}
export const modifyArticleAPI = async (article:IArticle) =>{
    console.log("게시글 api 확인 : ", JSON.stringify(article))
    try{
        const response = await instance().put('/articles/modify',
        article
    )
    console.log("api 확인합니다 "+JSON.stringify(article))
    return response.data
}catch(error){
        console.log(error)
    }
}
export const deleteArticleAPI = async (id: number) =>{
    console.log("delete api 확인합니다 "+JSON.stringify(id))
    try{
        const response = await instance().delete(`/articles/delete`,
        {params:{id}})
    console.log("delete api 확인합니다 "+JSON.stringify(id))
    return response.data
}catch(error){
        console.log(error)
    }
    {
        console.log("예외사항")
    }
}