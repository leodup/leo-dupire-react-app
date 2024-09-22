// import React from 'react';
import './Music.css';
import { ExternalLink } from 'react-external-link';
import TIKTOK from "../images/PlayImg/TikTok.png";
import INSTA from "../images/PlayImg/Insta.png";
import YOUTUBE from "../images/PlayImg/Youtube.png";
import EMAIL from "../images/PlayImg/Email.png";
import Single from './Single.js';
// import RotateComponent from './RotateComponent';
import Leo from "../images/PlayImg/L.png";
import LeoDisk from "../images/PlayImg/Disk.png";
import LeoName from "../images/PlayImg/Name.png";
import Rusty from "../images/PlayImg/Rusty.jpeg";
// import COVER from "../images/PlayImg/CoverArt1.png";
import COVERs from "../images/PlayImg/CoverArt.png";
import VID from "../videos/WebBackground.mp4";

const Music = () => {

    // videoRef = React.createRef();

    // togglePlay = () => {
    //     const video = this.videoRef.current;
    //     if (video.paused) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // };

    return (
        <>
            <div className='cont'>
                <div className='ContCont'>
                    <div className='Cont'> 
                        <div className='crt'>
                            <div className='vid'>
                                <video autoPlay muted loop playsInline className='videoTag'>
                                    <source src={VID} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top' style={{ position: 'absolute' }}>
                    <div class="container2">
                        <div className='HeaderName'>
                            <div className='HeaderNameInner'>
                                <p>Léo<br></br>Dupire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* BODY */}
            <div className='corpus'>
                <div className='black'>
                    <div className='releases'>
                        <h1>SINGLES</h1>
                        <div className='songs'>
                            <div className='divider'></div>
                            <div className='song'>
                                <p className='record'>SIRENS</p>
                                <p className='recStat'>10/18</p>
                            </div>
                            <div className='divider'></div>
                            <div className='song'>
                                <p className='record'>MAD MAN</p>
                                <p className='recStat'>11/29</p>
                            </div>
                            <div className='divider'></div>
                            <div className='song'>
                                <p className='record'>NO TIME</p>
                                <p className='recStat' >01/10</p>
                            </div>
                            <div className='divider'></div>
                        </div>
                    </div>
                </div>
                <div className='contCorpus' style={{ height: "60vh"}}>
                    <div class="bottom2" style={{ height: "60vh"}}>
                        <div className='ContCont'>
                            <div className='Cont2'>
                                <div className='crt'></div>
                            </div>
                        </div>
                    </div>
                    <div className='top2'>
                        <div className='releases'>
                            <h1 style={{ color: "rgb(127 163 176)" }}>LIVE</h1>
                            <div className='songs'>
                                <div className='divider2'></div>
                                <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>NYC</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>Coming Soon</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>More to follow</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>...</p>
                                </div>
                                <div className='divider2'></div>
                                {/* <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>YOUTUBE</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>leodupire1293</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>LINKEDIN</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>Léo Dupire</p>
                                </div>
                                <div className='divider2'></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='black' style={{ backgroundColor: "black"}}>
                    <div className='releases' style={{ paddingBottom: "5rem"}}>
                        <h1 style={{ color: "rgb(127 163 176)" }}>FOLLOW</h1>
                        <div className='songs' style={{ padding: "2rem"}}>
                            <div className='SocialIcons'>
                                <ExternalLink href="https://www.linkedin.com/in/l%C3%A9o-dupire-47387a183/">
                                    <img
                                        className="SocialIcon"
                                        id="fixB"
                                        src={TIKTOK}
                                        alt="LinkedIn Image"
                                    />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/leodup">
                                    <img
                                        className="SocialIcon"
                                        id="fixB"
                                        src={INSTA}
                                        alt="Github Image"
                                    />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/leodup">
                                    <img
                                        className="SocialIcon"
                                        id="fixB"
                                        src={YOUTUBE}
                                        alt="Github Image"
                                    />
                                </ExternalLink>
                                <a href="mailto: leo@leodupire.com">
                                    <img
                                        className="SocialIcon"
                                        id="fixB"
                                        src={EMAIL}
                                        alt="Email Image"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
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

export default Music;