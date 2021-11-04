import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
export default function Gallery(props) {
    const dropIn = {
        hidden: {
            x: '50vw',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            x: '-50vw',
            opacity: 0,
        },
    }

    return (
        <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="gallery"
        >
            <div className="galleryHeader">
            
              <BiArrowBack onClick={()=>{
                props.setCamera(true);
                  props.setGalleryModal(false);
              }} style={{marginLeft:"10px" ,cursor:"pointer",fontSize:"30px",transform:"translateY(10px)", color:"white"}}></BiArrowBack> 
              <h1 style={{color:"white" ,transform:"translateY(5px)"}}>Gallery</h1> 
              <AiOutlineClose style={{marginRight:"20px",color:"white",fontSize:"30px",transform:"translateY(10px)",cursor:"pointer"}} onClick={()=>{
                  window.location.href="/"
              }}></AiOutlineClose>
              
            </div>
            <div className="gallery-body">
                {props.img.map((image, i) => {
                    return (
                        <div className="image-wrapper" key={i}>
                            <img
                                src={image}
                                alt="gallery"
                                className="gallery-image"
                            />
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}
