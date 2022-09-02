import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                                <Link style={{textDecoration: 'none'}} to="/Portfolio">
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
                        <Link style={{textDecoration: 'none'}} to="/Portfolio">
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
                                <h5 id="expandHeader">Resperatory Ventilator</h5>
                                <p id="expandText">
                                    During the height of the COVID-19 ventilator <b>shortages</b>, I designed and built a ventilator. <br></br> <br></br>
                                    Ventilators can cost upwards of 10s of thousands of dollars. Using Arduino, some circuitry, and carpentry, this simple product cost about $200.
                                </p>
                                <Link style={{textDecoration: 'none'}} to="/Portfolio">
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
                        <Link style={{textDecoration: 'none'}} to="/Portfolio">
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

    const whoAmI =  <p> 
                        My name is Léo Dupire. I am an undergraduate Computer & Data Science student, completing my final year at New York University. My background is originally in Mechanical Engineering. I fell in love with engineering from a young age, taking on increasingly ambitious projects throughout the years. Eventually, I found that I also had a great interest in Computer Science and Data Science, after which I changed my field of study accordingly. <br></br> <br></br>
                        I spent my early years in a medieval village in the south of France, until moving to Manhattan. Througout my time in New York, I stayed close to my French and Swedish heritage and learned English as well as some Spanish along the way. I went to the Lycée Français de New York, graduating in 2018 and pursuing higher education at Northeastern University, followed by New York University. <br></br> <br></br>
                        I have undertaken several personal projects, as can be seen in my portfolio. I'm always looking for opportunities to grow and exercise my creativity and persistence. If you have any questions, please reach out!"
                    </p>
    const whatIDo = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    const Tab = (props) => {
        return (
            <div className="Tab">
                <Link style={{textDecoration: 'none'}} to={props.link}>
                    <p id="HomeTab" data-hover={props.title}>{props.title}</p>
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="Home">
                <div className="header" id="Home">
                    <div className="CenterCircle">
                        <div className="Profile">
                            <img
                                className="imageLEO"
                                src={LEO}
                                alt="Léo Dupire"
                            />
                        </div>
                        <div className="Name" id="First">
                            <h2 className="HomeName">Léo</h2>
                        </div>
                        <div className="Name" id="Last">
                            <h2 className="HomeName">Dupire</h2>
                        </div>
                        <div className="NameBack"></div>
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
                        <Tab
                            title="Upbringing"
                            link="/upbringing"
                        />
                        <Tab
                            title="Hobbies"
                            link="/hobbies"
                        />
                    </div>
                </div>
                <div className="body" id="Home">
                    <h2 id="Home">About me</h2>
                    <h3 id="Home">Who I am</h3>
                    <p id="Home">{whoAmI}</p>
                    <h3 id="Home">What I do</h3>
                    <p id="Home">{whatIDo}</p>
                    <h2 id="Home">Documents!</h2>
                    <h3 id="Home">My résumé</h3>
                    <div className="ResumePosition">
                        <iframe src="https://drive.google.com/file/d/12vix--qu-DkUbIdiGD_drLmiRTw9i-BB/preview" allow="autoplay" className="ResumePDF"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;