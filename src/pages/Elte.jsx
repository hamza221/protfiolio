import React from 'react'
import styled from 'styled-components'
import elte from '../images/elte.jpg'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import {FcManager} from "react-icons/fc";
import Khoud from '../components/trash/components/Khoud'

export default function LinkedIn(props) {
   const inputStyle={borderRadius:"30px", border:"none", backgroundColor:"#D6D6D6",height:"70%",width:"80%",paddingLeft:"10px"}
    const [message,setMesssage] =React.useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();  
        if(message!==""){
        
            switch (message.toLowerCase()) {
            
                case "taken subjects":
                    props.setData({message:"Taken Subjects",type:"sent"})
                    props.setData({message:"Analysis I + II",type:"received"})
                    props.setData({message:"Buisness Fundamentals" ,type:"received"})
                    props.setData({message:"Discrete Matematics I +II",type:"received"})
                    props.setData({message:"Introduction to Functional Programming using clean language " ,type:"received"})
                    props.setData({message:"Introduction to Imperative Programming using C language",type:"received"})
                    props.setData({message:"Introduction Programming ,problem solving and algorithms using C++ language",type:"received"})
                    props.setData({message:"Algorithms and data structure I +II" ,type:"received"})
                    props.setData({message:"Application of discrete models using Python",type:"received"})
                    props.setData({message:"Introduction to OOP using java",type:"received"})
                    props.setData({message:"Fundamentals of theory of computation I",type:"received"})
                    props.setData({message:"Databases I (SQL+PL/SQL)" ,type:"received"})
                    props.setData({message:"Numerical methods",type:"received"})
                    props.setData({message:"Web developement (HTML +CSS + basic vanilla javascript)",type:"received"})
                    break;
                case "current subjects":
                    props.setData({message:"Current Subjects",type:"sent"})
                    props.setData({message:"Artifial Intelligence",type:"received"})
                    props.setData({message:"Concurent Programming",type:"received"})
                    props.setData({message:"Databases II" ,type:"received"})
                    props.setData({message:"Fundamentals of theory of computation II",type:"received"})
                    props.setData({message:"Probability and statistics" ,type:"received"})
                    props.setData({message:"Programming theory",type:"received"})
                    props.setData({message:"Tools of software projects (Creating a multiplayer board game using MERN stack)",type:"received"})
                    props.setData({message:"Web Programming (Vanilla Javascript + PHP" ,type:"received"})
                    break;
    
                    default:
                    props.setData({message:e.target.innerHTML,type:"sent"})
                    props.setData({message:"I'm sorry for the moment i can only answer to preset messages",type:"received"})
                    break;
            }
           
      
        setMesssage("");
       
    }
}
    let IconStyle = {
        color: '#1099e5',
        fontSize: '2em',
        transform: 'translateY(20%)',
    }
   
    const Top = styled.div`
        width: 100%;
        height: 10%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        border-bottom: 1px white solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Body = styled.div`
        height: 80%;
        width: 100%;
        border-radius: 0 0 22px 22px;
    `
    const MainContainer = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    `
    const Footer = styled.div`
        height: 10%;
        width: 100%;
        border-radius: 0 0 23px 23px;
        display:flex;
        flex-direction:column;
    `

    const userStyle = {
        display: 'flex',
        width: '45%',
        justifyContent: 'space-between',
        marginTop: '1rem',
    }
    const Presets= styled.div`
    height:50%;
    display:flex;
    overflow-x:scroll;
    overflow-y:hidden;


    
    `
    const Option =styled.button`
    background-color:#006AFF;
    border:none;
    margin-right:10px;
    padding:10px;
    color: white;
    border-radius:30px;
    width:max-content;
    white-space:nowrap;
    cursor:pointer;
    
    `
       const handlePreset=(e)=>{
        
        switch (e.target.innerHTML.trim().toLowerCase()) {
            
            case "taken subjects":
                props.setData({message:"Taken Subjects",type:"sent"})
                props.setData({message:"Analysis I + II",type:"received"})
                props.setData({message:"Buisness Fundamentals" ,type:"received"})
                props.setData({message:"Discrete Matematics I +II",type:"received"})
                props.setData({message:"Introduction to Functional Programming using clean language " ,type:"received"})
                props.setData({message:"Introduction to Imperative Programming using C language",type:"received"})
                props.setData({message:"Introduction Programming ,problem solving and algorithms using C++ language",type:"received"})
                props.setData({message:"Algorithms and data structure I +II" ,type:"received"})
                props.setData({message:"Application of discrete models using Python",type:"received"})
                props.setData({message:"Introduction to OOP using java",type:"received"})
                props.setData({message:"Fundamentals of theory of computation I",type:"received"})
                props.setData({message:"Databases I (SQL+PL/SQL)" ,type:"received"})
                props.setData({message:"Numerical methods",type:"received"})
                props.setData({message:"Web developement (HTML +CSS + basic vanilla javascript)",type:"received"})
                break;
            case "current subjects":
                props.setData({message:"Current Subjects",type:"sent"})
                props.setData({message:"Artifial Intelligence",type:"received"})
                props.setData({message:"Concurent Programming",type:"received"})
                props.setData({message:"Databases II" ,type:"received"})
                props.setData({message:"Fundamentals of theory of computation II",type:"received"})
                props.setData({message:"Probability and statistics" ,type:"received"})
                props.setData({message:"Programming theory",type:"received"})
                props.setData({message:"Tools of software projects (Creating a multiplayer board game using MERN stack)",type:"received"})
                props.setData({message:"Web Programming (Vanilla Javascript + PHP" ,type:"received"})
                break;

                default:
                props.setData({message:e.target.innerHTML,type:"sent"})
                props.setData({message:"I'm sorry for the moment i can only answer to preset messages",type:"received"})
                break;
        }
       
        
    }

    const handleEmoji=(e)=> {
       
        props.setData({message:"FcManager",type:"sent"})
           
        
        
        
    }
    
    

    return (
        <MainContainer style={{ height: '100%', width: '100%' }}>
            <Top>
                <div style={userStyle}>
                    <a href="/">
                        <AiOutlineArrowLeft
                            style={IconStyle}
                        ></AiOutlineArrowLeft>
                    </a>
                    <img
                        className="elonMusk"
                        src={elte}
                        alt="elte logo"
                    />
                    <div className="ActiveStatus-Name">
                        <p style={{ fontSize: '14px', fontWeight: '900',width:"fit-content" }}>
                            {props.name}
                        </p>
                        <p
                            style={{
                                fontSize: '10px',
                                color: '#757474',
                                fontWeight: '300',
                            }}
                        >
                            Active Now
                        </p>
                    </div>
                </div>
            </Top>
            <Body>
            <Khoud getLinkedIn={props.data}></Khoud>
            </Body>
            <Footer>
                <Presets className="presets">
                    <Option  onClick={handlePreset}>Taken subjects</Option>
                    <Option  onClick={handlePreset}>Current Subjects</Option>
                </Presets>
                <form style={{height:"50%",width:"100%", borderRadius:"0 0 23px 23px",display:"flex" ,justifyContent:"center"}}onSubmit={handleSubmit}>
                    <input style ={inputStyle}autoFocus="autoFocus" name="input" type="text" className="" placeholder="Aa" value={message} onChange={(e)=>{setMesssage(e.target.value)}}/>
                    <FcManager style={{fontSize:"27px",marginLeft:"20px",cursor:"pointer"}} onClick={handleEmoji}></FcManager>
                </form>
            </Footer>
        </MainContainer>
    )
}
