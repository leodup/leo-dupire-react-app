import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import LeoHeadshot from '../images/LeoHeadshot.jpg';
import WebBackgroundPortrait from '../videos/WebBackgroundPortrait.mp4';

const Menu = () => {
    const videoRef = useRef(null);

    const handleVideoHover = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleVideoLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div className="Menu">
            {/* Center Profile Picture */}
            <div className="ProfilePictureContainer">
                <img 
                    src={LeoHeadshot} 
                    alt="Léo Dupire" 
                    className="ProfilePicture"
                />
            </div>
            
            <div className="MenuContainer">
                {/* Left Window - Home */}
                <Link to="/" className="MenuWindow MenuWindowLeft">
                    <div className="MenuContent">
                        <h1 className="MenuTitle">Home</h1>
                        <p className="MenuDescription">
                            Learn about Léo Dupire - my background, experience, and interests
                        </p>
                        <div className="MenuButton">Enter</div>
                    </div>
                </Link>

                {/* Right Window - Music */}
                <Link 
                    to="/music" 
                    className="MenuWindow MenuWindowRight"
                    onMouseEnter={handleVideoHover}
                    onMouseLeave={handleVideoLeave}
                >
                    <video 
                        ref={videoRef}
                        className="MenuVideoBackground"
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={WebBackgroundPortrait} type="video/mp4" />
                    </video>
                    <div className="MenuContent">
                        <h1 className="MenuTitle">Music</h1>
                        <p className="MenuDescription">
                            Explore my musical projects and compositions
                        </p>
                        <div className="MenuButton">Enter</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
