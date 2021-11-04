import React from 'react'
import styled from 'styled-components'



export default function Chat(props) {
    const handleClick=()=>{
        window.location.href = props.LINK;  
    }
const Wrap =styled.div`
 width:80%;
margin-left:30px;
 height:10%;
margin-bottom:20px;
display:flex;
align-content:space-between;
cursor: pointer;
`
const ActiveImage =styled.div`
width:20%;
height:80%;
border-radius:50%;
background:url(${props => props.background});

background-size: 100% 100%;

`
const Text = styled.p`
  font-size: 15px;
    font-weight: 500;
    padding-top:8px;
    margin-left:10px;
`

    return (
        <Wrap onClick={handleClick}> 
            
           <ActiveImage background={props.image}></ActiveImage>
                <div >
                    <Text >{props.name}</Text>
                    <Text >{`${props.text}  ${props.time}`}</Text>
                </div>
          
        </Wrap>
    )
}
