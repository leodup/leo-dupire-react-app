import { useEffect, useState } from 'react';
import { Waypoint } from "react-waypoint";
import { Link } from 'react-router-dom';
import './Work.css';
import { 
    ScrollContainer, 
    ScrollPage, 
    Animator,
    batch, 
    Sticky,
    Zoom,
    Fade,
    MoveOut,
    MoveIn
} from 'react-scroll-motion'

import IBM from "./images/IBM.png";
import BROCC from "./images/BROCC.png";
import ANALOGIC from "./images/ANALOGIC.png";
import PS6 from "./images/PS6.png";

const Work = () => {
    
    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade())}>
                    <div className="Work">
                        <Link to="/">
                            <div className="WorkLink">
                                <p id="WorkLink">Home</p>
                            </div>
                        </Link>
                        <h1 id="Work">WORK</h1>
                        <p id="Experience">EXPERIENCE</p>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={batch(Fade())}>
                    <div className="IBM">
                        <img
                            className="imageIBM"
                            src={IBM}
                            alt="IBM"
                        />
                        <div className="IBM1">
                            <nav class="main-menu" id="IBM1">
                                <ul>
                                    <li>
                                        <a href="" id="IBMSide">
                                            <i class="fa fa-star fa-2x"></i> {/*https://icons.getbootstrap.com*/}
                                            <span class="nav-text">
                                                Leadership
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM2">
                            <nav class="main-menu" id="IBM2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-globe fa-2x"></i>
                                            <span class="nav-calc">
                                                Data Science
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM3">
                            <nav class="main-menu" id="IBM3">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-cloud fa-2x"></i>
                                            <span class="nav-text">
                                                Cloud & Back End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM4">
                            <nav class="main-menu" id="IBM4">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-laptop fa-2x"></i>
                                            <span class="nav-text">
                                                Front End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={batch(Fade())}>
                    <div className="BROCC">
                        <img
                            className="imageBROCC"
                            src={BROCC}
                            alt="Brocc"
                        />
                        <div className="BROCC1">
                            <nav class="main-menu" id="BROCC1">
                                <ul>
                                    <li>
                                        <a href="#" id="BROCCSide">
                                            <i class="fa fa-calendar fa-2x"></i>
                                            <span class="nav-text">
                                                Initiative
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="BROCC2">
                            <nav class="main-menu" id="BROCC2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="BROCCSide">
                                            <i class="fa fa-cloud fa-2x"></i>
                                            <span class="nav-text">
                                                Cloud & Back End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="Brocc">
                        <h2 id="Work">Brocc</h2>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={batch(Fade())}>
                    <div className="ANALOGIC">
                        <img
                            className="imageANALOGIC"
                            src={ANALOGIC}
                            alt="Analogic"
                        />
                        <div className="ANALOGIC1">
                            <nav class="main-menu" id="ANALOGIC1">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-wrench fa-2x"></i>
                                            <span class="nav-text">
                                                Mechanical Engineering
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ANALOGIC2">
                            <nav class="main-menu" id="ANALOGIC2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-shield fa-2x"></i>
                                            <span class="nav-text">
                                                Security
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ANALOGIC3">
                            <nav class="main-menu" id="ANALOGIC3">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-medkit fa-2x"></i>
                                            <span class="nav-text">
                                                Medical
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="Analogic">
                        <h2 id="Work">Analogic</h2>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={batch(Fade())}>
                    <div className="PS6">
                        <img
                            className="imagePS6"
                            src={PS6}
                            alt="PS6"
                        />
                        <div className="PS6-1">
                            <nav class="main-menu" id="PS6-1">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="PS6Side">
                                            <i class="fa fa-laptop fa-2x"></i>
                                            <span class="nav-text">
                                                From the LFNY
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="PS6">
                        <h2 id="Work">PS6</h2>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
}

{/* <h2 id="Work">IBM</h2>
                    <h2 id="Work">Brocc</h2>
                    <h2 id="Work">Analogic</h2>
                    <h2 id="Work">PS6</h2> */}

export default Work;
