import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LEO from "./images/LEO.jpg";
import Hyperloop from "./images/Hyperloop.jpg";
import DAC from "./images/DAC.jpg";
import Alphabite from "./images/Alphabite.jpg";
import LawnCycle from "./images/LawnCycle.jpg";
import Monta from "./images/Monta.jpg";

const Home = () => {

    const [count, setCount] = useState(0);
    const gallery = []// [Hyperloop, DAC, Alphabite, LawnCycle, Monta];
    const galleryCurrent = gallery[count];

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1) // new
            if(count > gallery.length - 2) // I'n not entirely sure why -2
            {
                setCount(prevCount => prevCount - prevCount)
            }
        }, 10000);

        return () => clearInterval(interval);
    })

    const whoAmI = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const whatIDo = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    const Tab = (props) => {
        return (
            <div className="Tab">
                <Link to={props.link}>
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
                        <div className="FirstNameBack"></div>
                        <div className="LastNameBack"></div>
                        <div className="LargeExpand">
                            <img
                                className="imageHyperloop"
                                src={galleryCurrent}
                                alt="Hyperloop Team"
                            />
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