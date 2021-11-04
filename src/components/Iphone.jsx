import React, {useEffect,useState} from 'react'
import Phone,{Notch,NotifBar} from "./Phone"
import { IoCellular,IoWifi,IoBatteryFull } from 'react-icons/io5';


export default function Iphone({children}) {
    const [time,setTime] = useState(new Date());
    useEffect(() => {
        setTime(new Date())
        setInterval(() => {
          setTime(new Date())
        }, 1000);
       
    }, [])
    return (
        <Phone>
        <Notch></Notch>
        <NotifBar>
          
          <div style={{fontSize:"0.7rem", fontWeight:700}}>
            { time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
          </div>
          <div className="statusBar">
            <IoCellular/>
            <IoWifi></IoWifi>
            <IoBatteryFull style={{color:"#48E02F"}}></IoBatteryFull>
          </div>
        </NotifBar>
        {children}
      </Phone>
    )
}
