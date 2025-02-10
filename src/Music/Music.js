// import React from 'react';
import './Music.css';
import { useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import TIKTOK from "../images/MusicImg/TikTok.png";
import INSTA from "../images/MusicImg/Insta.png";
import YOUTUBE from "../images/MusicImg/Youtube.png";
import EMAIL from "../images/MusicImg/Email.png";
import SPOTIFY from "../images/MusicImg/Spotify.png";
import APPLEMUSIC from "../images/MusicImg/AppleMusic.png";
import AMAZONMUSIC from "../images/MusicImg/AmazonMusic.png";
import DEEZER from "../images/MusicImg/Deezer.png";
import Single from './Single.js';
import SVG from './SVG.js';
// import RotateComponent from './RotateComponent';
import Leo from "../images/MusicImg/L.png";
import LeoDisk from "../images/MusicImg/Disk.png";
import LeoName from "../images/MusicImg/Name.png";
import Rusty from "../images/MusicImg/Rusty.jpeg";
// import COVER from "../images/MusicImg/CoverArt1.png";
import SIRENSCOVER from "../images/MusicImg/SirensCoverArt.jpg";
import VIDLand from "../videos/WebBackground.mp4";
import VIDPort from "../videos/WebBackgroundPortrait.mov";

const Music = () => {

    const height2 = "70vh";

    let VID;
    if (window.innerWidth < 1000) {
        VID = VIDPort;
    } else {
        VID = VIDLand;
    }

    const [height3, setHeight3] = useState("23rem");
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setHeight3("23rem");
            } else {
                setHeight3("16rem");
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='cont'>
                <div className='ContCont'>
                    <div className='Cont'> 
                        <div className='crt' id='head'>
                            <div className='vid'>
                                <video autoPlay muted loop playsInline>
                                    <source src={VID} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top' style={{ position: 'absolute' }}>
                <div className='headerSocial'>
                    <div class="container2">
                        <div className='HeaderName'>
                            <div className='HeaderNameInner'>
                                <p>Léo<br></br>Dupire</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='songs' style={{ bottom: "0rem", padding: "2rem" }}>
                        <div className='SocialIcons'>
                            <ExternalLink href="https://www.tiktok.com/@leodupire">
                                <img
                                    className="SocialIcon"
                                    style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                    id="fixB"
                                    src={TIKTOK}
                                    alt="LinkedIn Image"
                                />
                            </ExternalLink>
                            <ExternalLink href="https://www.instagram.com/leo_dupes/">
                                <img
                                    className="SocialIcon"
                                    style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                    id="fixB"
                                    src={INSTA}
                                    alt="Github Image"
                                />
                            </ExternalLink>
                            <ExternalLink href="https://www.youtube.com/@leo_dupire">
                                <img
                                    className="SocialIcon"
                                    style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                    id="fixB"
                                    src={YOUTUBE}
                                    alt="Github Image"
                                />
                            </ExternalLink>
                            <a href="mailto: leo@leodupire.com">
                                <img
                                    className="SocialIcon"
                                    style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                    id="fixB"
                                    src={EMAIL}
                                    alt="Email Image"
                                />
                            </a>
                        </div>
                    </div> */}
                </div>
                </div>
            </div>


            {/* BODY */}
            <div className='corpus'>
                <div className='black'>
                    <div className='releases'>
                        <h1>SINGLES</h1>
                        <div className='songs'>
                            {/* <div className='divider'></div> */}
                            <div className='song' id="cover">
                                <div className='PromoteRecord'>
                                    <ExternalLink href="https://open.spotify.com/track/1fvVIymDuY9V5uymCozZJb">
                                        <img
                                            className="CoverArt"
                                            src={SIRENSCOVER}
                                            alt="Sirens Cover Art"
                                        />
                                    </ExternalLink>
                                    <p className='recordTop'>SIRENS</p>
                                    <p className='recRelease'>02/21</p>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='song'>
                                <p className='record'>MAD MAN</p>
                                <p className='recStat'>----</p>
                            </div>
                            <div className='divider'></div>
                            <div className='song'>
                                <p className='record'>NO TIME</p>
                                <p className='recStat'>----</p>
                            </div>
                            <div className='divider'></div>
                        </div>
                    </div>
                </div>
                <div className='contCorpus' style={{ height: height2 }}>
                    <div class="bottom2" style={{ height: height2 }}>
                        <div className='ContCont'>
                            {/* <div className='Cont'> */}
                                <div className='Cont2'>
                                    <div className='crt2'></div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='top2' style={{ height: height2 }}>
                        <div className='releases'>
                            <h1 style={{ color: "rgb(127 163 176)" }}>LIVE</h1>
                            <div className='songs'>
                                <div className='divider2'></div>
                                <ExternalLink href="https://wl.seetickets.us/event/davinia/623039?afflky=TheCuttingRoom">
                                    <div className='song'>
                                        <p className='record' style={{ color: "rgb(127 163 176)" }}>The Cutting Room w. Davinia</p>
                                        <p className='recMid' style={{ color: "rgb(127 163 176)" }}>NYC</p>
                                        <p className='recStat' style={{ color: "rgb(127 163 176)" }}>10/25/24</p>
                                    </div>
                                </ExternalLink>
                                <div className='divider2'></div>
                                <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>TBD</p>
                                    <p className='recMid' style={{ color: "rgb(127 163 176)" }}>NYC</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>----</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song'>
                                    <p className='record' style={{ color: "rgb(127 163 176)" }}>TBD</p>
                                    <p className='recMid' style={{ color: "rgb(127 163 176)" }}>NYC</p>
                                    <p className='recStat' style={{ color: "rgb(127 163 176)" }}>----</p>
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


                <div className='contCorpus' style={{ height: height3 }}>
                    <div class="bottom2" style={{ height: height3 }}>
                        <div className='ContCont'>
                            <div className='Cont2'>
                                <div className='crt2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='top2' style={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }}>
                        <div className='releases' style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
                            <h1 id='rel' style={{ color: "rgb(127 163 176)" }}>STREAM</h1>
                            <div className='songs' style={{ padding: "2rem"}}>
                                <div className='SocialIcons'>
                                    <ExternalLink href="https://open.spotify.com/artist/6MWqDuBRRboYW6GSI5K0Up">
                                        <img
                                            className="SocialIcon2"
                                            id="fixB"
                                            src={SPOTIFY}
                                            alt="LinkedIn Image"
                                        />
                                    </ExternalLink>
                                    <ExternalLink href="https://music.apple.com/us/new">
                                        <img
                                            className="SocialIcon2"
                                            id="fixB"
                                            src={APPLEMUSIC}
                                            alt="Github Image"
                                        />
                                    </ExternalLink>
                                    <ExternalLink href="https://www.deezer.com/us/">
                                        <img
                                            className="SocialIcon2"
                                            id="fixB"
                                            src={AMAZONMUSIC}
                                            alt="Github Image"
                                        />
                                    </ExternalLink>
                                    <ExternalLink href="https://music.amazon.com/">
                                        <img
                                            className="SocialIcon2"
                                            id="fixB"
                                            src={DEEZER}
                                            alt="Email Image"
                                        />
                                    </ExternalLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            
                <div className='black' style={{ backgroundColor: "black" }}>
                    <div className='releases' style={{ paddingTop: "0rem", paddingBottom: "0rem"}}>
                        {/* <h1 id='rel' style={{ color: "rgb(255, 255, 255, 0.75)" }}>FOLLOW</h1> */}
                        <div className='songs' style={{ padding: "2rem" }}>
                            <div className='SocialIcons'>
                                <ExternalLink href="https://www.instagram.com/leo.dupire/">
                                    <img
                                        className="SocialIcon"
                                        style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                        id="fixB"
                                        src={INSTA}
                                        alt="Github Image"
                                    />
                                </ExternalLink>
                                <ExternalLink href="https://www.tiktok.com/@leo.dupire">
                                    <img
                                        className="SocialIcon"
                                        style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                        id="fixB"
                                        src={TIKTOK}
                                        alt="LinkedIn Image"
                                    />
                                </ExternalLink>
                                <ExternalLink href="https://www.youtube.com/@leo.dupire">
                                    <img
                                        className="SocialIcon"
                                        style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
                                        id="fixB"
                                        src={YOUTUBE}
                                        alt="Github Image"
                                    />
                                </ExternalLink>
                                <a href="mailto: leo@leodupire.com">
                                    <img
                                        className="SocialIcon"
                                        style={{ backgroundColor: "rgb(255, 255, 255, 0.75)" }}
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

            <SVG></SVG>
        </>
    );
}

export default Music;