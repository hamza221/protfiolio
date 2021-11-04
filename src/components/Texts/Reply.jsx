import React from 'react'
import { FcManager } from 'react-icons/fc'
import styled from 'styled-components'

export default function Reply(props) {

const Container =styled.div`

width:100%;
height:fit-content;
display:flex;
justify-content:flex-end;

`  
const SubContainer =styled.div`
display:flex;
flex-direction:column;
`
const Bubble =styled.div`
    background-color:#006AFF;
    color:white;
border-radius:30px;
padding:8px;
margin-bottom:2px;
margin-right:5px;

`

    return (
      <Container>
          <SubContainer>
            {props.reply==="FcManager" && <Bubble><FcManager></FcManager></Bubble> }
            {props.reply!=="FcManager" &&
              <Bubble>{props.reply}</Bubble>}
              
          </SubContainer>
          
              
           
        </Container>
    )
}
