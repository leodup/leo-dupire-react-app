import { useEffect, useState } from 'react';
import { Waypoint } from "react-waypoint";
import { Link } from 'react-router-dom';
import './Work.css';
import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.js';
import '../App+/Tabs/Tabs.css';
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

import IBM from "../images/IBM.png";
import BROCC from "../images/BROCC.png";
import ANALOGIC from "../images/ANALOGIC.png";
import PS6 from "../images/PS6.png";

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
        
        As part of the program, my team gave biweekly presentations to executives, covering our completed work and gathering feedback. I was also able to meet with industry leaders in Cloud, Quantum Computing, Cyber Security, and Space Technology. We ultimately presented our project + demo to a board of IBM executives at the Extreme Blue Expo.
    </p>

    const BroccText1 = <p id="BroccText1">
        Over the summer, I had the pleasure of working as the Data Engineering intern for Brocc, a peer-to-peer lending company based in Stockholm, Sweden. During my time at Brocc, I developed back-end software for handling client data between AWS and Azure. This was a fruitful task, as this would tie together the Cloud services of Brocc (AWS) and a newly-acquired bank (Azure)! This required the utilization of multiple AWS tools such as Lambda functions, Redshift, S3, and many others. Throughout the internship, I aslo worked with the credit team, learning how Brocc uses Machine Learning for credit scoring - this ultimately being a decisive factor in the lending process. <br></br> <br></br>

        My work at Brocc also demanded adaptable soft skills. I learned how to work effectively within a team in-person and remotely. This internship also required independence and self-initiative, as I worked from New York City with a Swedish-based team for the first portion of the summer. In both settings, I was able to meet with many individuals and strengthen my understanding of the technology and business side of the company.
    </p>

    const AnalogicText1 = <p id="AnalogicText1">
        I worked at Analogic Corporation as their Security Systems Mechanical Engineering Co-op. Analogic designs and manufacturers innovative technologies in both the medical and security sectors. Their medical devices include life-saving diagnostic imaging equipment such as Magnetic Resonance Imaging (MRI) scanners and Computer Tomography (CT) scanners. Similar CT technology to the medical sector is used in the security and detection field, notably for Analogic's futuristic baggage scanning systems that can be found in the world's largest airports. Analogic also manufactures portable rapid DNA sequencing equipment - Advanced Nuclear DNA Equipment (ANDE) - which is used by the FBI and other law enforcement. What differentiates ANDE from other DNA sequencing technologies is its ability to generate results in just 84 minutes, compared to the several weeks it can take at an off-site lab. ANDE has also been adapted for rapid COVID-19 testing. <br></br> <br></br>

        My work at Analogic was focused on ANDE, notably on its intricate pneumatic system, upgrade packages, and shock absorption capabilities. I also worked on airport security systems (ConneCT & Vector) for various testing and design projects, including a project which I lead through the patenting process. The projects I was involved in regularly required different skill sets. I created parts and assemblies on SolidWorks, communicated with vendors and manufacturers, completed a variety of hands-on testing projects, and conducted multiple data analyses. I was also given a great deal of freedom in my work. This required that I become a better decision-maker, improving my ability to give direction to a problem with seemingly too few constraints.
    </p>

    const PS6Text1 = <p id="PS6Text1">
        At the age of 14, I was hired as a mentor and technician for an afterschool workshop at PS6, a prominent public school in New York City. I learned to work with students as well as maintain and operate multiple 3D printers for the school. I obtained this position through prior work at my highschool.<br></br><br></br>
        I worked at my highschool in an afterschool workshop where I mentored students on 3D modeling and 3D printing. We worked on several projects. A project I completed independently with these facilities was a service learning project for school in Haiti. This product, called Alphabite, is an intuitive alphabet puzzle for students to learn how to read and write more efficiently. This project is listed in my Portfolio page. (This topic will be elaborated on with the site's development)
    </p>

    const Tab = (props) => {
        return (
            <div className="FillerWork">
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="TabWork">
                            <p>{props.title}</p>
                        </div>
                    </Link>
            </div>
        );
    }
    
    return (
        <div>
            <div className="Work">
                <div className="DISCLAIMERbig"><div className="DISCLAIMERsmall">Website still under development!</div></div>
                <Link to="/">
                    <div className="WorkLink">
                        <p id="WorkLink">Home</p>
                    </div>
                </Link>
                <div className='WorkTitles'>
                    <h1 id="Work">WORK</h1>
                    {/* <p id="Experience">EXPERIENCE</p> */}
                </div>
                {/* <div className="TabsWork">
                    <Tab 
                        title="Home"
                        link="/"
                    />
                    <Tab
                        title="Education"
                        link="/education"
                    />
                    <Tab 
                        title="Portfolio"
                        link="/portfolio"
                    />
                </div> */}
                <div className='BottomBar'></div>
                <div className="Signal"></div>
            </div>
            <div className="IBM">
                <img
                    className="imageIBM"
                    src={IBM}
                    alt="IBM"
                />
                {IBMText1}
            </div>
            <div className="BROCC">
                <img
                    className="imageBROCC"
                    src={BROCC}
                    alt="Brocc"
                />
                {BroccText1}
            </div>
            <div className="ANALOGIC">
                <img
                    className="imageANALOGIC"
                    src={ANALOGIC}
                    alt="Analogic"
                />
                {AnalogicText1}
            </div>
            <div className="PS6">
                <img
                    className="imagePS6"
                    src={PS6}
                    alt="PS6"
                />
                {PS6Text1}
            </div>
            <div className="Footer">
                <div className="FooterTabs">
                    <FooterTab
                        title="Home"
                        link="/"
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
        </div>
    );
}

export default Work;
