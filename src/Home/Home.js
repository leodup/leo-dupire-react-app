import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css';
import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.css';
import Tabs from '../App+/Tabs/Tabs.js';
import Disclaimer from "../Temp/Disclaimer.js"

import LEO from "../images/LEO.jpg";
import HummingFaceImage from "../images/ExhibitImages/HummingFace.jpg";
import NLPImage from "../images/ExhibitImages/NLP.jpg";
import WebsiteImage from "../images/ExhibitImages/Website.jpg";
import HyperloopImage from "../images/ExhibitImages/Hyperloop.jpg";


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
                                        Sound generation for musical sampling using <b>GANs</b>, <b>Autoencoders</b>, and <b>Diffusion</b> models.
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
                                    I am self taught in Web Development. My learning journey started at IBM and continued beyond.<br></br><br></br>
                                    
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
    const gallery = [Leo, HummingFace, HummingFace, NLP, NLP, Website, Website, Hyperloop, Hyperloop]
    const galleryCurrent = gallery[count];

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1) // new
            if(count > gallery.length - 2) // I'n not entirely sure why -2
            {
                setCount(prevCount => prevCount - prevCount)
            }
        }, 4000);

        return () => clearInterval(interval);
    })

    const whoAmI =  <p id="Home"> 
                        My name is Léo Dupire. I am an undergraduate Computer & Data Science student, completing my final year at New York University. My background is originally in Mechanical Engineering. I fell in love with engineering from a young age, taking on increasingly ambitious projects throughout the years. Eventually, I found that I also had a great interest in Computer Science and Data Science, after which I changed my field of study accordingly. <br></br> <br></br>
                        I spent my early years in a medieval village in the south of France, until moving to Manhattan. Througout my time in New York, I stayed close to my French and Swedish heritage and learned English as well as some Spanish along the way. I went to the Lycée Français de New York, graduating in 2018 and pursuing higher education at Northeastern University, followed by New York University. <br></br> <br></br>
                        I have undertaken several personal projects, as can be seen in my portfolio, and I'm always looking for opportunities to grow and exercise my creativity and persistence. If you have any questions, please reach out!
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

    const FooterTab = (props) => {
        return (
            <div className="FooterFiller">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="FooterTab" id="Home">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }

    return (
        <>
            <Disclaimer/>
            <div className="header" id="Home">
                <div className="Head" id="Home">
                    <div className="HeadContent">
                        {galleryCurrent}
                    </div>
                </div>
                <Tabs
                        title1="Work"
                        title2="Education"
                        title3="Portfolio"
                        link1="/work"
                        link2="/education"
                        link3="/portfolio"
                    />
            </div>
            <div className="body" id="Home">
                <h2 id="Home">About me</h2>
                <h3 id="Home">Who I am</h3>
                <div className="CenterLeo">
                    <img
                        className="LeoImg"
                        src={LEO}
                        alt="Léo Image"
                    />
                </div>
                {whoAmI}
                <h3 id="Home">What I do</h3>
                {whatIDo}
            </div>
            <div className="body" id="Home">
                <h2 id="Home">Documents</h2>
                <h3 id="Home">My Résumé</h3>
                <div className="ResumePosition">
                    <iframe src="https://drive.google.com/file/d/12vix--qu-DkUbIdiGD_drLmiRTw9i-BB/preview" allow="autoplay" className="ResumePDF"></iframe>
                </div>
            </div>
            <div className="Footer">
                <div className="FooterTabs">
                    <FooterTab
                        title="Home"
                        link="/"
                    />
                    <FooterTab
                        title="Work"
                        link="/work"
                    />
                    <FooterTab 
                        title="Education"
                        link="/education"
                    />
                    <FooterTab 
                        title="Portfolio"
                        link="/portfolio"
                    />
                </div>
            </div>
        </>
    )
}

export default Home;