import { useEffect, useState } from 'react';
import { Waypoint } from "react-waypoint";
import { Link } from 'react-router-dom';
import './Work.css';
import { 
    ScrollContainer, 
    ScrollPage, 
    Animator,
    batch, 
    Sticky,
    Zoom,
    Fade,
    MoveOut,
    MoveIn
} from 'react-scroll-motion'

import IBM from "./images/IBM.png";
import BROCC from "./images/BROCC.png";
import ANALOGIC from "./images/ANALOGIC.png";
import PS6 from "./images/PS6.png";

const Work = () => {

    const FooterTab = (props) => {
        return (
            <div className="FooterFiller">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="FooterTab" id="Work">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }

    const IBMText1 = <p id="IBMText1">
        I completed my data science internship with IBM’s Extreme Blue program in Raleigh, NC. Extreme Blue is IBM’s technical leadership program in which teams of four interns work together to create a product and solve a real world problem. <br></br> <br></br>

        I’m thrilled with what my team accomplished in our 12 weeks at IBM as we created a tool to unify and accelerate the configuration/deployment process across IBM’s Cloud Pak services, developing a Command-Line-Interface and User-Interface along with an API network to support our product. <br></br> <br></br>
        
        As a data scientist on the team, I was tasked with finding paths to integrate machine learning with our project, aiming to eliminate conflicts and failures in Kubernetes clusters. This was very exciting, taking on a previously unexplored yet impactful problem and introducing a research aspect to our project. I also did full-stack development with the team, spanning Cloud Computing & Kubernetes, CI/CD (GitOps), and APIs on the back end as well as Web-development on the front-end. Here, I used languages such as Python, Bash, JavaScript, HTML, and CSS with tools like Red Hat OpenShift and React JS. <br></br> <br></br>
        
        As part of the program, my team gave biweekly presentations to executives, covering our completed work and gathering feedback. I was also able to meet with industry leaders in Cloud, Quantum Computing, Cyber Security, and Space Technology. We ultimately presented our project + demo to a board of IBM executives at the Extreme Blue Expo. <br></br> <br></br>
        
        —
        I want to thank Erik Dykes, Marjeen Fieldhouse, Osman Ho, and Kirsten Langlois for making Extreme Blue possible! I’m also grateful to my teammates David McGarey, Andrew Amore, and Renato Nuñez as well as our mentors Sudhakar Chellam and Tamiko Brown for their support and enthusiasm throughout this experience. <br></br> <br></br>
    </p>

    const BroccText1 = <p id="BroccText1">
        Over the summer, I had the pleasure of working as the Data Engineering intern for Brocc, a peer-to-peer lending company based in Stockholm, Sweden. During my time at Brocc, I developed back-end software for handling client data between AWS and Azure. This was a fruitful task, as this would tie together the Cloud services of Brocc (AWS) and a newly-acquired bank (Azure)! This required the utilization of multiple AWS tools such as Lambda functions, Redshift, S3, and many others. Throughout the internship, I aslo worked with the credit team, learning how Brocc uses Machine Learning for credit scoring - this ultimately being a decisive factor in the lending process. <br></br> <br></br>

        My work at Brocc also demanded adaptable soft skills. I learned how to work effectively within a team in-person and remotely. This internship also required independence and self-initiative, as I worked from New York City with a Swedish-based team for the first portion of the summer. In both settings, I was able to meet with many individuals and strengthen my understanding of the technology and business side of the company. <br></br> <br></br>

        —
        I had a tremendous experience with Brocc. Working in a company that had just reached past the start-up phase gave me great responsibility and freedom with the directions I could take with my work. I want to thank my co-workers and mentors at Brocc for providing me with such a wonderful and formative opportunity! <br></br> <br></br>
    </p>

    const AnalogicText1 = <p id="AnalogicText1">
        I had the privilege of working at Analogic Corporation as their Security Systems Mechanical Engineering Co-op. Analogic designs and manufacturers innovative technologies in both the medical and security sectors. Their medical devices include life-saving diagnostic imaging equipment such as Magnetic Resonance Imaging (MRI) scanners and Computer Tomography (CT) scanners. Similar CT technology to the medical sector is used in the security and detection field, notably for Analogic's futuristic baggage scanning systems that can be found in the world's largest airports. Analogic also manufactures portable rapid DNA sequencing equipment - Advanced Nuclear DNA Equipment (ANDE) - which is used by the FBI and other law enforcement. What differentiates ANDE from other DNA sequencing technologies is its ability to generate results in just 84 minutes, compared to the several weeks it can take at an off-site lab. ANDE has also been adapted for rapid COVID-19 testing. <br></br> <br></br>

        My work at Analogic was focused on ANDE, notably on its intricate pneumatic system, upgrade packages, and shock absorption capabilities. I also worked on airport security systems (ConneCT & Vector) for various testing and design projects, including a project which I lead through the patenting process. The projects I was involved in regularly required different skill sets. I created parts and assemblies on SolidWorks, communicated with vendors and manufacturers, completed a variety of hands-on testing projects, and conducted multiple data analyses. I was also given a great deal of freedom in my work. This required that I become a better decision-maker, improving my ability to give direction to a problem with seemingly too few constraints. <br></br> <br></br>

        —
        I am ever so grateful to the team at Analogic for providing me with a supportive and friendly work environment. I am so glad to have interacted and worked alongside so many creative, passionate, and driven individuals. <br></br> <br></br>
    </p>
    
    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator>
                    <div className="Work">
                        <div className="DISCLAIMERbig"><div className="DISCLAIMERsmall">Website still under development!</div></div>
                        {/* <div class="container">
                            <h1><span>THE<br></br>BLOBS</span></h1>
                            
                            <div class="blobs_1"></div>
                            <div class="blobs_2"></div>
                            <div class="blobs_3"></div>
                            <div class="blobs_4"></div>
                            <div class="blobs_5"></div>
                            <div class="blobs_6"></div>
                            <div class="blobs_7"></div>
                        </div> */}
                        <Link to="/">
                            <div className="WorkLink">
                                <p id="WorkLink">Home</p>
                            </div>
                        </Link>
                        <div className='WorkTitles'>
                            <h1 id="Work">WORK</h1>
                            <p id="Experience">EXPERIENCE</p>
                        </div>
                        <div className='BottomBar'></div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator>
                    <div className="IBM">
                        <img
                            className="imageIBM"
                            src={IBM}
                            alt="IBM"
                        />
                        {IBMText1}
                        {/*https://icons.getbootstrap.com*/}
                        {/* <div className="IBM1">
                            <nav class="main-menu" id="IBM1">
                                <ul>
                                    <li>
                                        <a href="" id="IBMSide">
                                            <i class="fa fa-star fa-2x"></i>
                                            <span class="nav-text">
                                                Leadership
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM2">
                            <nav class="main-menu" id="IBM2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-globe fa-2x"></i>
                                            <span class="nav-calc">
                                                Data Science
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM3">
                            <nav class="main-menu" id="IBM3">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-cloud fa-2x"></i>
                                            <span class="nav-text">
                                                Cloud & Back End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="IBM4">
                            <nav class="main-menu" id="IBM4">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="IBMSide">
                                            <i class="fa fa-laptop fa-2x"></i>
                                            <span class="nav-text">
                                                Front End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator>
                    <div className="BROCC">
                        <img
                            className="imageBROCC"
                            src={BROCC}
                            alt="Brocc"
                        />
                        {BroccText1}
                        {/* <div className="BROCC1">
                            <nav class="main-menu" id="BROCC1">
                                <ul>
                                    <li>
                                        <a href="#" id="BROCCSide">
                                            <i class="fa fa-calendar fa-2x"></i>
                                            <span class="nav-text">
                                                Initiative
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="BROCC2">
                            <nav class="main-menu" id="BROCC2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="BROCCSide">
                                            <i class="fa fa-cloud fa-2x"></i>
                                            <span class="nav-text">
                                                Cloud & Back End
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                    <div className="Brocc">
                        <h2 id="Work">Brocc</h2>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator>
                    <div className="ANALOGIC">
                        <img
                            className="imageANALOGIC"
                            src={ANALOGIC}
                            alt="Analogic"
                        />
                        {AnalogicText1}
                        {/* <div className="ANALOGIC1">
                            <nav class="main-menu" id="ANALOGIC1">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-wrench fa-2x"></i>
                                            <span class="nav-text">
                                                Mechanical Engineering
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ANALOGIC2">
                            <nav class="main-menu" id="ANALOGIC2">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-shield fa-2x"></i>
                                            <span class="nav-text">
                                                Security
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="ANALOGIC3">
                            <nav class="main-menu" id="ANALOGIC3">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="ANALOGICSide">
                                            <i class="fa fa-medkit fa-2x"></i>
                                            <span class="nav-text">
                                                Medical
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                    <div className="Analogic">
                        <h2 id="Work">Analogic</h2>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator>
                    <div className="PS6">
                        <img
                            className="imagePS6"
                            src={PS6}
                            alt="PS6"
                        />
                        {/* <div className="PS6-1">
                            <nav class="main-menu" id="PS6-1">
                                <ul>
                                    <li class="has-subnav">
                                        <a href="#" id="PS6Side">
                                            <i class="fa fa-laptop fa-2x"></i>
                                            <span class="nav-text">
                                                From the LFNY
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                    <div className="PS6">
                        <h2 id="Work">PS6</h2>
                    </div>
                </Animator>
            </ScrollPage>
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
                </div>
            </div>
        </ScrollContainer>
    );
}

{/* <h2 id="Work">IBM</h2>
                    <h2 id="Work">Brocc</h2>
                    <h2 id="Work">Analogic</h2>
                    <h2 id="Work">PS6</h2> */}

export default Work;
