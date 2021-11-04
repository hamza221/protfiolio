import elon from "../images/elon.png";
import styled from "styled-components";
import {FaCamera,FaGithub} from "react-icons/fa"

import React from 'react'
const Profiler =styled.div`
width:100%;
display:flex;
justify-content:space-between;
height:10%;





`
export const PhoneContainer = styled.div`
height:94%;
padding:5px;
display:flex;
flex-direction:column;




margin-top:10%;
`


export default function Profile(props) {
    const github ="https://github.com/hamza221";
    const handleCamera=()=>{
        props.setCamera(true);
    }
 
    return (
       <Profiler>
           <div style={{display:"flex"  }}>
           <img className="elonMusk" src={elon} alt="old_picture_of_elon_musk"/>
           <h1 style={{fontSize:"1.5rem" ,marginLeft:"15px",transform: "translateY(10%)" }}>Chats</h1>
           </div>
           <div style={{display:"flex",marginRight:"10px" }}>
           <div className="circle"><FaCamera style={{marginTop:"3px",cursor:"pointer"}} onClick={handleCamera}></FaCamera></div>
           <div className="circle"><a style={{textDecoration:"none" }} href={github}target="_blank" rel="noreferrer"> <FaGithub style={{marginTop:"3px",cursor:"pointer" ,color:"black"}} ></FaGithub> </a></div>
           </div>

       </Profiler> 
    )
}

