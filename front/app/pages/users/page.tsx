'use client'

import { IUser } from "@/app/components/users/model/user.model"
import { findAllUsers } from "@/app/components/users/service/user.service"
import { getAllUsers } from "@/app/components/users/service/user.slice"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Userpage: NextPage =  () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const allUsers: [] = useSelector(getAllUsers)
    if(allUsers !== undefined){
        console.log('allUsers is not undefined')
        
        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

useEffect(()=>{
    dispatch(findAllUsers(1))
},[])
return(<>
<h2>유저 목록</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>addressID</th>
                    <th>job</th>
                    <th>height</th>
                    <th>weight</th>
                </tr>
            </thead>
            <tbody>
                {users.map((props: IUser) => (
                    <tr key={props.id}>
                        <td>{props.username}</td>
                        <td>{props.password}</td>
                        <td>{props.name}</td>
                        <td>{props.job}</td>
                    </tr>
                ))}

            </tbody>
        </table>
</>)
}
export default Userpage;

