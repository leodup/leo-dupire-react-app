// import './Play.css';
import './Play2.css';
import Single from './Single.js';
// import RotateComponent from './RotateComponent';
import Leo from "../images/PlayImg/L.png";
import LeoDisk from "../images/PlayImg/Disk.png";
import LeoName from "../images/PlayImg/Name.png";
import Rusty from "../images/PlayImg/Rusty.jpeg";
// import COVER from "../images/PlayImg/CoverArt1.png";
import COVERs from "../images/PlayImg/CoverArt.png";
import VID from "../videos/WebBackground.mp4";

const Play = () => {

    return (
        <>
            <div className='cont'>
                <div className='ContCont'>
                    <div className='Cont'> 
                        <div className='crt'>
                            <div className='vid'>
                                <video className='videoTag' autoPlay loop muted>
                                    <source src={VID} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="bottom" style={{ position: 'absolute' }}>
                    <div className='ContCont'>
                        <div className='Cont1'>
                            <div className='container'>
                                <div className='HeaderName'>
                                    <div className='HeaderNameInner'>
                                        <img
                                            src={LeoDisk}
                                            alt="Léo name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='top' style={{ position: 'absolute' }}>
                    <div class="container2">
                        <div className='HeaderName'>
                            <div className='HeaderNameInner'>
                                {/* <img
                                    src={LeoName}
                                    alt="Léo name"
                                /> */}
                                <p>Léo Dupire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='corpus'>
                <div className='black'>
                    <div className='releases'>
                        <h1>SINGLES</h1>
                        <div className='songs'>
                            <div className='figs'>
                                <div className='record' style={{ marginTop: '6vh', height: '5vh' }}>
                                </div>
                                <div className='record'>
                                    <Single single="Sirens"></Single>
                                </div>
                                <div className='record'>
                                    <Single single="Mad Man" theta="90deg"></Single>
                                </div>
                                <div className='record'>
                                    <Single single="No Time" theta="125deg"></Single>
                                </div>
                            </div>
                            <div className='figText'>
                                <div className='record' style={{ marginTop: '6vh', height: '5vh' }}>
                                </div>
                                <div className='record2'>
                                    <p className='rec'>10/18</p>
                                </div>
                                <div className='record2'>
                                    <p className='rec'>11/29</p>
                                </div>
                                <div className='record2'>
                                    <p className='rec'>01/10</p>
                                </div>
                            </div>

                            {/* <div className='song'>
                                <div className='record'>
                                <div className='record'>
                                    <div className='record'>
                                        <Single single="Sirens"></Single>
                                    </div>
                                    <p className='rec'>10/18</p></div>
                                </div>
                            </div>
                            <div className='song'>
                                <div className='record'>
                                    <p>11/29</p>
                                </div>
                                <div>
                                    <Single single="Mad Man" theta="90deg"></Single>
                                </div>
                            </div>
                            <div className='song'>
                                <div className='record'>
                                    <p>01/10</p>
                                </div>
                                <div>
                                    <Single single="No Time" theta="125deg"></Single>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className='blackInner'>
                    </div> */}
                </div>
                <div className='contCorpus'>
                    <div class="bottom2">
                        <div className='ContCont'>
                            <div className='Cont2'>
                                <div className='crt'></div>
                            </div>
                        </div>
                    </div>
                    <div className='top2'>
                    </div>
                </div>
                <div className='shows'>
                    <h1>Shows</h1>
                </div>
                <div className='socials'>
                    <h1>Socials</h1>
                </div>
            </div>
            <svg className="svg" style={{ height: 0 }}>
                <filter id="warp1">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.005" 
                        numOctaves="3" 
                        result="waves"
                    ></feTurbulence>
                    <feColorMatrix in="waves" type="hueRotate">
                        <animate 
                            attributeName="values" 
                            values="0;360" 
                            dur="12s" 
                            repeatCount="indefinite" 
                        ></animate>
                    </feColorMatrix>
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        scale="50" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    ></feDisplacementMap>
                </filter>
                <svg className="svg" style={{ height: 0 }}>
                <filter id="warp2">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.005" 
                        numOctaves="3" 
                        result="waves"
                    ></feTurbulence>
                    <feColorMatrix in="waves" type="hueRotate">
                        <animate 
                            attributeName="values" 
                            values="0;360" 
                            dur="6s" 
                            repeatCount="indefinite" 
                        ></animate>
                    </feColorMatrix>
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        scale="40" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    ></feDisplacementMap>
                </filter>
            </svg>
            </svg>
        </>
    );
}

export default Play;