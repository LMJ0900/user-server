'use client'

import UserColumns from "@/app/components/users/module/columns"
import { IUser } from "@/app/components/users/model/user.model"
import { findAllUsers, findUserById } from "@/app/components/users/service/user.service"
import { getAllUsers, getUserById } from "@/app/components/users/service/user.slice"
import { Button, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MyTypography } from "@/app/components/common/style/cell"

export default function UserDetail({params}:any){

    const dispatch = useDispatch()
    const user:IUser = useSelector(getUserById)
    const handleClick = () => {
        alert('삭제되었습니다')
       
      }
      const handleClick1 = () => {
        alert('수정되었습니다')
      }
      const [username, setUsername] = useState('')
      const onchangtext = (e:any) =>{
        setUsername(e.target.value)
      }

    useEffect(()=>{
        dispatch(findUserById(params.id))
    },[])

    return(<>
    <h2>{params.id} 상세페이지 </h2>
        <span> {MyTypography('ID :'+params.id,"1.5rem")}</span>
        <span>{MyTypography('아이디 :'+user.username,"1.5rem")} </span>
        <input type="text" onChange={onchangtext} />
        <Button onClick={handleClick1}>수정</Button>
        <span>{MyTypography('비밀번호 :'+user.password,"1.5rem")} </span>
        <span>{MyTypography('이름 :'+user.name,"1.5rem")} </span>
        <span>{MyTypography('전화번호 :'+user.phone,"1.5rem")} </span>
        <span>{MyTypography('직업 :'+user.job,"1.5rem")} </span>
        <Button onClick={handleClick}> 삭제 </Button>
    </>)

}