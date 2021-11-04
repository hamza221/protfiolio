import React from 'react'
import styled from 'styled-components'
import linkedIn from '../images/linkedIn.png'
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
                case "experience":
                    props.setData({message:"Experience",type:"sent"})
                    props.setData({message:"Intern at visionHm" ,type:"received"})
                    props.setData({message:"Built a call automation Proogram to automate reminding patients of thir appointments via phone calls and text" ,type:"received"})
                    props.setData({message:"imagehttps://media.licdn.com/dms/image/C4D0BAQFH7qvodwgXMw/company-logo_200_200/0?e=2159024400&v=beta&t=wciBlqf_gwuqgCFv3JAnZN-fjpPfZkfRFlExNIAnYvI" ,type:"received"})
                    break;
                case "education":                
                    props.setData({message:"Education",type:"sent"})
                    props.setData({message:"Eötvös Loránd University",type:"received"})
                    props.setData({message:"Bsc, Computer science graduation in january 2023",type:"received"})
                    props.setData({message:"imagedata:image/png;base64,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",type:"received"})
                    props.setData({message:"GoMyCode",type:"received"})
                    props.setData({message:"Bootcamp in Machine Learning",type:"received"})
                    props.setData({message:"imagehttps://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gzncjuuj6hntcw2ayce8",type:"received"})
                
                    break;
                case "volunteer experience":
                    props.setData({message:"Volunteer experience",type:"sent"})
                    props.setData({message:"AIESEC Local Committee University, Tunisia" ,type:"received"})
                    props.setData({message:"Member from February unti August 2019 " ,type:"received"})
                    props.setData({message:"imagedata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEUDf/P///8Df/IAfPM6k+Axj+X///0AfvT///sAfvUAe/P//v0Ad/EAdu4AePMAde/5//0Ac+kAeOgAdfIAcOcAeeduqeYAeO0Acu611e7j8/fq9/kAe+d2rugAceP1//vR6PSRvei01e6nzeuex+rB3fGGuOkWgObk8/ZWn94xjuY8kePP5vXa7/mUwOhUm+gkg99vqe1anePv9Pmmxt5sqOKFt+QoheecyugAbO2Cs+1yptfc6/VUoONJ8HX6AAANYUlEQVR4nO2diXbbuA5ARbkhKdJavMSbvC9R6r2eafPaaf//tx4lWw4lWU5qg0zkY5w5nc40iXwLkABBADK+Pswfbvof44tDTOOmZcE++hOoli+lG1fhnfAG5E5YfLkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXOyGAmIRYpFyp9Kuuo/pZJ0QDITGYvZl0fH85aXQd7Sajw0pr8yXliGPMeafnKn9cSpQTmobb81AsFM0qTG96TzUhIeUnjI+EQo/jaknpE9OinND5wjGVCBHt3ZgOm0OUFOx3idJHpkQ1YWlBU4SIN7QqUTWhPcoA8nZZ6SNToprQbacJMX+uEI12qpqwvuJpRIr61g0RVvw0Ieaoa1lKH5oQ1YSPftZK0QvTGLupJ8RZwked7kI1YfOUDuuGxrBG+TpMO3yE6bNr3NBOc8pbzG6K0J5mCdflWyJkT+mdBuHNTUVtzq80IPe1bqXqCXtpQjSxlT4xLcqtNEmIEfYebut8yEbJqE2c8W29ySjVhOUxTgIOuqbWZajeH0pnC2GivDPXm6VRTkiCwVGHvDOa9rra6+gUE7Idigk52tbKjmnqTgkrJSSkNuU8Bly21D3pjKgltLoDHBPy6UfcWigmdKrL4zZD0dPHlLKqIzRJ6WUl+4lvN0fI5j6nt0zoLHwpnX97hGZ54yE5YMPoydGZJj2KIkKLPQxoIp9P+aR2S4RG0KGUyzrkuNO6GUIRWleXmaM9QltTYyL4KCoImVkb0ROEvz5kq1FipWyLsZe5r0AzrXdOsSghbC6zChTi6z9YGIqsdJe5Fd2L5vzFXlQQ1penCemHLERwQkLYHGXXYOQwxu4HlJgp0KE9xad1yIcV6Ge9QxTosO6fchUhoV+Ffda7BF6HbHN6mxGhqTf/AJcPT1ib5BFytPuArQac0Kp2cnWINZdDRQJOyL7kAQodTj/gAAVOWJ6e3mZQdDf6AQcocMLKKg9QIA7d4hNa2xMh99FK/T4rPCHr8ZygNEyZor7+oAaa0J3lqhCJQED7vQw0oUn6+UYayqbolewWW+QbaSi9ohOatRHCud5CyFPRCYmdKYFKykTzFbcBS2ga5MU7T9jWW4cRCqwOWeOciQoZutpPF7CEtfHZnRShVbPghNl62ZT4QaHXoWEtcvIXRxkEhY7aTGf0hgoR3haZ0DQqS/7GOkQL7Q4RlLDvnXX3QuiwaxmFrfoyS4uDKWL+j3caleJOUNKLCEhImk8xB/8X5RHizraw3XnWsaYb+19zAnBMKfe3Ra0RJtXfewzOJ99zEvuRGgdbndsNpLcIBgdCuvkvx0r3f9550Ng0A0jIdgcq/lz/ka9DLMRfONrK9QEJnXij4dPWKF+D0Wr0NmVdWgQktOOwGy9qmS6LlBqp16hBPfcNASSsx+n8TtXJvbs4ECKKejU9hgpHSIIoCSXc/douZ3qBYjb06kVGFUtHyTccIdvwcKcRvzywWjsnQKXea80wnjZLGk6LgIT7jYbiVd1wZzneYrV4tV/O2/0iERKx9nBkhyPHcJc53mLVtIM25viQzll2maF6Bi4UISGVYXT85fihZLjDHHe4ahLi7jrxNThevTiq1yIYoVX3aIjFVxXDaHVyzvorWxyenG5sqpj6W6cohM7D4UOvy4ZZf+b0pBZ/N8PHsdamw8PYRvyfwa5lKa3ogyK0SocWLv7ACGl5OQmbPaFg7I7Rof4UT7pK4xsoQjNuFl1VLYvNUc5euie0iElajf0hWeja/9Fn6vYbMMJohgnFfOoaFns6iSdkaB97Zpx5J/57oINRWNSnxlahCNn+6ET5oiT0Ocsj9LavGE6wRJExizAVr7aOpUaNUITOLlpTeNAvEePxnzxCOpHmRJH+vkrTEw4Sr/qKwlQowvLeAfC2Iz75PDcvjP2AkGOexqouj11R6FvpUxOSyjOPjLQhghQn2799JMSJngTrZXD8o2n5UxOyXRRq06hyLTtlQEJMVOxb9mub8P8UNX6BEJpGfRUFYrjTF/9ZyYtoItnIBSfmzyHe61ZY6fUf5JTA6DDs2I4+aVtsJORMSU34JQn/zhZeFM3SVVWRSwQhtJqrPWDUY8g2Z3P78vWTMNjyJiyi6oyUVbmDELJDOh/xkdhHnKdzqUTEfyQWHGGt7rzbcpSFpiCE9jo2y1+CsDY+S4iTtdBEiBn+cv3HOC0ghJVjDPM9JBzyszdQ9EHWV8hGPj1hPb7cphtmknpm+FUSEE01Zdn2AkLY9w/uwduWDKuO8DlEzv1K4QgrsQ5/V62S8YLO3uYL+p3O+zUYK4168YSPmNbM6J70jbturcM/QAidp+gQRL2t2BfZ7jweCmtOimalZjPaTP0NEz+NNd4k1Nr0DBO1Wa0/0+m3aLgsaWbmJmUJZxqnCcMQmoTZzj6iJs3Rm4R4oHFIKwghiSYoiH+FP8s+f+8U6RBpHNIK3zPTyp4O0yEOFWaqbcAnfO+anW6RzZ40hL/U1zALTmg2f6e8IUX/pXWIeE9brQK8lXaf0yrz67NMHKevrxu+Oy9IF0Ljyc9s6/PgRVfkBr8Ot5mRrItSM9sM1dM1cQi+O2+XNsgwHG+klYhnumJTeMLMoMR1mZDHTioap4MXTe4Cvv9wnSbclkh2QCTG3zX5C3BCe5wg4XgVpoDFwT/pFjGeuXqUCN9huUyYY1i4IAgtp5e8FBZO/1HPe3rhCZPjrSmaM0Isg/STDdCc63qBADQhefGSw5Pi3CH7nnH6eo5Q4F2y6YR3PIfOyvhETSd98C7ZRtIteHHsYmbO/rihJawB7s4LnYWsw9Cxxw/4uUoWu+GxFjOFJnRnEob47fEMEaaokvbL9byOBZzwt7QOKfJeG0gISTkSiv7o2E2Bu2RLfXkZcpy4LGSLJCEfK7rYTggwIUukgylKpA1Nuy3zY+5VNYxYAN5Lk3E3To7csUov8jYkzFlHeh9Yh8lEG56m2n7TFe46BkcB7zRuopcbL1LH3FLgJyIevwv48BwB7nTuJtpkh830Mku//umb+pM+JCExK23pJXIUfc/0N5XCo/Dr1/Cl+ulfkP2HxJ1KRyTMB9mPb4Wxm7zbLJTXskN257EdT2QN13bGF5hWvSO1XFA+UZ5VBCQU20himxmc7GpOXC9y7PVVd5QCErrthAYThZaSJLL+lCsf/wXZM0MThHk5X7J4/RocXiUWpFbfNOodaZP0OBrlnI1Ibcyl6Nx7UaxEsFp91qNcdhXPlZwFZhpBoqn9SbFLhCIUjo5T+dy0y53qZbpy7IaHil+ZAEXYHElq4YiP8z+3aQVS1RSlYTIO5DOcFqgq6O4gGXCenWFiP8mBwUjtqEEgQmedzFB8PdvNJE+PpHSldpI5TKUCeZRViHH7jQ/t/JICG6S2dx1Gh7W1XMrG/cA6S0iMAEvR6br26QmJ2DrkV1N/K59XoWW2ZpJV/65+eiutTRPvpX7HyZ015L+RLypdIgShUKHs6/2q+WaYQqrSYZ8qfdccBGF5zeX82o68oxqouZbU/qxyRvT1hMQMvJgQh9mnd8UoUT9Q/F34j0KXeD2hWZvIG+mq+66LTzkrh3nbVdfvfD2hNfeOG6mIvRfv7Jxwtq/+gnoKX2t5JaFpkvpMDsHW7x7oURsfVc/RL6bsDHU1IdtJ2Sc6bL77W4XuX417qO4cfK2Vkv6ztAi9OXt/2sVtS9+pbh79tYSV17MexrT3N5mzaGx0vBYnyhKnVxI6O6lOD8/qf1NAQpqvmzBWN1DxKkJSEtHMcRVy8Sn/xq2Jk7AXr2GOfqiK3K4htFi3czQzzHHjb7O7zig+RIlYr2J9vn58Egx5bGdYHAr/uvCAPMYBLcWo9wl7uSttTo9zWOglHQblYzoDo071s+nQdBpSck3Y6AU+m1RXKM4j81HNevtQ8vdyMaFpVIbyCxxnl2z3rBRWoBwIva2l4kWzVxD25ZtA76KJlqbZGtLDfsr5sq5is7ncSq2+3ElxaVFzaYFfD5eToGXvpewKYeEskKu1ejkhceWZutNLR+hVxkdT53ywmk2moUzGs+W4F0D4yIsJCXF26HodhvMJjj+EimMYD0tPw+OY+M0AolL6Gm/hjugx7Hq+eK+3p+hUU204tIai7fVbzzWE4eSk+GWjfHHhXzdh3ZPzlXkIuQqu33quIiStSWyoeNK6dFPOGUHI/clOeKCrq6auPFvUf+DDJCQvuHTNMLndRIS3ghc/t39t61HP5gfupZGYdm+/ijBd2xfmyxKzUMRm482e5o9NsLTGlYTErP3x9tOFvODS+ccVqYx/MP4WtJyoGxUoEL8+11Ze+Pvb32FQFj7kgh9Xmwr/IPYsipe9qgs9ZRAgX+psO9FWgf2GfVFgSRZhJhl5s4XNTPDEKQChwYLlYfrspHoJomWvhXefLFxGmEGgQ1OY27VKeIvPxWnxzyWbOyFuIHZORdk2mJkKljsf+wPPnzYvslJCLHWt3TCExCi5j9uXyhs3ozkSjRlSdg0MOVf/I96c/rbAdzp/NrkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXO2Hx5U5YfLl5wv8DmK7SkvEc4GcAAAAASUVORK5CYII=" ,type:"received"})
                    break;
                case "licenses and certifications":
                    props.setData({message:"Licenses and certifications",type:"sent"})
                    props.setData({message:`MTA: Introduction to Programming Using Python from Microsoft `,type:"received"})
                    props.setData({message:"imagehttps://www.marketingmag.com.au/wp-content/uploads/2012/08/Microsoft-logo-slider.jpg",type:"received"})
                    break;
                case "languages":
                    props.setData({message:"Languages",type:"sent"})
                    props.setData({message:`I speak French and Arabic natively and i'm also fluent in English`,type:"received"})
                    
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
        e.preventDefault();
        
        switch (e.target.innerHTML.trim().toLowerCase()) {
            case "experience":
                props.setData({message:"Experience",type:"sent"})
                props.setData({message:"Intern at visionHm" ,type:"received"})
                props.setData({message:"Built a call automation Proogram to automate reminding patients of thir appointments via phone calls and text" ,type:"received"})
                props.setData({message:"imagehttps://media.licdn.com/dms/image/C4D0BAQFH7qvodwgXMw/company-logo_200_200/0?e=2159024400&v=beta&t=wciBlqf_gwuqgCFv3JAnZN-fjpPfZkfRFlExNIAnYvI" ,type:"received"})
                break;
            case "education":                
                props.setData({message:"Education",type:"sent"})
                props.setData({message:"Eötvös Loránd University",type:"received"})
                props.setData({message:"Bsc, Computer science graduation in january 2023",type:"received"})
                props.setData({message:"imagedata:image/png;base64,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",type:"received"})
                props.setData({message:"GoMyCode",type:"received"})
                props.setData({message:"Bootcamp in Machine Learning",type:"received"})
                props.setData({message:"imagehttps://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gzncjuuj6hntcw2ayce8",type:"received"})
            
                break;
            case "volunteer experience":
                props.setData({message:"Volunteer experience",type:"sent"})
                props.setData({message:"AIESEC Local Committee University, Tunisia" ,type:"received"})
                props.setData({message:"Member from February unti August 2019 " ,type:"received"})
                props.setData({message:"imagedata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEUDf/P///8Df/IAfPM6k+Axj+X///0AfvT///sAfvUAe/P//v0Ad/EAdu4AePMAde/5//0Ac+kAeOgAdfIAcOcAeeduqeYAeO0Acu611e7j8/fq9/kAe+d2rugAceP1//vR6PSRvei01e6nzeuex+rB3fGGuOkWgObk8/ZWn94xjuY8kePP5vXa7/mUwOhUm+gkg99vqe1anePv9Pmmxt5sqOKFt+QoheecyugAbO2Cs+1yptfc6/VUoONJ8HX6AAANYUlEQVR4nO2diXbbuA5ARbkhKdJavMSbvC9R6r2eafPaaf//tx4lWw4lWU5qg0zkY5w5nc40iXwLkABBADK+Pswfbvof44tDTOOmZcE++hOoli+lG1fhnfAG5E5YfLkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXOyGAmIRYpFyp9Kuuo/pZJ0QDITGYvZl0fH85aXQd7Sajw0pr8yXliGPMeafnKn9cSpQTmobb81AsFM0qTG96TzUhIeUnjI+EQo/jaknpE9OinND5wjGVCBHt3ZgOm0OUFOx3idJHpkQ1YWlBU4SIN7QqUTWhPcoA8nZZ6SNToprQbacJMX+uEI12qpqwvuJpRIr61g0RVvw0Ieaoa1lKH5oQ1YSPftZK0QvTGLupJ8RZwked7kI1YfOUDuuGxrBG+TpMO3yE6bNr3NBOc8pbzG6K0J5mCdflWyJkT+mdBuHNTUVtzq80IPe1bqXqCXtpQjSxlT4xLcqtNEmIEfYebut8yEbJqE2c8W29ySjVhOUxTgIOuqbWZajeH0pnC2GivDPXm6VRTkiCwVGHvDOa9rra6+gUE7Idigk52tbKjmnqTgkrJSSkNuU8Bly21D3pjKgltLoDHBPy6UfcWigmdKrL4zZD0dPHlLKqIzRJ6WUl+4lvN0fI5j6nt0zoLHwpnX97hGZ54yE5YMPoydGZJj2KIkKLPQxoIp9P+aR2S4RG0KGUyzrkuNO6GUIRWleXmaM9QltTYyL4KCoImVkb0ROEvz5kq1FipWyLsZe5r0AzrXdOsSghbC6zChTi6z9YGIqsdJe5Fd2L5vzFXlQQ1penCemHLERwQkLYHGXXYOQwxu4HlJgp0KE9xad1yIcV6Ge9QxTosO6fchUhoV+Ffda7BF6HbHN6mxGhqTf/AJcPT1ib5BFytPuArQac0Kp2cnWINZdDRQJOyL7kAQodTj/gAAVOWJ6e3mZQdDf6AQcocMLKKg9QIA7d4hNa2xMh99FK/T4rPCHr8ZygNEyZor7+oAaa0J3lqhCJQED7vQw0oUn6+UYayqbolewWW+QbaSi9ohOatRHCud5CyFPRCYmdKYFKykTzFbcBS2ga5MU7T9jWW4cRCqwOWeOciQoZutpPF7CEtfHZnRShVbPghNl62ZT4QaHXoWEtcvIXRxkEhY7aTGf0hgoR3haZ0DQqS/7GOkQL7Q4RlLDvnXX3QuiwaxmFrfoyS4uDKWL+j3caleJOUNKLCEhImk8xB/8X5RHizraw3XnWsaYb+19zAnBMKfe3Ra0RJtXfewzOJ99zEvuRGgdbndsNpLcIBgdCuvkvx0r3f9550Ng0A0jIdgcq/lz/ka9DLMRfONrK9QEJnXij4dPWKF+D0Wr0NmVdWgQktOOwGy9qmS6LlBqp16hBPfcNASSsx+n8TtXJvbs4ECKKejU9hgpHSIIoCSXc/douZ3qBYjb06kVGFUtHyTccIdvwcKcRvzywWjsnQKXea80wnjZLGk6LgIT7jYbiVd1wZzneYrV4tV/O2/0iERKx9nBkhyPHcJc53mLVtIM25viQzll2maF6Bi4UISGVYXT85fihZLjDHHe4ahLi7jrxNThevTiq1yIYoVX3aIjFVxXDaHVyzvorWxyenG5sqpj6W6cohM7D4UOvy4ZZf+b0pBZ/N8PHsdamw8PYRvyfwa5lKa3ogyK0SocWLv7ACGl5OQmbPaFg7I7Rof4UT7pK4xsoQjNuFl1VLYvNUc5euie0iElajf0hWeja/9Fn6vYbMMJohgnFfOoaFns6iSdkaB97Zpx5J/57oINRWNSnxlahCNn+6ET5oiT0Ocsj9LavGE6wRJExizAVr7aOpUaNUITOLlpTeNAvEePxnzxCOpHmRJH+vkrTEw4Sr/qKwlQowvLeAfC2Iz75PDcvjP2AkGOexqouj11R6FvpUxOSyjOPjLQhghQn2799JMSJngTrZXD8o2n5UxOyXRRq06hyLTtlQEJMVOxb9mub8P8UNX6BEJpGfRUFYrjTF/9ZyYtoItnIBSfmzyHe61ZY6fUf5JTA6DDs2I4+aVtsJORMSU34JQn/zhZeFM3SVVWRSwQhtJqrPWDUY8g2Z3P78vWTMNjyJiyi6oyUVbmDELJDOh/xkdhHnKdzqUTEfyQWHGGt7rzbcpSFpiCE9jo2y1+CsDY+S4iTtdBEiBn+cv3HOC0ghJVjDPM9JBzyszdQ9EHWV8hGPj1hPb7cphtmknpm+FUSEE01Zdn2AkLY9w/uwduWDKuO8DlEzv1K4QgrsQ5/V62S8YLO3uYL+p3O+zUYK4168YSPmNbM6J70jbturcM/QAidp+gQRL2t2BfZ7jweCmtOimalZjPaTP0NEz+NNd4k1Nr0DBO1Wa0/0+m3aLgsaWbmJmUJZxqnCcMQmoTZzj6iJs3Rm4R4oHFIKwghiSYoiH+FP8s+f+8U6RBpHNIK3zPTyp4O0yEOFWaqbcAnfO+anW6RzZ40hL/U1zALTmg2f6e8IUX/pXWIeE9brQK8lXaf0yrz67NMHKevrxu+Oy9IF0Ljyc9s6/PgRVfkBr8Ot5mRrItSM9sM1dM1cQi+O2+XNsgwHG+klYhnumJTeMLMoMR1mZDHTioap4MXTe4Cvv9wnSbclkh2QCTG3zX5C3BCe5wg4XgVpoDFwT/pFjGeuXqUCN9huUyYY1i4IAgtp5e8FBZO/1HPe3rhCZPjrSmaM0Isg/STDdCc63qBADQhefGSw5Pi3CH7nnH6eo5Q4F2y6YR3PIfOyvhETSd98C7ZRtIteHHsYmbO/rihJawB7s4LnYWsw9Cxxw/4uUoWu+GxFjOFJnRnEob47fEMEaaokvbL9byOBZzwt7QOKfJeG0gISTkSiv7o2E2Bu2RLfXkZcpy4LGSLJCEfK7rYTggwIUukgylKpA1Nuy3zY+5VNYxYAN5Lk3E3To7csUov8jYkzFlHeh9Yh8lEG56m2n7TFe46BkcB7zRuopcbL1LH3FLgJyIevwv48BwB7nTuJtpkh830Mku//umb+pM+JCExK23pJXIUfc/0N5XCo/Dr1/Cl+ulfkP2HxJ1KRyTMB9mPb4Wxm7zbLJTXskN257EdT2QN13bGF5hWvSO1XFA+UZ5VBCQU20himxmc7GpOXC9y7PVVd5QCErrthAYThZaSJLL+lCsf/wXZM0MThHk5X7J4/RocXiUWpFbfNOodaZP0OBrlnI1Ibcyl6Nx7UaxEsFp91qNcdhXPlZwFZhpBoqn9SbFLhCIUjo5T+dy0y53qZbpy7IaHil+ZAEXYHElq4YiP8z+3aQVS1RSlYTIO5DOcFqgq6O4gGXCenWFiP8mBwUjtqEEgQmedzFB8PdvNJE+PpHSldpI5TKUCeZRViHH7jQ/t/JICG6S2dx1Gh7W1XMrG/cA6S0iMAEvR6br26QmJ2DrkV1N/K59XoWW2ZpJV/65+eiutTRPvpX7HyZ015L+RLypdIgShUKHs6/2q+WaYQqrSYZ8qfdccBGF5zeX82o68oxqouZbU/qxyRvT1hMQMvJgQh9mnd8UoUT9Q/F34j0KXeD2hWZvIG+mq+66LTzkrh3nbVdfvfD2hNfeOG6mIvRfv7Jxwtq/+gnoKX2t5JaFpkvpMDsHW7x7oURsfVc/RL6bsDHU1IdtJ2Sc6bL77W4XuX417qO4cfK2Vkv6ztAi9OXt/2sVtS9+pbh79tYSV17MexrT3N5mzaGx0vBYnyhKnVxI6O6lOD8/qf1NAQpqvmzBWN1DxKkJSEtHMcRVy8Sn/xq2Jk7AXr2GOfqiK3K4htFi3czQzzHHjb7O7zig+RIlYr2J9vn58Egx5bGdYHAr/uvCAPMYBLcWo9wl7uSttTo9zWOglHQblYzoDo071s+nQdBpSck3Y6AU+m1RXKM4j81HNevtQ8vdyMaFpVIbyCxxnl2z3rBRWoBwIva2l4kWzVxD25ZtA76KJlqbZGtLDfsr5sq5is7ncSq2+3ElxaVFzaYFfD5eToGXvpewKYeEskKu1ejkhceWZutNLR+hVxkdT53ywmk2moUzGs+W4F0D4yIsJCXF26HodhvMJjj+EimMYD0tPw+OY+M0AolL6Gm/hjugx7Hq+eK+3p+hUU204tIai7fVbzzWE4eSk+GWjfHHhXzdh3ZPzlXkIuQqu33quIiStSWyoeNK6dFPOGUHI/clOeKCrq6auPFvUf+DDJCQvuHTNMLndRIS3ghc/t39t61HP5gfupZGYdm+/ijBd2xfmyxKzUMRm482e5o9NsLTGlYTErP3x9tOFvODS+ccVqYx/MP4WtJyoGxUoEL8+11Ze+Pvb32FQFj7kgh9Xmwr/IPYsipe9qgs9ZRAgX+psO9FWgf2GfVFgSRZhJhl5s4XNTPDEKQChwYLlYfrspHoJomWvhXefLFxGmEGgQ1OY27VKeIvPxWnxzyWbOyFuIHZORdk2mJkKljsf+wPPnzYvslJCLHWt3TCExCi5j9uXyhs3ozkSjRlSdg0MOVf/I96c/rbAdzp/NrkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXO2Hx5U5YfLkTFl/uhMWXO2Hx5U5YfLl5wv8DmK7SkvEc4GcAAAAASUVORK5CYII=" ,type:"received"})
                break;
            case "licenses and certifications":
                props.setData({message:"Licenses and certifications",type:"sent"})
                props.setData({message:`MTA: Introduction to Programming Using Python from Microsoft `,type:"received"})
                props.setData({message:"imagehttps://www.marketingmag.com.au/wp-content/uploads/2012/08/Microsoft-logo-slider.jpg",type:"received"})
                break;
            case "languages":
                props.setData({message:"Languages",type:"sent"})
                props.setData({message:`I speak French and Arabic natively and i'm also fluent in English`,type:"received"})
                
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
                        src={linkedIn}
                        alt="linkedIn"
                    />
                    <div className="ActiveStatus-Name">
                        <p style={{ fontSize: '14px', fontWeight: '900' }}>
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
                    <Option  onClick={handlePreset}>Experience</Option>
                    <Option  onClick={handlePreset}>Education</Option>
                    <Option  onClick={handlePreset}>Licenses and certifications</Option>
                    <Option  onClick={handlePreset}>Volunteer experience</Option>
                    <Option  onClick={handlePreset}>Languages</Option>
                </Presets>
                <form style={{height:"50%",width:"100%", borderRadius:"0 0 23px 23px",display:"flex" ,justifyContent:"center"}}onSubmit={handleSubmit}>
                    <input style ={inputStyle}autoFocus="autoFocus" name="input" type="text" className="" placeholder="Aa" value={message} onChange={(e)=>{setMesssage(e.target.value)}}/>
                    <FcManager style={{fontSize:"27px",marginLeft:"20px",cursor:"pointer"}} onClick={handleEmoji}></FcManager>
                </form>
            </Footer>
        </MainContainer>
    )
}


