import './Home.css';
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

import LEO from "./images/LEO.jpg";
import HyperloopImage from "./images/Hyperloop.jpg";
import GoKartImage from "./images/GoKart.jpg";
import VentilatorImage from "./images/Ventilator.jpg";
import DACImage from "./images/DAC.jpg";
import AlphabiteImage from "./images/Alphabite.jpg";
import LawnCycleImage from "./images/LawnCycle.jpg";
import MontaImage from "./images/Monta.jpg";

const Home = () => {

    const Hyperloop =   <>
                            <img
                                className="imageExpand"
                                src={HyperloopImage}
                                alt="Hyperloop Image"
                            />
                            <div className="galleryText">
                                <h5 id="expandHeader">Hyperloop</h5>
                                <p id="expandText">
                                    Mechanical Engineer with the Paradigm Hyperloop team at Northeastern University. <br></br> <br></br>
                                    The annual Hyperloop competition is organized by <b>SpaceX</b>. <br></br>
                                </p>
                                <Link style={{textDecoration: 'none'}} to="/Portfolio/#Hyperloop">
                                    <div className="GalleryButton">
                                        <p id="GalleryButton">Explore</p>
                                    </div>
                                </Link>
                            </div>
                        </>

    const GoKart = <>
                    <img
                        className="imageExpand"
                        src={GoKartImage}
                        alt="Go Kart Image"
                    />
                    <div className="galleryText">
                        <h5 id="expandHeader">Go Kart</h5>
                        <p id="expandText">
                            I built and designed an off-road Go Kart <b>from scratch</b> at the age of <b>12</b>. <br></br> <br></br>
                            This, in many ways, was my debut as an engineer.
                        </p>
                        <Link style={{textDecoration: 'none'}} to="/Portfolio/#GoKart">
                            <div className="GalleryButton">
                                <p id="GalleryButton">Explore</p>
                            </div>
                        </Link>
                    </div>
                </>

    const Ventilator =  <>
                            <img
                                className="imageExpand"
                                src={VentilatorImage}
                                alt="Ventilator Image"
                            />
                            <div className="galleryText">
                                <h5 id="expandHeader">Respiratory Ventilator</h5>
                                <p id="expandText">
                                    During the height of the COVID-19 ventilator <b>shortages</b>, I designed and built a ventilator. <br></br> <br></br>
                                    Ventilators can cost upwards of 10s of thousands of dollars. Using Arduino, some circuitry, and carpentry, this simple product costs about $200.
                                </p>
                                <Link style={{textDecoration: 'none'}} to="/Portfolio/#Ventilator">
                                    <div className="GalleryButton">
                                        <p id="GalleryButton">Explore</p>
                                    </div>
                                </Link>
                            </div>
                            </>

    const DAC = <>
                    <img
                        className="imageExpand"
                        src={DACImage}
                        alt="DAC Image"
                    />
                    <div className="galleryText">
                        <h5 id="expandHeader">Direct Air Capture</h5>
                        <p id="expandText">
                            Temporary sustainability exhibit for the <b>Boston Museum of Science</b>. <br></br> <br></br>
                            Completed as part of an intensive Engineering Design course at Northeastern University.
                        </p>
                        <Link style={{textDecoration: 'none'}} to="/Portfolio/#DAC">
                            <div className="GalleryButton">
                                <p id="GalleryButton">Explore</p>
                            </div>
                        </Link>
                    </div>
                </>

    const [count, setCount] = useState(0);
    const gallery = [Hyperloop, GoKart, Ventilator, DAC] //, DAC, Alphabite, LawnCycle, Monta];
    const galleryCurrent = gallery[count];

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1) // new
            if(count > gallery.length - 2) // I'n not entirely sure why -2
            {
                setCount(prevCount => prevCount - prevCount)
            }
        }, 15000);

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

    const Tab = (props) => {
        return (
            <div className="Filler">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="Tab">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }

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
            <div className="Home">
                <div className="header" id="Home">
                    <div className="DISCLAIMERbig"><div className="DISCLAIMERsmall">Website still under development!</div></div>
                    <div className="CenterCircle">
                        <div className="Profile">
                            <Link to="/" onClick={() => window.location.reload()}>
                                <img
                                    className="imageLEO"
                                    src={LEO}
                                    alt="Léo Dupire"
                                />
                            </ Link>
                        </div>
                        <div className="Name" id="First">
                            <h2 className="HomeName">Léo</h2>
                        </div>
                        <div className="Name" id="Last">
                            <h2 className="HomeName">Dupire</h2>
                        </div>
                        <div className="NameBack"></div>
                        <div className="Spacer"></div>
                        <div className="LargeExpand">
                            {galleryCurrent}
                        </div>
                    </div>
                    <div className="Tabs">
                        <Tab
                            title="Work"
                            link="/work"
                        />
                        <Tab 
                            title="Education"
                            link="/education"
                        />
                        <Tab 
                            title="Portfolio"
                            link="/portfolio"
                        />
                        {/* <Tab
                            title="Contact Me"
                            link="/contactme"
                        /> */}
                    </div>
                </div>
                <div className="body" id="Home">
                    <h2 id="Home">About me</h2>
                    <h3 id="Home">Who I am</h3>
                    {whoAmI}
                    <h3 id="Home">What I do</h3>
                    {whatIDo}
                    <h2 id="Home">Documents</h2>
                    <h3 id="Home">My Résumé</h3>
                    <div className="ResumePosition">
                        <iframe src="https://drive.google.com/file/d/12vix--qu-DkUbIdiGD_drLmiRTw9i-BB/preview" allow="autoplay" className="ResumePDF"></iframe>
                    </div>
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