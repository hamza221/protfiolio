import styled from 'styled-components'

const Phone = styled.div`
    height: 812px;
    width: 375px;
    background-color: white;
    position: fixed;
    margin-left: 50vw;
    margin-top: 50px;
    transform: translateX(-50%);
    border-radius: 30px;
    border: 9px solid black;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.25);
   
`
export const Notch = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 30px;
    background-color: black;
    transform: translateX(-50%);
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
`
export const NotifBar = styled.div`
    position: absolute;
    top: 0;
    padding: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`

export default Phone
