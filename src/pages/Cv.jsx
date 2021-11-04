import React from 'react'
import styled from 'styled-components'
import me from '../images/me.jpg'
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
            
                case "introduction":
                    props.setData({message:"Introduction",type:"sent"})
                    props.setData({message:"Hello 😀, my name is Hamza Mahjoubi, I'm a computer science student from Tunisia currently based in Budapest,Hungary studying in ELTE University under the Stipendium Hungaricum Scholarship program, actively searching for an Internship In Budapest or remote  ",type:"received"})
                    
                    break;
            case "spoken languages":
                    props.setData({message:"Spoken Languages",type:"sent"})
                    props.setData({message:"One of the perks of coming from Tunisia is that i get to speak 2 languages natively French and Arabic , I also speak English Fluently",type:"received"})
                        
                    break;
           case "current interests":
                    props.setData({message:"Current Interests",type:"sent"})
                    props.setData({message:"I'm currently in my free time trying to get a gasp of quantum computing to fulfill my curiosity and i'm self teaching myself web development and trying to build a career in it ",type:"received"})
                        
                    break;
            case "hobbies":
                    props.setData({message:"Hobbies",type:"sent"})
                    props.setData({message:"I'm into photography and Videography essentially any digital creative activity, I also like playing Video games from now and then especially discoving forgotten retro gems from pervious generations and since I'm a bit of an extroverted person i really enjoy meeting new people, listening to their different stories and discovering their multiple backgrounds  ",type:"received"})
                            
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
            
            case "introduction":
                props.setData({message:"Introduction",type:"sent"})
                props.setData({message:"Hello 😀, my name is Hamza Mahjoubi, I'm a computer science student from Tunisia currently based in Budapest,Hungary studying in ELTE University under the Stipendium Hungaricum Scholarship program, actively searching for an Internship In Budapest or remote  ",type:"received"})
                
                break;
        case "current interests":
                props.setData({message:"Current Interests",type:"sent"})
                props.setData({message:"I'm currently in my free time trying to get a gasp of quantum computing to fulfill my curiosity and i'm self teaching myself web development and trying to build a career in it ",type:"received"})
                    
                break;
       case "spoken languages":
                props.setData({message:"Spoken Languages",type:"sent"})
                props.setData({message:"One of the perks of coming from Tunisia is that i get to speak 2 languages natively French and Arabic , I also speak English Fluently",type:"received"})
                    
                break;
        case "hobbies":
                props.setData({message:"Hobbies",type:"sent"})
                props.setData({message:"I'm into photography and Videography essentially any digital creative activity, I also like playing Video games from now and then especially discoving forgotten retro gems from pervious generations and since I'm a bit of an extroverted person i really enjoy meeting new people, listening to their different stories and discovering their multiple backgrounds  ",type:"received"})
                        
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
                        src={me}
                        alt="personal "
                    />
                    <div className="ActiveStatus-Name">
                        <p style={{ fontSize: '14px', fontWeight: '900' , whiteSpace:"nowrap"}}>
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
                    <Option  onClick={handlePreset}>Introduction</Option>
                    <Option  onClick={handlePreset}>Current Interests</Option>
                    <Option  onClick={handlePreset}>Spoken Languages</Option>
                    <Option  onClick={handlePreset}>Hobbies</Option>
                   
                </Presets>
                <form style={{height:"50%",width:"100%", borderRadius:"0 0 23px 23px",display:"flex" ,justifyContent:"center"}}onSubmit={handleSubmit}>
                    <input style ={inputStyle}autoFocus="autoFocus" name="input" type="text" className="" placeholder="Aa" value={message} onChange={(e)=>{setMesssage(e.target.value)}}/>
                    <FcManager style={{fontSize:"27px",marginLeft:"20px",cursor:"pointer"}} onClick={handleEmoji}></FcManager>
                </form>
            </Footer>
        </MainContainer>
    )
}
