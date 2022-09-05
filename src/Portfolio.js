import { Link } from 'react-router-dom';
import "./Portfolio.css";
import CrossBow from "./images/CrossBow.jpg";

import DataScienceText from "./images/DataScienceText.png";
import ComputerScienceText from "./images/ComputerScienceText.png";
import MechEText from "./images/MechEText.png";
import RandomText from "./images/RandomText.png";

import DataScienceIcon from "./images/DataScienceIcon.png";
import ComputerScienceIcon from "./images/ComputerScienceIcon.png";
import MechEIcon from "./images/MechEIcon.png";
import RandomIcon from "./images/RandomIcon.png";

import CodeImage from "./images/CodeImage.jpg";

const Portfolio = () => {
    
    return (
        <div>
            <div className="PortfolioHeader">
                <div className="LinesLeft"></div>
                <Link to="/">
                    <div className="PortfolioLink">
                        <p id="PortfolioLink">Home</p>
                    </div>
                </Link>
                <div className='Blocks'>
                    <div className="Top">
                        <div className="Q1">
                            <img
                                className="TitleText1"
                                src={DataScienceText}
                                alt="Data Science Text"
                            />
                            <div className="BlockTop">
                                <p id="DS-Box-Title">Data Science</p>
                            </div>
                            <p id="DS-Box-Text">
                                <ul>
                                    <li>Identifying Multilingual Misinformation</li>
                                    <li>Disparity and Bias Mitigation</li>
                                    <li>Intro to Data Science</li>
                                </ul>
                            </p>
                        </div>
                        <div className="Q2">
                            <img
                                className="TitleText2"
                                src={ComputerScienceText}
                                alt="Computer Science Text"
                            />
                        </div>
                    </div>
                    <div className="Bottom">
                        <div className="Q3">
                            <img
                                className="TitleText3"
                                src={MechEText}
                                alt="Mechanical Engineering Text"
                            />
                        </div>
                        <div className="Q4">
                            <img
                                className="TitleText3"
                                src={RandomText}
                                alt="Random Text"
                            />
                        </div>
                    </div>
                </div>
                <img
                    className="Image"
                    src={CodeImage}
                    alt="Code Image"
                />
            </div>
            <div className="Header1">
                <h1 id="Portfolio">PORTFOLIO</h1>
            </div>
            <div className="PortfolioBody">
                <div className="DataScience">
                    <h2 id="Section">Data Science</h2>
                    <h3 id="Section">NLP</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Bias Mitigation</h3>
                    <p id="Section"></p>
                    <h3 id="Section">School Analysis</h3>
                    <p id="Section"></p>
                </div>
                <div className="ComputerScience">
                    <h2 id="Section">Computer Science</h2>
                    <h3 id="Section">This Website</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Something Else</h3>
                    <p id="Section"></p>
                </div>
                <div className="MechE">
                    <h2 id="Section">Mechanical Engineering</h2>
                    <h3 id="Section">Go Kart</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Resperatory Ventilator</h3>
                    <p id="Section"></p>
                    <h3 id="Section">HydroDynamic Wind Tunnel</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Hyperloop</h3>
                    <p id="Section"></p>
                </div>
                <div className="Random">
                    <h2 id="Section">Random</h2>
                    <h3 id="Section">Music</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Alphabite</h3>
                    <p id="Section"></p>
                    <h3 id="Section">Hobbies</h3>
                    <p id="Section"></p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;