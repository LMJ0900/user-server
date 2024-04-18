'use client'
import { Button } from "@mui/material";
import { count } from "console";
import { useState } from "react";


export default function Counter(){

    const [counter, setCounter] = useState(0)
    const handleClickPlus = (e : any) =>{
        setCounter(counter+1)
    }
    const handleClickMinus = (e : any) =>{
        setCounter(counter-1)
    }
    return(
    <>
    <h1> counter : {counter} </h1>
    <Button onClick={handleClickPlus}> + </Button>
    <Button onClick={handleClickMinus}> - </Button>
    </>
    )
}