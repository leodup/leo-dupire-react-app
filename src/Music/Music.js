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
import VIDLand from "../videos/WebBackgroundLandscape.mp4";
import VIDPort from "../videos/WebBackgroundPortrait.mp4";

const Music = () => {

    const height2 = "80vh";

    let VID;
    if (window.innerWidth < 1000) {
        VID = VIDPort;
    } else {
        VID = VIDLand;
    }

    const [height3, setHeight3] = useState("14rem");
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setHeight3("14rem");
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
                            <div className='song1' id="cover">
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
                            <div className='song1'>
                                <p className='record'>MAD MAN</p>
                                <p className='recStat'>----</p>
                            </div>
                            <div className='divider'></div>
                            <div className='song1'>
                                <p className='record'>NO TIME</p>
                                <p className='recStat'>----</p>
                            </div>
                            <div className='divider'></div>
                        </div>
                    </div>
                </div>
                <div className='contCorpus' style={{ height: height2 }}>
                    <div className='top2' id="live" style={{ height: height2 }}>
                        <div className='releases'>
                            <h1 style={{ color: "white" }}>LIVE</h1>
                            {/* rgb(127 163 176) */}
                            <div className='songs'>
                                <div className='divider2'></div>
                                <ExternalLink href="https://wl.seetickets.us/event/davinia/623039?afflky=TheCuttingRoom">
                                    <div className='song2'>
                                        <p className='record' style={{ color: "white" }}>The Cutting Room w. Davinia</p>
                                        <p className='recMid' style={{ color: "white" }}>NYC</p>
                                        <p className='recStat' style={{ color: "white" }}>10/25/24</p>
                                    </div>
                                </ExternalLink>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>TBD</p>
                                    <p className='recMid' style={{ color: "white" }}>NYC</p>
                                    <p className='recStat' style={{ color: "white" }}>----</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>TBD</p>
                                    <p className='recMid' style={{ color: "white" }}>NYC</p>
                                    <p className='recStat' style={{ color: "white" }}>----</p>
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


                <div className='contCorpus' style={{ height: '45rem' }}>
                    <div className='top2' style={{ backgroundColor: "#882000"}}>
                        <div className='releases' style={{ paddingBottom: "8rem"}}>
                            <h1 style={{ color: "white" }}>STREAM</h1>
                            {/* rgb(127 163 176) */}
                            <div className='songs' id='stream' style={{ padding: "0rem"}}>
                                <div className='divider2' style={{ marginTop: "1rem"}}></div>
                                <div className='SocialIcons' style={{ paddingTop: "3rem"}}>
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
                                </div>
                                <div className='SocialIcons' style={{ paddingTop: "4rem", paddingBottom: "3rem"}}>
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
                                <div className='divider2'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contCorpus' style={{ height: height2 }}>
                    <div className='top2' id="bio" style={{ height: height2 }}>
                        <div className='releases'>
                            <h1 style={{ color: "white" }}>BIO</h1>
                            {/* rgb(127 163 176) */}
                            <div className='songs'>
                                <div className='divider2'></div>
                                <p className='bioText'>Originally from a medieval village on the French Riviera before moving to NYC, Léo Dupire grew up in a multicultural setting (his father a musically inclined French mathematician and his mother a Swedish force of creative & artistic expression). <br></br><br></br>
                                    Léo Dupire’s music is grounded in self-reflection, rebellion, and authenticity, exploring the depths of alternative & soft rock. His style is often compared to that of Hozier, Radiohead, Queen, Jeff Buckley, and Cold Play - to name a few. That being said, you’ll never know what to expect next; Léo loves to explore different sounds and goes where he finds meaning. Join him in this thoughtful exploration. <br></br><br></br>
                                    Alongside music, Léo is a passionate scientist in the field of Artificial Intelligence applied to Cancer Research.
                                </p>
                                <div className='divider2'></div>
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