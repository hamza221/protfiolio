import React from 'react'
import styled from 'styled-components'

import linkedIn from '../images/linkedIn.png' 
import gh from '../images/github.png' 
import me from '../images/me.jpg' 
import elte from '../images/elte.jpg'
const ActiveContainer =styled.div`
    width:100%;

    height:10%;
    display:flex;
    justify-content:space-between;
    


`
const ActiveImage =styled.div`
width:4.5em;
height:4.5em;
border-radius:50%;
background:url(${props => props.background});
position: relative;
background-size: 100% 100%;
cursor: pointer;
`

export const ActiveTickBack=styled.div`
background-color:white;
height:25%;
width:25%; 
position:absolute;
bottom:3% ;
right:3%;
border-radius:50%;
`
export const ActiveTick=styled.div`
background-color:#5DDE20;
height:60%; 
width:60%;
position:absolute;
bottom:20%;
right:20%;

border-radius:50%;
`
const handleClick=(link)=>{
    window.location.href = link;  
}
export default function Active() {


    return (
        <ActiveContainer>
         <ActiveImage  onClick={()=>{
            handleClick("/Cv")
        }} background={me}>
             <ActiveTickBack>
                <ActiveTick></ActiveTick> 
             </ActiveTickBack>
             </ActiveImage>
         
         <ActiveImage  onClick={()=>{
            handleClick("/LinkedIn")
        }} background={linkedIn}>
         <ActiveTickBack>
                <ActiveTick></ActiveTick> 
             </ActiveTickBack>
         </ActiveImage>
         <ActiveImage  onClick={()=>{
            handleClick("/Github")
        }} background={gh}>
         <ActiveTickBack>
                <ActiveTick></ActiveTick> 
             </ActiveTickBack>
         </ActiveImage>
         <ActiveImage  onClick={()=>{
            handleClick("/Elte")
        }} background={elte}>
         <ActiveTickBack>
                <ActiveTick></ActiveTick> 
             </ActiveTickBack>
         </ActiveImage>
        </ActiveContainer>
    )
}

