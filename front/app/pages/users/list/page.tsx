'use client'

import UserColumns from "@/app/components/users/module/columns"
import { IUser } from "@/app/components/users/model/user.model"
import { findAllUsers } from "@/app/components/users/service/user.service"
import { getAllUsers } from "@/app/components/users/service/user.slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Userpage: NextPage =  () => {
    const [pageSize, setPageSize] = useState(5); // 4-1
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
        <div style={{ height: "100%", width: "100%" }}>
  {allUsers && <DataGrid // 🔥 4
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
</>)
}
export default Userpage;

