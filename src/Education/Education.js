import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.js';
import '../App+/Tabs/Tabs.css';

import Library from "../images/Library.jpg"; //https://www.weforum.org/agenda/2021/12/diversity-inclusion-human-library/
import NYU from "../images/NYU.png";
import NEU from "../images/NEU.png"; // https://www.google.com/search?q=northeastern+university+logo&rlz=1C5CHFA_enAU806AU806&sxsrf=ALiCzsY0AIofA2r-Ylu6_-E7EYIkgHjUsw:1657999670977&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjWg7SLkv74AhX4GVkFHRJgDCsQ_AUoAXoECAEQAw&biw=1527&bih=762&dpr=2.2#imgrc=jFaBWjkNtOSB5M&imgdii=v84AuK80Z_B2sM
import LFNY from "../images/LFNY.png";

const Education = () => {

    const FooterTab = (props) => {
        return (
            <div className="FooterFiller">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="FooterTab" id="Education">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }

    const NYUDesc1 = "I am currently completing my final semester at NYU, studying Computer and Data Science after shifting from Mechancial Engineering in 2020. "
    const NYUDesc2 = "My studies triggered me, leading to me taking on several computer/data science projects in my free time with peers and solo. These include this website, music generation using Convolutional Neural Networks (CNNs), Kaggle competitions, among others. At NYU, I've also made a habbit of attending conferences with speakers such as Yann LeCun."
    const NYUDesc3 = "Notable courses:"
    const NEUDesc1 = "I completed two and a half years of Mechanical Engineering at Northeastern. I did my first semester of university abroad in Melbourne, Australia. During this time, I was involved in the Formula SAE team, for which I began the research and design process for a custom wind-tunnel.";
    const NEUDesc2 = "Back in Boston, I was a team member of the Paradigm Hyperloop Team and I later founded the NorthEastern Sustainable Technologies Association (NESTA) with two peers. I also took advantage of Northeastern's amazing Co-op program, through which I gathered five months of professional work experience. Although I changed majors with my transfer to NYU, my interest in projects combining mechanical engineering, computer science, and data science is still very much present."
    const NEUDesc3 = "Notable courses:"
    const LFNYDesc1 = "I went to the Lycée Français de New York (LFNY), a francophone school in New York City  (kindergarten to highschool). In my final years at the LFNY, I chose the scientific French Baccalaureate with a specialization in physics. The baccalaureat was a two year endeavour, consisting of advanced year-long projects (Travaux Personnels Encadrés or TPE), scrutinous presentations, and - of course - multiple exams. I ultimately recieved my diploma with honors in 2018."
    const LFNYDesc2 = "I left the LFNY fluent in French, English, and confident in Spanish (fluent in Swedish from external experience as well). I look back fondly on the knowlegde I accumulated during my time at the LFNY, notably through my scientific diploma - ranging from physics, chemistry, biology, philosophy as well as music and art! I was also part of the debate club, the TED Club, the yearbook commitee, and was awarded the art prize in my last years there. I also pursued several extracurricular hobbies during my time at the LFNY." 

    const Tab = (props) => {
        return (
            <div className="FillerEdu">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="TabEdu">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }

    return (
        <>
            <div className="body" id="Education">
                <div className="Header" id="Education">
                <div className="DISCLAIMERbig"><div className="DISCLAIMERsmall">Website still under development!</div></div>
                    <img
                        src={Library}
                        className="Library"
                    />
                    <Link to="/">
                        <div className="HomeLink">
                            <p id="HomeLink">Home</p>
                        </div>
                    </Link>
                    <div>
                        <h1 id="Education">Education</h1>
                    </div>
                    <div className="TabsEdu">
                        <Tab 
                            title="Home"
                            link="/"
                        />
                        <Tab
                            title="Work"
                            link="/work"
                        />
                        <Tab 
                            title="Portfolio"
                            link="/portfolio"
                        />
                    </div>
                </div>
                <div className="Education">
                    <div className="JoinNYU">
                        <div className="NYU">
                            <h2 id="NYU">New York</h2>
                            <h2 id="NYU2">University</h2>
                            <img
                                src={NYU}
                                className="imageNYU"
                            />
                        </div>
                        <div className="Description" id="NYU">
                            <div className="Title">
                                <p id="Level">Bachelor's in Computer & Data Science</p>
                                <p id="Period">2021 - 2023</p>
                            </div>
                            <p id="Location">New York, NY</p>
                            <p id="Desc1">{NYUDesc1}</p>
                            <p id="Desc1Low">{NYUDesc2}</p>
                            <p id="Desc1Lowerish">{NYUDesc3}</p>
                            <p id="Desc1Lower">
                                <ul>
                                    <li>Machine Learning</li>
                                    <li>Deep Learning (Advanced Topics in Data Science)</li>
                                    <li>Machine Learning for Natural Language Understanding</li>
                                    <li>Computer Systems Organization</li>
                                    <li>Algorithms</li>
                                    <li>Discrete Math</li>
                                    <li>Big Data</li>
                                    <li>Data Structures</li>
                                    <li>Causal Inference</li>
                                    <li>Data Base Design & Implementation</li>
                                    <li>Data Management and Analysis</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="JoinNEU">
                        <div className="NEU">
                            <h2 id="NEU">Northeastern</h2>
                            <h2 id="NEU2">University</h2>
                            <img
                                src={NEU}
                                className="imageNEU"
                            />
                        </div>
                        <div className="Description" id="NEU">
                            <div className="Title">
                                <p id="Level">Bachelor's in Mechanical Engineering</p>
                                <p id="Period">2018 - 2020</p>
                                <p id="Level2">>50% Complete - Changed Majors</p>
                            </div>
                            <p id="Location2">Boston, MA</p>
                            <p id="Desc2">{NEUDesc1}</p>
                            <p id="Desc2Low">{NEUDesc2}</p>
                            <p id="Desc2Lower">{NEUDesc3}</p>
                            <p id="Desc2Lowest">
                                <ul>
                                    <li>Thermodynamics</li>
                                    <li>Dynamics</li>
                                    <li>Engineering Mechanics & Design</li>
                                    <li>Cornerstone of Engineering 1-2</li>
                                    <li>Physics 1-2</li>
                                    <li>Probability & Statistics</li>
                                    <li>Differential Equations & Linear Algebra</li>
                                    <li>Calculus 1-3</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="JoinLFNY">
                        <div className="LFNY">
                            <h2 id="LFNY">Lycée Français</h2>
                            <h2 id="LFNY2">de New York</h2>
                            <img
                                src={LFNY}
                                className="imageLFNY"
                            />
                        </div>
                        <div className="Description" id="LFNY">
                            <div className="Title">
                                <p id="Level">French Baccalaureate of Science w. Honors</p>
                                <p id="Period">2004-2018</p>
                                <p id="Level2">High School Diploma</p>
                            </div>
                            <p id="Location">New York, NY</p>
                            <p id="Desc3">{LFNYDesc1}</p>
                            <p id="Desc3Low">{LFNYDesc2}</p>
                        </div>
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
                        title="Portfolio"
                        link="/portfolio"
                    />
                </div>
            </div>
        </>
    );
}

export default Education;