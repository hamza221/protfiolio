import classes from './Chat.module.css'
import { useEffect, useRef, useState } from 'react'

import { FcManager } from 'react-icons/fc'
export default function Khoud({getLinkedIn}) {
    const containerRef = useRef()
    const [data, setData] = useState()
    
    useEffect(() => {
        let counter = 0
        const copy = getLinkedIn.reduce(
            (acc, value, index, arr) => {
                if (
                    index === 0 ||
                    arr[index]['type'] === arr[index - 1]['type']
                ) {
                    acc[counter].push(value)
                } else {
                    counter++
                    acc.push([value])
                }
                return acc
            },
            [[]]
        )
        setData(copy)
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [getLinkedIn])

    return (
        <div className={classes.container}>
            <div className={classes.scrollContainer} ref={containerRef}>
                {data &&
                    data.map((group, index) => {
                        if (group[0].type === 'sent') {
                            return (
                                <div
                                    key={index}
                                    className={classes.sentMessagesContainer}
                                >
                                    {group.map((obj) => (
                                        <div
                                            key={obj.id}
                                            className={classes.sent}
                  >  
                                       {obj.message==="FcManager"&&
                                        <FcManager></FcManager> 
                                        
                                        } {obj.message!=="FcManager"  && obj.message }
                                            
                                        </div>
                                    ))}
                                </div>
                            )
                        
                        } else {
                            return (
                                <div
                                    key={index}
                                    className={
                                        classes.receivedMessagesContainer
                                    }
                                >
                                    {group.map((obj) => (
                                       <>
                                            { obj.message.slice(0,5)==="image" &&  <div
                                            key={obj.id}
                                            className={classes.received}
                                           
                                        >  <img style ={{width:"100px"}}src={obj.message.slice(5)} alt="dynamically gnerated"/> </div>}

                                   
                                            {obj.message.slice(0,5)!=="image" &&       <div
                                            key={obj.id}
                                            style={{ background: "#d6d6d6"}}
                                            className={classes.received}
                                        >  {obj.message}  </div>}
                                       
                                        </>
                                    ))}
                                </div>
                            )
                        }
                    })}
            </div>
        </div>
    )
}
