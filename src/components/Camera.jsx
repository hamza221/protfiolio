import React from 'react'
import Webcam from 'react-webcam'
import { motion } from 'framer-motion'
export default function Camera(props) {
    const videoConstraints = {
        width: 375.5,
        height: 780,
        facingMode: 'environment',
    }
    const handleClose = () => {
        props.setCamera(false)
        props.setGalleryModal(false)
    }
    const webcamRef = React.useRef(null)

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        props.setprev(true)
        props.setImg((prev) => [...prev, imageSrc])
    }, [webcamRef,props])
    return (
        <>
            <Webcam
            
                audio={false}
                height={780}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={375.5}
                videoConstraints={videoConstraints}
                className="webcam"
            />
            <div className="closeCamera" onClick={handleClose}>
                x
            </div>
            <div className="cameraBottom">
                {props.prev && (
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            props.setGalleryModal(true)
                            props.setCamera(false)
                        }}
                        className="savedImage"
                        src={props.img[props.img.length - 1]}
                    />
                )}
                <div className="takePic" onClick={capture}></div>
            </div>
        </>
    )
}
