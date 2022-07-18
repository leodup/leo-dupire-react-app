import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LEO from "./images/LEO.jpg";

const Home = () => {

    const Tab = (props) => {
        return (
            <div className="Tab">
                <Link to={props.link}>
                    <p id="Home" data-hover={props.title}>{props.title}</p>
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
                            <h2 id="Home">Léo</h2>
                        </div>
                        <div className="Name" id="Last">
                            <h2 id="Home">Dupire</h2>
                        </div>
                        <div className="FirstNameBack"></div>
                        <div className="LastNameBack"></div>
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
                    <h2>About me</h2>
                    <h3>Who I am</h3>
                    <h3>What I do</h3>
                    <h2>Documents!</h2>
                    <h3>My résumé</h3>
                </div>
            </div>
        </>
    )
}

export default Home;