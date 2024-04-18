'use client'
import { Button, Icon } from "@mui/material";
import { count } from "console";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useSelector,useDispatch} from 'react-redux'
import{handlePlus, handleMinus, getCount} from '@/app/components/counter/service/counter.slice'
import { NextPage } from "next";


const ReduxCounterPage : NextPage = () => {
    const count = useSelector(getCount)
    const dispatch = useDispatch()

    return(
    <>
    <h1> Redux counter : {count} </h1>
   

    <Button onClick={()=>dispatch(handlePlus())}><AddIcon/> </Button>
    <Button onClick={()=>dispatch(handleMinus())}><RemoveIcon/></Button>
    </>
    )
}

export default ReduxCounterPage;