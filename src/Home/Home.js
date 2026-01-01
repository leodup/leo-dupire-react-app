import React from 'react';
import { View } from 'react-native';
import ReactDOM from 'react-dom'
import { ExternalLink } from 'react-external-link';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.css';
import Disclaimer from "../Temp/Disclaimer.js"
import Tabs from '../App+/Tabs/Tabs.js';
import Footer from '../App+/Footer/Footer.js';

import LEO from "../images/LEO.jpg";
import GREmLNImage from "../images/ExhibitImages/GREmLN.jpg";
import WNetImage from "../images/ExhibitImages/WNet.jpg";
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

    const GREmLN = <>
                    <div className="ExhibitImgDiv">
                        <img
                            className="ExhibitImg"
                            src={GREmLNImage}
                            alt="GREmLN Image"
                        />
                    </div>
                    <div className="ExhibitTextAll">
                        <div className="ExhibitText">
                            <h5 id="ExhibitText">GREmLN</h5>
                            <p id="ExhibitText">
                                The first transformer-based single-cell <b>foundation model</b> for genomics to use gene regulatory network (GRN) priors. GREmLN generates meaningful <b>cell and gene-level embeddings</b> for downstream prediction tasks.
                            </p>
                        </div>
                        <Link style={{textDecoration: 'none'}} to="/Portfolio/#WNet">
                            <div className="ExhibitButton">
                                <p id="ExhibitButton">Explore</p>
                            </div>
                        </Link>
                    </div>
                    </>

    const WNet = <>
                    <div className="ExhibitImgDiv">
                        <img
                            className="ExhibitImg"
                            src={WNetImage}
                            alt="WNet Image"
                        />
                    </div>
                    <div className="ExhibitTextAll">
                        <div className="ExhibitText">
                            <h5 id="ExhibitText">Collision Prediction</h5>
                            <p id="ExhibitText">
                                WNet architecture developed for <b>Yann LeCun</b>'s graduate Deep Learning course.<br></br><br></br> This earned my teammate and myself <b>2nd place</b> in the final competition (as an undergrad).
                            </p>
                        </div>
                        <Link style={{textDecoration: 'none'}} to="/Portfolio/#WNet">
                            <div className="ExhibitButton">
                                <p id="ExhibitButton">Explore</p>
                            </div>
                        </Link>
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
    const gallery = [Leo, GREmLN , WNet, HummingFace, NLP, Website, Hyperloop]
    const galleryCurrent = gallery[count];

    const ref = React.useRef(null);
    var opacity = 0;
    var i = 0;
    var buff = 0;

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
                BufferLoop()
            }
        }, 25);
    }

    function BufferLoop() {         
        const intervalId = setInterval(() => {
            var body = ref.current;
            if (buff < 10) {
                buff += 1
            } else {
                clearInterval(intervalId)
                buff = 0
                myLoop1()
            }
        }, 100);
    }
    
    useEffect(() => {
        myLoop1();  
    }, []);

    const whoAmI =  <p id="Home"> 
                        Hello! I'm Léo Dupire, an AI researcher at the Califano Lab, Columbia University, with a background in computer science, data science, and mechanical engineering. I mainly work with developing transformer-based architectures for genomics modeling. I'm fortunate to have learned from and worked with great minds like <a href="https://en.wikipedia.org/wiki/Yann_LeCun" target="_blank"><u>Yann LeCun</u></a>, <a href="https://karaletsos.com" target="_blank"><u>Theofanis Karaletsos</u></a>, and <a href="https://en.wikipedia.org/wiki/Andrea_Califano" target="_blank"><u>Andrea Califano</u></a>.<br></br> <br></br>

                        I'm a self-motivated individual, embracing impactful challenges in science (and music in my personal life). I have a long portfolio of projects, largely composed of personal pursuits. These can be found at <a href="/portfolio" target="_blank"><u>leodupire.com/portfolio</u></a>.<br></br> <br></br>

                        <b>Fun fact:</b> I spent my early years in a medieval village in the south of France, before moving to Manhattan. Througout my time in New York, I stayed close to my French and Swedish heritage, attending the Lycée Français de New York and speaking French & Swedish at home. I also learned some Spanish along the way. Now I am trying my hand at Italian, as many of my coworkers are Italian!<br></br> <br></br>
                    </p>
    const whatIDo = <p id="Home">
                        As an AI Research Scientist, I have worked in a variety of fields through professional experience and my academic studies, such as:
                        <ul>
                            <li>Design, development, & deployment of Deep Learning models</li>
                            <li>Genomics Modeling</li>
                            <li>Natural Language Processing</li>
                            <li>Full Stack Development</li>
                            <li>Cloud Computing</li>
                        </ul>
                        In addition to this, I have also gathered experience through my Mechanical Engineering background in fields such as:
                        <ul>
                            <li>Robotics</li>
                            <li>Aerodynamics</li>
                            <li>Advanced Imaging</li>
                            <li>CAD & other 3D modeling tools</li>
                            <li>Security</li>
                            <li>Sustainability</li>
                        </ul>
                        In addition to this, I also play and compose music. I have played piano my whole life, picking up guitar in my mid-teens and having a brief stint as a drummer as well. My style is generally alternative rock, although I really try to stay versatile and grow into other genres. Music aside, I also enjoy tennis, squash, hands-on projects, sailing, among <i>many</i> others.
                    </p>

    return (
        <>
            <div className="header" id="Home">
                <div className="Head" id="Home">
                    <div className="HeadContent" ref={ref}>
                        {galleryCurrent}
                    </div>
                </div>
                <Tabs title1="About" link1="/#aboutme" page="Home"/>
            </div>
            <div className="body" id="Home">
                <div className="bodiv">
                    <h2 className="Home" id="aboutme">About me</h2>
                    {/* <h3 id="Home">Who I am</h3> */}
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

                    <h2 className="Home" id="fix">Additional Resources</h2>
                    <h3 id="Home">Talks</h3>
                    <p id="Home"><b>AstraZeneca (</b><a href="/portfolio" target="_blank">recording</a><b>):</b> AIxBio Frontiers seminar series, hosted by the Applied Data Science team within Oncology Data Science & AI (2025).</p>
                    <p id="Home"><b>AACR (</b><a href="/portfolio" target="_blank">recording</a><b>):</b> American Association for Cancer Research AI & ML conference (2025).</p>
                    <h3 id="Home">Résumé</h3>
                    <div className="ResumePosition">
                        <iframe src="https://drive.google.com/file/d/1nks36wwjVsh8qz4xs2vzo-QOeEp7c1kZ/preview" allow="autoplay" className="ResumePDF"></iframe>
                    </div>
                    {/* <h3 id="Home">Diploma</h3>
                    <div className="ResumePosition">
                        <iframe src="https://drive.google.com/file/d/1Lm-vKiLJcFZ1LKSR-5EV7Zzkj05ugA4G/preview" allow="autoplay"  className="DiplomaPDF"></iframe>
                    </div>
                    <h3 id="Home">Honors: Founders Day Award</h3>
                    <div className="ResumePosition">
                        <iframe src="https://drive.google.com/file/d/1ZBiu5t-HT2jYoGm88J_8xwEU1TyEcs_m/preview" allow="autoplay" className="HonorsPDF"></iframe>
                    </div> */}
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
                    {/* <ExternalLink href="https://github.com/leodup">
                        <img
                            className="ContactIcon"
                            id="fix2"
                            src={GIT}
                            alt="Github Image"
                        />
                    </ExternalLink> */}
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