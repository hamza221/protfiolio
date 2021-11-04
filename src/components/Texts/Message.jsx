import React from 'react'
import styled from 'styled-components'

export default function Message(props) {
const Bubble =styled.div`
background-color:#D6D6D6;
border-radius:30px;
width:fit-content;
max-width:70%;
padding:8px;
margin-bottom:2px;
margin-left:10px;

`

const Bubble2 =styled.div`
background-color:#D6D6D6;
            border-radius:30px; 
width:fit-content;
max-width:70%;
padding:8px;
margin-bottom:0 !important;
margin-left:3rem;

`
const SmallerContainer= styled.div`
display:flex; 
flex-direction:column;


`

const Container =styled.div`
height:fit-content;
width:fit-content;
display:flex;
padding:6px;


`
const Container2 =styled.div`
height:fit-content;
width:fit-content;
display:flex;
padding-bottom:3px;


`


    return (
      <>
        { props.new &&      
        
        <Container>
            <img className="elonMusk" src={props.image} alt ="profile"/>
            <SmallerContainer>
                <Bubble>{props.text}</Bubble>
                
                
                
            </SmallerContainer>
            </Container>
            
       }
            {
              
               !props.new &&
               <Container2>
               
               <SmallerContainer>
                   <Bubble2>{props.text}</Bubble2>
                   
                   
               </SmallerContainer>
        </Container2>

            }

          </>  
      
    )
}
