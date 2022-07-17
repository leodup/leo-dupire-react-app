import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LDText from "./images/leo-dupire.svg";
import LDPicture from "./images/moi.jpg";

const Home = () => {

    const [count, setCount] = useState(0);
    const greetingLanguages = ["My name is", "Je m'appelle", "Jag heter", "Me llamo"]
    const greeting = greetingLanguages[count];

    // https://eight-bites.blog/en/2021/05/setinterval-setstate/
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(count);

            console.log(greeting);
            setCount(prevCount => prevCount + 1) // new
            if(count > greetingLanguages.length - 2) // I'n not entirely sure why -2
            {
                setCount(prevCount => prevCount - prevCount)
            }
        }, 5000);

        return () => clearInterval(interval);
    })

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
            <div className="Effect"></div>
            <div className="Header" id="Home">
                <h1 className="fade" id="Home">{greeting}</h1>
                <div className="NameImage">
                    <img
                        className="Name"
                        src={LDText}
                        alt="Léo Dupire"
                    />
                </div>
                {/* <img
                    className="Picture"
                    src={LDPicture}
                    alt="Léo Dupire"
                /> */}
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
                    title="Projects"
                    link="/projects"
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
            <h3>About me</h3>
        </>
    )
}

export default Home;