import React from 'react';
import { ExternalLink } from 'react-external-link';
import './Links.css';
import HEADSHOT from "../images/LeoHeadshot.jpg";

const Links = () => {
    return (
        <div className="LinksContainer">
            <div className="LinksContent">
                {/* Profile Section */}
                <div className="ProfileSection">
                    <div className="ProfileImage">
                        <img src={HEADSHOT} alt="Profile" />
                    </div>
                    <h1 className="ProfileName">Léo Dupire</h1>
                    <p className="ProfileBio">'No Time' Out Now</p>
                </div>

                {/* Links Grid */}
                <div className="LinksGrid">
                    <ExternalLink href="https://www.leodupire.com/music" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">leodupire.com</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="https://open.spotify.com/artist/6MWqDuBRRboYW6GSI5K0Up?si=AFPdh4pUQtSH_gJ_1pkUZQ" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">Listen on Spotify</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="https://music.apple.com/us/artist/l%C3%A9o-dupire/1794428651" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">Listen on Apple</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="https://www.instagram.com/leo.dupire" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">Instagram</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="https://www.tiktok.com/@leo.dupire" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">TikTok</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="https://www.youtube.com/@leo.dupire" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">YouTube</span>
                        </div>
                    </ExternalLink>

                    <ExternalLink href="mailto:leo@leodupire.com" className="LinkCard">
                        <div className="LinkCardContent">
                            <span className="LinkTitle">Contact</span>
                        </div>
                    </ExternalLink>
                </div>

                {/* Footer */}
                <div className="LinksFooter">
                    <p>© 2026 Léo Dupire</p>
                </div>
            </div>
        </div>
    );
}

export default Links;
