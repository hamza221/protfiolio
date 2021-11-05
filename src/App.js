import './App.css'
import Iphone from './components/Iphone'
import React from 'react'
import Gallery from './components/Gallery'
import Profile, { PhoneContainer } from './components/Profile'
import Camera from './components/Camera'
import Active from './components/Active'
import Chat from './components/Chat'
import linkedIn from './images/linkedIn.png'
import gh from './images/github.png'
import me from './images/me.jpg'
import elte from './images/elte.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LinkedIn from './pages/LinkedIn'
import Github from './pages/Github'
import Cv from './pages/Cv'
import Elte from './pages/Elte'
import { v4 as uuid } from 'uuid'

function App() {
    const [img, setImg] = React.useState([])
    const [camera, setCamera] = React.useState(false)
    const [galleryModal, setGalleryModal] = React.useState(false)
    const [prev, setprev] = React.useState(false)
    const [linkedInData, setLinkedInData] = React.useState([
        {
            id: 0,
            message:
                'Click on the suggested fields or send them as a message to get the appropriate answer',
            type: 'received',
        },
    ])
    const [ghData, setGhData] = React.useState([
        {
            id: 0,
            message:
                'Click on the suggested fields or send them as a message to get the appropriate answer',
            type: 'received',
        },
    ])
    const [cvData, setCvData] = React.useState([
        {
            id: 0,
            message:
                'Click on the suggested fields or send them as a message to get the appropriate answer',
            type: 'received',
        },
    ])
    const [elteData, setElteData] = React.useState([
        {
            id: 0,
            message:
                'Click on the suggested fields or send them as a message to get the appropriate answer',
            type: 'received',
        },
    ])

    const setLinkedIn = (data) => {
        data.id = uuid()
        setLinkedInData((prev) => [...prev, data])
    }
    const setCv = (data) => {
        data.id = uuid()
        setCvData((prev) => [...prev, data])
    }
    const setElte = (data) => {
        data.id = uuid()
        setElteData((prev) => [...prev, data])
    }
    const setGh = (data) => {
        data.id = uuid()
        setGhData((prev) => [...prev, data])
    }

    return (
        <Router>
            <Iphone className="lekbir">
                <Switch>
                    <Route path="/" exact>
                        {camera && (
                            <PhoneContainer style={{ padding: '0' }}>
                                <Camera
                                    prev={prev}
                                    setprev={setprev}
                                    img={img}
                                    setImg={setImg}
                                    setCamera={setCamera}
                                    setGalleryModal={setGalleryModal}
                                />
                            </PhoneContainer>
                        )}
                        {galleryModal && (
                            <PhoneContainer>
                                <Gallery
                                    setGalleryModal={setGalleryModal}
                                    setCamera={setCamera}
                                    img={img}
                                ></Gallery>
                            </PhoneContainer>
                        )}
                        {!camera && !galleryModal && (
                            <PhoneContainer>
                                <Profile setCamera={setCamera}></Profile>
                                <Active></Active>
                                <div
                                    style={{ marginTop: '30px', height: '1px' }}
                                ></div>

                                <Chat
                                    LINK="/linkedIn"
                                    image={linkedIn}
                                    name="linkedIn"
                                    time=""
                                    text="LinkedIN: My Experience"
                                ></Chat>

                                <Chat
                                    LINK="/Github"
                                    image={gh}
                                    name="GitHub"
                                    time=""
                                    text="GitHub: My Pervious Projects"
                                ></Chat>
                                <Chat
                                    LINK="/Elte"
                                    image={elte}
                                    name="Elte"
                                    time=""
                                    text="Elte: My Academic Progress "
                                ></Chat>
                                <Chat
                                    LINK="/Cv"
                                    image={me}
                                    name="Hamza Mahjoubi"
                                    time=""
                                    text="Hamza: Get to know me"
                                ></Chat>
                            </PhoneContainer>
                        )}
                    </Route>
                    <Route path="/linkedIn">
                        <PhoneContainer style={{ padding: '0px' }}>
                            <LinkedIn
                                data={linkedInData}
                                setData={setLinkedIn}
                                name="LinkedIn"
                            ></LinkedIn>
                        </PhoneContainer>
                    </Route>
                    <Route path="/Github">
                        <PhoneContainer style={{ padding: '0px' }}>
                            <Github
                                data={ghData}
                                setData={setGh}
                                name="GitHub"
                            ></Github>
                        </PhoneContainer>
                    </Route>
                    <Route path="/Cv">
                        <PhoneContainer style={{ padding: '0px' }}>
                            <Cv
                                data={cvData}
                                setData={setCv}
                                name="Hamza Mahjoubi"
                            ></Cv>
                        </PhoneContainer>
                    </Route>
                    <Route path="/Elte">
                        <PhoneContainer style={{ padding: '0px' }}>
                            <Elte
                                data={elteData}
                                setData={setElte}
                                name="ELTE"
                            ></Elte>
                        </PhoneContainer>
                    </Route>
                </Switch>
            </Iphone>
        </Router>
    )
}

export default App
