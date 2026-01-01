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
import SIRENSCOVER from "../images/MusicImg/CoverArt/SirensCoverArt.jpg";
import MADMANCOVER from "../images/MusicImg/CoverArt/MadManCoverArt.jpg";
import NOTIMECOVER from "../images/MusicImg/CoverArt/NoTimeCoverArt.jpg";
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

    useEffect(() => {
        const handleScroll = () => {
            const liveSection = document.getElementById('live');
            const bioSection = document.getElementById('bio');
            const scrolled = window.pageYOffset;

            if (liveSection) {
                const yPos = 160 - (scrolled * 0.06); // Start higher to prevent going too low
                liveSection.style.backgroundPosition = `center ${yPos}%`;
            }

            if (bioSection) {
                const yPos = 600 - (scrolled * 0.2); // Start lower - moved down from 600 to 700
                bioSection.style.backgroundPosition = `center ${yPos}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const singlesContainer = document.querySelector('.singles-stack-container');

        const handleWheel = (e) => {
            const hasHorizontalScroll = singlesContainer.scrollWidth > singlesContainer.clientWidth;

            if (!hasHorizontalScroll) return;

            const scrollLeft = singlesContainer.scrollLeft;
            const maxScroll = singlesContainer.scrollWidth - singlesContainer.clientWidth;

            // Determine scroll delta - prefer horizontal, fall back to vertical
            const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;

            // Check if we're at scroll boundaries
            const atStart = scrollLeft <= 0 && delta < 0;
            const atEnd = scrollLeft >= maxScroll && delta > 0;

            // Only prevent default if we're not at boundaries (allow page scroll when at edges)
            if (!atStart && !atEnd) {
                e.preventDefault();
                e.stopPropagation();
                singlesContainer.scrollLeft += delta;
            }
        };

        if (singlesContainer) {
            singlesContainer.addEventListener('wheel', handleWheel, { passive: false });

            // Set initial scroll position on mobile to center the first card
            if (window.innerWidth <= 768) {
                // Small delay to ensure layout is complete
                setTimeout(() => {
                    singlesContainer.scrollLeft = 0;
                }, 100);
            }
        }

        return () => {
            if (singlesContainer) {
                singlesContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    // Force video playback on mobile devices
    useEffect(() => {
        const playVideo = () => {
            const video = document.getElementById('background-video');
            if (video) {
                video.muted = true; // Ensure muted
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Video autoplay succeeded');
                    }).catch(error => {
                        console.log('Video autoplay prevented:', error);
                        // Fallback: try again on user interaction
                        setupInteractionListeners();
                    });
                }
            }
        };

        const setupInteractionListeners = () => {
            const playOnInteraction = () => {
                const video = document.getElementById('background-video');
                if (video) {
                    video.play();
                }
                document.removeEventListener('touchstart', playOnInteraction);
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('scroll', playOnInteraction);
            };

            document.addEventListener('touchstart', playOnInteraction, { once: true });
            document.addEventListener('click', playOnInteraction, { once: true });
            document.addEventListener('scroll', playOnInteraction, { once: true });
        };

        // Try playing immediately
        playVideo();

        // Try again after short delays to ensure it works
        setTimeout(playVideo, 50);
        setTimeout(playVideo, 200);
        setTimeout(playVideo, 500);
    }, []);

    return (
        <>
            <div className='cont'>
                <div className='ContCont'>
                    <div className='Cont'> 
                        <div className='crt' id='head'>
                            <div className='vid'>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    id="background-video"
                                    src={VID}
                                >
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
                    </div>
                </div>
            </div>


            {/* BODY */}
            <div className='corpus'>
                <div className='black'>
                    <div className='releases'>
                        <h1>SINGLES</h1>
                        <div className='songs'>
                            <div className='singles-stack-container'>
                                <div className='singles-stack'>
                                    <div className='song1 stacked-single' id="cover" data-index="0">
                                        <div className='PromoteRecord'>
                                            <ExternalLink href="https://open.spotify.com/track/6ziJxHVuroi2iWlevrweWa?si=c3272f62d2d24eab">
                                                <img
                                                    className="CoverArt"
                                                    src={NOTIMECOVER}
                                                    alt="No Time Cover Art"
                                                />
                                            </ExternalLink>
                                            <p className='recordTop'>NO TIME</p>
                                            <p className='recRelease'>Sep. 30 2025</p>
                                        </div>
                                    </div>
                                    <div className='song1 stacked-single' id="cover" data-index="1">
                                        <div className='PromoteRecord'>
                                            <ExternalLink href="https://open.spotify.com/track/1MycBy7exqSxLafv4tr385?si=9f40f75292214912">
                                                <img
                                                    className="CoverArt"
                                                    src={MADMANCOVER}
                                                    alt="Mad Man Cover Art"
                                                />
                                            </ExternalLink>
                                            <p className='recordTop'>MAD MAN</p>
                                            <p className='recRelease'>Apr. 18 2025</p>
                                        </div>
                                    </div>
                                    <div className='song1 stacked-single' id="cover" data-index="2">
                                        <div className='PromoteRecord'>
                                            <ExternalLink href="https://open.spotify.com/track/1fvVIymDuY9V5uymCozZJb">
                                                <img
                                                    className="CoverArt"
                                                    src={SIRENSCOVER}
                                                    alt="Sirens Cover Art"
                                                />
                                            </ExternalLink>
                                            <p className='recordTop'>SIRENS</p>
                                            <p className='recRelease'>Feb. 21 2025</p>
                                        </div>
                                    </div>
                                    {/* <div className='song1 stacked-single' id="cover" data-index="3">
                                        <div className='PromoteRecord'>
                                            <ExternalLink href="https://open.spotify.com/track/6ziJxHVuroi2iWlevrweWa?si=c3272f62d2d24eab">
                                                <img
                                                    className="CoverArt"
                                                    src={NOTIMECOVER}
                                                    alt="No Time Cover Art"
                                                />
                                            </ExternalLink>
                                            <p className='recordTop'>NO TIME</p>
                                            <p className='recRelease'>Sep. 30 2025</p>
                                        </div>
                                    </div> */}
                                </div>
                                {/* Add more .singles-stack divs here for additional card groups */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contCorpus' style={{ height: height2 }}>
                    <div className='top2' id="live" style={{ height: height2 }}>
                        <div className='releases'>
                            <h1 style={{ color: "white" }}>Come see me LIVE!</h1>
                            <div className='songs'>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>TBD</p>
                                    <p className='recMid' style={{ color: "white" }}>--</p>
                                    <p className='recStat' style={{ color: "white" }}>--/--/--</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>Lucinda's</p>
                                    <p className='recMid' style={{ color: "white" }}>NYC</p>
                                    <p className='recStat' style={{ color: "white" }}>11/16/25</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>Pete's Candy Store</p>
                                    <p className='recMid' style={{ color: "white" }}>Brooklyn</p>
                                    <p className='recStat' style={{ color: "white" }}>10/5/25</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>'No Time' Release</p>
                                    <p className='recMid' style={{ color: "white" }}>NYC</p>
                                    <p className='recStat' style={{ color: "white" }}>10/3/25</p>
                                </div>
                                <div className='divider2'></div>
                                <div className='song2'>
                                    <p className='record' style={{ color: "white" }}>'Sirens' Release</p>
                                    <p className='recMid' style={{ color: "white" }}>NYC</p>
                                    <p className='recStat' style={{ color: "white" }}>03/8/25</p>
                                </div>
                                <div className='divider2'></div>
                                <ExternalLink href="https://wl.seetickets.us/event/davinia/623039?afflky=TheCuttingRoom">
                                    <div className='song2'>
                                        <p className='record' style={{ color: "white" }}>The Cutting Room</p>
                                        <p className='recMid' style={{ color: "white" }}>NYC</p>
                                        <p className='recStat' style={{ color: "white" }}>10/25/24</p>
                                    </div>
                                </ExternalLink>
                                <div className='divider2'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contCorpus' style={{ height: '27rem' }}>
                    <div className='top2' style={{ backgroundColor: "rgb(39, 164, 210)"}}>
                        <div className='releases' style={{ paddingTop: "1.5rem", paddingBottom: "3.5rem"}}>
                            <h1 style={{ color: "white" }}>Are you even STREAMING ?!</h1>
                            {/* rgb(127 163 176) */}
                            <div className='songs' id='stream' style={{ padding: "0rem"}}>
                                <div className='divider2' style={{ marginTop: "1rem"}}></div>
                                <div className='SocialIcons' style={{ paddingTop: "3rem", paddingBottom: "3rem"}}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <ExternalLink href="https://open.spotify.com/artist/6MWqDuBRRboYW6GSI5K0Up">
                                            <img
                                                className="SocialIcon2"
                                                id="fixB"
                                                src={SPOTIFY}
                                                alt="Spotify"
                                            />
                                        </ExternalLink>
                                        <p style={{ color: "white", fontSize: "1.1rem", fontFamily: "serenata", marginTop: "0.5rem", marginBottom: "0" }}>Spotify</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <ExternalLink href="https://music.apple.com/us/new">
                                            <img
                                                className="SocialIcon2"
                                                id="fixB"
                                                src={APPLEMUSIC}
                                                alt="Apple Music"
                                            />
                                        </ExternalLink>
                                        <p style={{ color: "white", fontSize: "1.1rem", fontFamily: "serenata", marginTop: "0.5rem", marginBottom: "0" }}>Apple Music</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <ExternalLink href="https://music.amazon.com/">
                                            <img
                                                className="SocialIcon2"
                                                id="fixB"
                                                src={AMAZONMUSIC}
                                                alt="Amazon Music"
                                            />
                                        </ExternalLink>
                                        <p style={{ color: "white", fontSize: "1.1rem", fontFamily: "serenata", marginTop: "0.5rem", marginBottom: "0" }}>Amazon Music</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <ExternalLink href="https://www.deezer.com/us/">
                                            <img
                                                className="SocialIcon2"
                                                id="fixB"
                                                src={DEEZER}
                                                alt="Deezer"
                                            />
                                        </ExternalLink>
                                        <p style={{ color: "white", fontSize: "1.1rem", fontFamily: "serenata", marginTop: "0.5rem", marginBottom: "0" }}>Deezer</p>
                                    </div>
                                </div>
                                <div className='divider2'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contCorpus' style={{ height: "auto", minHeight: height2 }}>
                    <div className='top2' id="bio" style={{ height: "auto", minHeight: height2 }}>
                        <div className='releases'>
                            <h1 style={{ color: "white" }}>BIO</h1>
                            {/* rgb(127 163 176) */}
                            <div className='songs'>
                                <div className='divider2'></div>
                                <p className='bioText'>Emerging from a French medieval village and plunged into NYC at a young age, this French-Swedish artist brings a world of musical diversity to his earthy rock flavor. Léo Dupire is a playful experimentalist, creating immersive atmospheres for rebellious inquisition with a philosophical tang. <br></br><br></br>

                                                        Dupire's work is reminiscent of artists like Hozier, Jeff Buckley, and Radiohead, keeping sincerity at the forefront of his work. <br></br><br></br>

                                                        Léo Dupire is also a passionate scientist, applying AI to Cancer Research. Learn more at <a href="https://leodupire.com" target="_blank" style={{ color: "rgb(39, 164, 210)" }}>leodupire.com</a>.
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
                            <div className="LinksFooter" style={{marginTop: 0}}>
                                <p>© 2026 Léo Dupire</p>
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