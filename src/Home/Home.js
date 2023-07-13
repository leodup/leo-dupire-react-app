import React from 'react';
import { View } from 'react-native';
import ReactDOM from 'react-dom'
import { ExternalLink } from 'react-external-link';
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.css';
import Disclaimer from "../Temp/Disclaimer.js"
import Tabs from '../App+/Tabs/Tabs.js';
import Footer from '../App+/Footer/Footer.js';

import LEO from "../images/LEO.jpg";
import HummingFaceImage from "../images/ExhibitImages/HummingFace.jpg";
import NLPImage from "../images/ExhibitImages/NLP.jpg";
import WebsiteImage from "../images/ExhibitImages/Website.jpg";
import HyperloopImage from "../images/ExhibitImages/Hyperloop.jpg";
import LINKEDIN from "../images/ContactMeImg/LinkedIn.png";
import GIT from "../images/ContactMeImg/GitHub.png";
import EMAIL from "../images/ContactMeImg/Email.png";

const Home = () => {
    const Leo = <>
                    <div className="Name">
                        <h4 className="FirstName">Léo</h4>
                        <h4 className="LastName">Dupire</h4>
                    </div>
                </>

    const HummingFace = <>
                            <div className="ExhibitImgDiv">
                                <img
                                    className="ExhibitImg"
                                    src={HummingFaceImage}
                                    alt="HummingFace Image"
                                />
                            </div>
                            <div className="ExhibitTextAll">
                                <div className="ExhibitText">
                                    <h5 id="ExhibitText">Music Generation</h5>
                                    <p id="ExhibitText">
                                        Sound generation for musical sampling using <b>GANs</b>, <b>Autoencoders</b>, and <b>Diffusion</b> models.<br></br><br></br>
                                        Eventually, the model will conditionally generate samples based on the user input: an automated <b>sound engineer</b>.
                                    </p>
                                </div>
                                <Link style={{textDecoration: 'none'}} to="/Portfolio/#HummingFace">
                                    <div className="ExhibitButton">
                                        <p id="ExhibitButton">Explore</p>
                                    </div>
                                </Link>
                            </div>
                        </>

    const NLP =  <>
                    <div className="ExhibitImgDiv">
                        <img
                            className="ExhibitImg"
                            src={NLPImage}
                            alt="NLP Image"
                        />
                    </div>
                    <div className="ExhibitTextAll">
                        <div className="ExhibitText">
                            <h5 id="ExhibitText">Natural Language Processing</h5>
                            <p id="ExhibitText">
                                Use of Long Short-Term Memory (<b>LSTM</b>) networks, such as RoBERTa, XLM RoBERTa, T5, and MT5 for missinformation detection in multilingual tweets.
                            </p>
                        </div>
                        <Link style={{textDecoration: 'none'}} to="/Portfolio/#NLP">
                            <div className="ExhibitButton">
                                <p id="ExhibitButton">Explore</p>
                            </div>
                        </Link>
                    </div>
                </>

    const Website =  <>
                        <div className="ExhibitImgDiv">
                            <img
                                className="ExhibitImg"
                                src={WebsiteImage}
                                alt="Website Image"
                            />
                        </div>
                        <div className="ExhibitTextAll">
                            <div className="ExhibitText">
                                <h5 id="ExhibitText">Web Development</h5>
                                <p id="ExhibitText">
                                    I am self taught in Web Development. My learning journey started at <b>IBM</b> and continued beyond.<br></br><br></br>
                                    
                                    I designed and created <b>this website</b> using ReactJS.
                                </p>
                            </div>
                            <Link style={{textDecoration: 'none'}} to="/Portfolio/#Website">
                                <div className="ExhibitButton">
                                    <p id="ExhibitButton">Explore</p>
                                </div>
                            </Link>
                        </div>
                    </>

    const Hyperloop =   <>
                            <div className="ExhibitImgDiv">
                                <img
                                    className="ExhibitImg"
                                    src={HyperloopImage}
                                    alt="Hyperloop Image"
                                />
                            </div>
                            <div className="ExhibitTextAll">
                                <div className="ExhibitText">
                                    <h5 id="ExhibitText">Hyperloop</h5>
                                    <p id="ExhibitText">
                                    Mechanical Engineer with the Paradigm Hyperloop team at Northeastern University.<br></br> <br></br>

                                    The annual Hyperloop competition is organized by <b>SpaceX</b>.
                                    </p>
                                </div>
                                <Link style={{textDecoration: 'none'}} to="/Portfolio/#Hyperloop">
                                    <div className="ExhibitButton">
                                        <p id="ExhibitButton">Explore</p>
                                    </div>
                                </Link>
                            </div>
                        </>

    const [count, setCount] = useState(0);
    const gallery = [Leo, HummingFace, NLP, Website, Hyperloop]
    const galleryCurrent = gallery[count];

    const ref = React.useRef(null);
    var opacity = 0;
    var i = 0;

    function myLoop1() {   
        const intervalId = setInterval(() => {
            var body = ref.current;
            if (opacity < 1) {
                opacity += 0.025;
                body.style.opacity = opacity;
    
            } else {
                console.log(i);
                clearInterval(intervalId)
                myLoop2()
            }
        }, 25);
    }

    function myLoop2() {  
        if (i == 0)
        {
            const intervalId = setInterval(() => {
                clearInterval(intervalId);
                myLoop3()
            }, 1000);
        }  
        else
        {
            const intervalId = setInterval(() => {
                clearInterval(intervalId);
                myLoop3()
            }, 5000);
        }     
    }

    function myLoop3() {         
        const intervalId = setInterval(() => {
            var body = ref.current;
            if (opacity > 0) {
                opacity -= 0.025;
                body.style.opacity = opacity;
    
            } else {
                clearInterval(intervalId)
                // setCount({ count : count + 1 });
                i++;
                setCount(i); // new
                if(i > gallery.length -1)
                {
                    i = 0;
                    setCount(i);
                }    
                myLoop1()
            }
        }, 25);
    }
    
    useEffect(() => {
        myLoop1();  
    }, []);

    const whoAmI =  <p id="Home"> 
                        Hello! My name is Léo Dupire. I have a joint bachelor's degree in Computer & Data Science from New York University and also a background in Mechanical Engineering. I fell in love with engineering from a young age, taking on increasingly ambitious projects throughout the years. Eventually, I found that I also had a great interest in Computer Science and Data Science, after which I changed my field of study accordingly. <br></br> <br></br>
                        I spent my early years in a medieval village in the south of France, until moving to Manhattan. Througout my time in New York, I stayed close to my French and Swedish heritage and learned English as well as some Spanish along the way. I went to the Lycée Français de New York, graduating in 2018 and pursuing higher education at Northeastern University, followed by New York University. <br></br> <br></br>
                        I love taking on new challenges, as can be seen in my portfolio. I'm always looking for opportunities to grow and exercise my creativity and perseverance. If you have any questions, please reach out!
                    </p>
    const whatIDo = <p id="Home">
                        As a Computer and Data Scientist I have worked in a variety of fields through academic studies as well as professional experience. I have worked in fields such as:
                        <ul>
                            <li>Cloud Computing</li>
                            <li>Natural Language Processing</li>
                            <li>Predictive Analytics</li>
                            <li>Software Development</li>
                        </ul>
                        Involving skills of <b>Data Science</b> as well as <b>full-stack development</b>. In addition to this, I have also gathered experience through my Mechanical Engineering background. This includes:
                        <ul>
                            <li>Robotics</li>
                            <li>Aerodynamics</li>
                            <li>CAD and other 3D modeling</li>
                            <li>Imaging</li>
                            <li>Security</li>
                            <li>Sustainability</li>
                        </ul>
                        Outside of school and work, I also love to play and compose music. I have played piano my whole life, picking up guitar in my mid-teens and having a brief stint as a drummer as well. My style is generally alternative rock, although I really try to stay versatile and grow into other genres. Music aside, I also enjoy tennis, squash, running, hands-on projects, sailing, among <i>many</i> others.
                    </p>

    return (
        <>
            <Disclaimer/>
            <div className="header" id="Home">
                <div className="Head" id="Home">
                    <div className="HeadContent" ref={ref}>
                        {galleryCurrent}
                    </div>
                </div>
                <Tabs title1="About" link1="/#aboutme" page="Home"/>
            </div>
            <div className="body" id="Home">
                <h2 className="Home" id="aboutme">About me</h2>
                <h3 id="Home">Who I am</h3>
                <div className="CenterLeo">
                    <img
                        className="LeoImg"
                        id="fix2"
                        src={LEO}
                        alt="Léo Image"
                    />
                </div>
                {whoAmI}
                <h3 id="Home">What I do</h3>
                {whatIDo}
            </div>
            <div className="body" id="Home">
                <h2 className="Home" id="fix">Additional Resources</h2>
                <h3 id="Home">My Résumé</h3>
                <div className="ResumePosition">
                    <iframe src="https://drive.google.com/file/d/1nks36wwjVsh8qz4xs2vzo-QOeEp7c1kZ/preview" allow="autoplay" className="ResumePDF"></iframe>
                </div>
            </div>
            <div className='Contact'>
                <div className='ContactIcons'>
                    <ExternalLink href="https://www.linkedin.com/in/l%C3%A9o-dupire-47387a183/">
                        <img
                            className="ContactIcon"
                            id="fix2"
                            src={LINKEDIN}
                            alt="LinkedIn Image"
                        />
                    </ExternalLink>
                    <ExternalLink href="https://github.com/leodup">
                        <img
                            className="ContactIcon"
                            id="fix2"
                            src={GIT}
                            alt="Github Image"
                        />
                    </ExternalLink>
                    <a href="mailto: leo@leodupire.com">
                        <img
                            className="ContactIcon"
                            id="fix2"
                            src={EMAIL}
                            alt="Email Image"
                        />
                    </a>
                </div>
            </div>
            <Footer page="Home"/>
        </>
    )
}

export default Home;