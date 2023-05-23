import { HashLink as Link } from 'react-router-hash-link';

import '../App+/Footer/Footer.css';
import '../App+/Tabs/Tabs.js';
import '../App+/Tabs/Tabs.css';

import "./Portfolio.css";
import "./PortfolioFiles/WNet.css";
import "./PortfolioFiles/HummingFace.css";
import "./PortfolioFiles/GoKart.css";
import "./PortfolioFiles/Hydro.css";
import "./PortfolioFiles/Hyperloop.css";
import "./PortfolioFiles/Music.css";
import "./PortfolioFiles/Alphabite.css";
import "./PortfolioFiles/DAC.css";
import "./PortfolioFiles/Vent.css";

import Disclaimer from "../Temp/Disclaimer.js"
import Tabs from '../App+/Tabs/Tabs.js';
import Footer from '../App+/Footer/Footer.js';

import DataScienceText from "../images/PortfolioImg/Blocks/DataScienceText.png";
import ComputerScienceText from "../images/PortfolioImg/Blocks/ComputerScienceText.png";
import MechEText from "../images/PortfolioImg/Blocks/MechEText.png";
import RandomText from "../images/PortfolioImg/Blocks/RandomText.png";

import DataScienceIcon from "../images/PortfolioImg/Blocks/DataScienceIcon.png";
import ComputerScienceIcon from "../images/PortfolioImg/Blocks/ComputerScienceIcon.png";
import MechEIcon from "../images/PortfolioImg/Blocks/MechEIcon.png";
import RandomIcon from "../images/PortfolioImg/Blocks/RandomIcon.png";

import WNet_Scores from "../images/PortfolioImg/WNet1.png";
import WNet2 from "../images/PortfolioImg/WNet2.png";
import WNet3 from "../images/PortfolioImg/WNet3.png";

import Spectrogram from "../images/PortfolioImg/Spectrogram.png";

import GoKart1 from "../images/PortfolioImg/GoKart1.jpg";
import GoKart2 from "../images/PortfolioImg/GoKart2.jpg";
import GoKart3 from "../images/PortfolioImg/GoKart3.png";
import GoKart4 from "../images/PortfolioImg/GoKart4.jpg";
import GoKart5 from "../images/PortfolioImg/GoKart5.jpg";

import Hydro1 from "../images/PortfolioImg/Hydro1.png";
import Hydro2 from "../images/PortfolioImg/Hydro2.png";
import Hydro3 from "../images/PortfolioImg/Hydro3.png";
import Hydro4 from "../images/PortfolioImg/Hydro4.png";

import DAC1 from "../images/PortfolioImg/DAC1.png";
import DAC2 from "../images/PortfolioImg/DAC2.png";
import DAC3 from "../images/PortfolioImg/DAC3.png";
import DAC4 from "../images/PortfolioImg/DAC4.png";

import Vent1 from "../images/PortfolioImg/Vent1.png";
import Vent2 from "../images/PortfolioImg/Vent2.png";
import Vent3 from "../images/PortfolioImg/Vent3.png";
import Vent4 from "../images/PortfolioImg/Vent4.png";

import Hyperloop1 from "../images/PortfolioImg/HyperloopMe.jpg";
import Hyperloop2 from "../images/PortfolioImg/Hyperloop2.jpg";

import Music1 from "../images/PortfolioImg/LogicPro.png";
import Music2 from "../images/PortfolioImg/Show.png";

import Alphabite from "../images/PortfolioImg/Alphabite.png";

const Portfolio = () => {
    return (
        <div>
            <Disclaimer/>
            <div className="header" id="Portfolio">
                <div className="Head" id="Portfolio">
                    <h1 id="Portfolio">PORTFOLIO</h1>
                    <div className='Blocks'>
                        <div className="Top">
                            <Link style={{textDecoration: 'none'}} to="/Portfolio/#DataScience">
                                <div className="Q1">
                                    <img
                                        className="TitleText1"
                                        src={DataScienceText}
                                        alt="Data Science Text"
                                    />
                                    <div className="BlockTop" id="q1">
                                        <p id="DS-Box-Title">Data Science</p>
                                    </div>
                                    <p id="DS-Box-Text">
                                        <img
                                            className="Show"
                                            src={DataScienceIcon}
                                            alt="Data Science Icon"
                                        />
                                    </p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}} to="/Portfolio/#ComputerScience">
                                <div className="Q2">
                                    <img
                                        className="TitleText2"
                                        src={ComputerScienceText}
                                        alt="Computer Science Text"
                                    />
                                    <div className="BlockTop" id="q2">
                                        <p id="DS-Box-Title">Computer Science</p>
                                    </div>
                                    <p id="DS-Box-Text">
                                        <img
                                            className="Show"
                                            src={ComputerScienceIcon}
                                            alt="Data Science Icon"
                                        />
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="Bottom">
                            <Link style={{textDecoration: 'none'}} to="/Portfolio/#MechE">
                                <div className="Q3">
                                    <img
                                        className="TitleText3"
                                        src={MechEText}
                                        alt="Mechanical Engineering Text"
                                    />
                                    <div className="BlockTop" id="q3">
                                        <p id="DS-Box-Title">Engineering</p>
                                    </div>
                                    <p id="DS-Box-Text">
                                        <img
                                            className="Show"
                                            src={MechEIcon}
                                            alt="Data Science Icon"
                                        />
                                    </p>
                                </div>
                            </Link>
                            <Link style={{textDecoration: 'none'}} to="/Portfolio/#Random">
                                <div className="Q4">
                                    <img
                                        className="TitleText4"
                                        src={RandomText}
                                        alt="Random Text"
                                    />
                                    <div className="BlockTop" id="q4">
                                        <p id="DS-Box-Title">Random Projects</p>
                                    </div>
                                    <p id="DS-Box-Text">
                                        <img
                                            className="Show"
                                            src={RandomIcon}
                                            alt="Data Science Icon"
                                        />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Tabs title1="Home" link1="/" page="Portfolio"/>
            </div>
            <div className="PortfolioBody">
                <div className="DataScience">
                    <h2 className="Section" id="DataScience">Data Science</h2>
                    <div className='Project'>
                        <h3 className="Section" id="WNet">Collision Prediction (WNet)</h3>
                        <p className="Section">As one of my final undergraduate accomplishments, I, along with my teammate Dhruv Shetty, placed 2nd out of 31 teams in the final competition for <u>Yann LeCun</u>'s graduate Deep Learning course.</p>
                        <div className='Gallery3'>
                            <div className='image-container2' id="WNet1">
                                <img 
                                    id="WN1" 
                                    src={WNet_Scores}
                                    alt="WNet Scores"
                                />
                            </div>
                        </ div>
                        <p className="Section"><u>The task was as follows:</u> Given eleven video frames of moving and colliding objects (of varying shape, material, and color), we were charged with predicting the positions of these objects on the 22nd frame as a segmentation mask. This required the model to understand the physics of the situation. Our approach was simple and elegant, utilizing teacher forcing to iteratively predict the next image until reaching the 22nd. Below is an example of such an image-mask pair:</p>
                        <div className='Gallery1'>
                            <div className='image-container2' id="WNet1">
                                <img 
                                    id="WN1" 
                                    src={WNet2}
                                    alt="WNet 2"
                                />
                            </div>
                        </ div>
                        <p className="Section">Below is an example prediction given an input of 11 masks:</p>
                        <div className='Gallery2'>
                            <div className='image-container2' id="WNet1">
                                <img 
                                    id="WN1" 
                                    src={WNet3}
                                    alt="WNet 3"
                                />
                            </div>
                        </ div>
                        <p className="Section">By placing in the top 5 teams, we were able to present and defend our project in front of Yann LeCun, co-professor Alfredo Canziani, and the rest of the 90-person class.</p>
                        <p className="Section">The report Dhruv and I wrote is displayed below. It covers a detailed explanation of our approach and implementation.</p>
                        <div className="NLPPosition">
                            <iframe src="https://drive.google.com/file/d/1HHzgNbPPx2atbquay9NcA4ivRYsn8w7C/preview" allow="autoplay" className="NLPPDF"></iframe>
                        </div>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">Music Generation</h3>
                        <div className='Gallery2'>
                            <div className='image-container2' id="HuggingFace1">
                                <img 
                                    id="HF1" 
                                    src={Spectrogram}
                                    alt="Spectrogram 1"
                                />
                            </div>
                        </ div>
                        <p className="Section">My teammate Mateus Aragão and I started designing and building multiple deep learning generative models (GAN, Auto-Encoder, Diffusion) to generate sample sounds from a user prompt. I have now extended this to a solo project. Such models can be used to aid musicians in finding that 'elusive' sound that they may not know how to obtain through traditional means. The model will generate original sounds for users to sample, even introducing a new source of inspiration for composition.</p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section" id="NLP">Natural Language Processing (NLP)</h3>
                        <p className="Section">I performed a set of experiments in Natural Language Understanding along with teammates Yara Kyrychenko and Carla García Medina. We trained four separate Transformer/LSTM models (two English and two multilingual): RoBERTa, XLM-RoBERTa, T5, and mT5. Our goal was to identify the best performing model for identifying missinformation in multilingual Twitter posts sourced from the MuMiN dataset. The English-only models were trained and tested on multilingual tweets that were translated to english in pre-processing using the Google Translate API.</p>
                        <div className="NLPPosition">
                            <iframe src="https://drive.google.com/file/d/1f_OGk0sSn4joooqS0PryteYdc_8Xkln8/preview" allow="autoplay" className="NLPPDF"></iframe>
                        </div>
                        <p className="Section"></p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">Bias Mitigation</h3>
                        <p className="Section">I performed a project demonstrating responsible data science practices such as disparity identification and bias mitigation on a Kaggle dataset provided by Porto Seguro, one of Brazil's leading home and auto insurers. In this project, I demonstrated my technical skills, dealing with machine learning, data privacy, data augmentation, and I also grew as a team leader. (This topic will be elaborated on with the site's development)</p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">School Analysis</h3>
                        <p className="Section">This project involved the use of multiple machine learning methods, from linear, logistical, and multiple regression to clustering models and more! (This topic will be elaborated on with the site's development)</p>
                    </div>
                </div>
                <div className="ComputerScience">
                    <h2 className="Section" id="ComputerScience">Computer Science</h2>
                    <div className='Project'>
                        <h3 className="Section" id="Website">This Website</h3>
                        <p className="Section">I built this website completely on my own using knowledge gained from my internship at IBM. The foundation and minimal viable product of this website were created over the summer and into the fall of 2022. This is a ReactJS app which I designed, developed, and implemented from scratch. I hope you enjoy!</p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section" id="DAC">Boston Museum of Science</h3>
                        <div className='Gallery'>
                            <div className='image-container' id="DAC1">
                                <img 
                                    id="DAC1" 
                                    src={DAC1}
                                    alt="DAC 1"
                                />
                            </div>
                            <div className='image-container' id="DAC2">
                                <img 
                                    id="DAC2" 
                                    src={DAC2}
                                    alt="DAC 2"
                                />
                            </div>
                            <div className='image-container' id="DAC3">
                                <img 
                                    id="DAC3" 
                                    src={DAC3}
                                    alt="DAC 3"
                                />
                            </div>
                            <div className='image-container' id="DAC4">
                                <img 
                                    id="DAC4" 
                                    src={DAC4}
                                    alt="DAC 4"
                                />
                            </div>
                        </ div>
                        <p className="Section">Cornerstone is an intensive engineering design course at Northeastern University. It covers 2D and 3D modeling software such as AutoCAD and Solidworks, programming languages like MATLAB and C++, robotics and circuit design using Arduino. The course also teaches decision making strategies, product design techniques, as well as ethical engineering practices.<br></br><br></br>
                            Completion of the course required a final project. My class's assignment was a sustainability-themed museum exhibit for the Boston Museum of Science. I proposed the idea of carbon sequestration, the removal of CO​2 from the atmosphere to combat climate change.<br></br><br></br>
                            The exhibit had to be user friendly and appeal to users of all ages. For this, we made several iterations of our project, implementing universal design, and making it as intuitive as possible. This required several “focus group” meetings to see what the audience would want to see. I wanted to make the project as interactive as possible. This required all our programming, circuit building, and design skills to be put to use. We created a user interface using a touch screen as can be seen in Images 1 and 2. The goal of the exhibit was for the user to build his or her own negative emissions plant. Several user-decisions impacted their final score. These include: what to do with the CO​2,​ where to build the plant, and what energy source to use. Each step would subtract money from the budget. For maximum interactability, the user was tasked with building the plant using the blocks in Image 3. The amount of blocks used depended on what was left in the budget. This effectively tackled both the environmental and economical aspects of sustainability.</p>
                            <iframe className='DACVideo1' src="https://www.youtube.com/embed/P1on9m4jRk8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                </div>
                <div className="MechE">
                    <h2 className="Section" id="MechE">Mechanical Engineering</h2>
                    <div className='Project'>
                        <h3 className="Section" id="GoKart">Go Kart</h3>
                        <div className='Gallery'>
                            <div className='image-container' id="GK1">
                                <img 
                                    id="GoKart1" 
                                    src={GoKart1}
                                    alt="Go Kart 1"
                                />
                            </div>
                            <div className='image-container' id="GK2">
                                <img 
                                    id="GoKart2" 
                                    src={GoKart2}
                                    alt="Go Kart 2"
                                />
                            </div>
                            <div className='image-container' id="GK3">
                                <img 
                                    id="GoKart3" 
                                    src={GoKart3}
                                    alt="Go Kart 3"
                                />
                            </div>
                            <div className='image-container' id="GK4">
                                <img 
                                    id="GoKart4" 
                                    src={GoKart4}
                                    alt="Go Kart 4"
                                />
                            </div>
                            <div className='image-container' id="GK5">
                                <img 
                                    id="GoKart5" 
                                    src={GoKart5}
                                    alt="Go Kart 5"
                                />
                            </div>
                        </div>
                        <p className="Section">I built a car when I was twelve years old! For my birthday, I asked my parents, not for a present, but for a project. They couldn’t say no to such a request.<br></br><br></br>
                            All the Youtube videos showed similar factory-made go-karts. Those didn’t grasp my attention. My interest was in building the car, not just to drive it - so I decided to make my own, from scratch. Not that building a go-kart is easy, but I really wanted a challenge - so I made plans to implement my own suspension designs, effectively making it an off-road vehicle.<br></br><br></br>
                            I scoured Amazon, Ebay, and the local hardware stores for individual parts, materials, and equipment. I also had to make sure everything was compatible (bearings with axles, sprockets with chains). I bought a welder and angle grinder - among many, many other things - and taught myself how to use these tools. Items like the steering kit I had gotten had to be aggressively adapted to fit my custom dimensions. I finally finished the kart one year later as I could only advance during some weekends and part of the summer (not much space to build a small car in NYC). If I were to change anything, I would put hard compound Pirelli tires on it!</p>
                        <iframe className='GKVideo1' src="https://www.youtube.com/embed/Fgm2egUgD7s?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"></iframe>
                        <iframe className='GKVideo2' src="https://www.youtube.com/embed/ih7jAaZ65bo?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                    <div className='Project'>
                        <h3 className="Section" id="Ventilator">Respiratory Ventilator</h3>
                        <div className='Gallery'>
                            <div className='image-container' id="Vent1">
                                <img 
                                    id="Vent1" 
                                    src={Vent1}
                                    alt="Vent 1"
                                />
                            </div>
                            <div className='image-container' id="Vent2">
                                <img 
                                    id="Vent2" 
                                    src={Vent2}
                                    alt="Vent 2"
                                />
                            </div>
                            <div className='image-container' id="Vent3">
                                <img 
                                    id="Vent3" 
                                    src={Vent3}
                                    alt="Vent 3"
                                />
                            </div>
                            <div className='image-container' id="Vent4">
                                <img 
                                    id="Vent4" 
                                    src={Vent4}
                                    alt="Vent 4"
                                />
                            </div>
                        </ div>
                        <p className="Section">There is no better time to make a cost-effective home-made ventilator than in the middle of a global pandemic and ventilator shortage! Jokes aside, starting in mid-March, 2020, I went into quarantine with my family in New York. At the time, New York was an epicenter of the virus outbreak, the state itself having more cases than any other country. This led to shortages of hospital beds for the sick, not to mention life-saving ventilators. The cost per ventilator was said to be over 50 thousand dollars according to Forbes’ coverage of Governor Andrew Cuomo.<br></br><br></br>
                            Fearing for the safety of my parents, and lacking confidence in accessibility to essential healthcare, I decided to make my own ventilator.<br></br><br></br>
                            I already had the design in mind, I just had to find the correct parts online. Everything I ordered can be seen in Image 1 to the right, each item bought separately from the rest. I got to work! I could only advance at night and during week-ends because I was working from home for my previous co-op during the day.<br></br><br></br>
                            After a few days of doing wiring, soldering, a little bit of carpentry, and my fair share of programming in C++, I completed the ventilator (Images 2 & 3).<br></br><br></br>
                            My ventilator uses a bag valve mask to deliver the air to the patient. This means it pushes a certain volume of air into the patient’s lungs. It does not have the fancier features that hospitals have, such as pressure regulation. This project was meant to provide a life-line, a last resort in case of emergency. I still equipped it with a user interface (LCD screen), rpm variation inputs (buttons), and an alarm in case of a problem (button & speaker system). It also cost less than $200 in materials to make, a sizable step down from the 50 thousand I mentioned earlier.</p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">Hydrodynamic Water Tunnel</h3>
                        <div className='Gallery'>
                            <div className='image-container' id="Hydro1">
                                <img 
                                    id="Hydro1" 
                                    src={Hydro1}
                                    alt="Hydro 1"
                                />
                            </div>
                            <div className='image-container' id="Hydro2">
                                <img 
                                    id="Hydro2" 
                                    src={Hydro2}
                                    alt="Hydro 2"
                                />
                            </div>
                            <div className='image-container' id="Hydro3">
                                <img 
                                    id="Hydro3" 
                                    src={Hydro3}
                                    alt="Hydro 3"
                                />
                            </div>
                            <div className='image-container' id="Hydro4">
                                <img 
                                    id="Hydro4" 
                                    src={Hydro4}
                                    alt="Hydro 4"
                                />
                            </div>
                        </ div>
                        <p className="Section">In 11th grade, I decided to conduct a research project with two classmates for our TPE (Travaux Personnels Encadrés) in the French Baccalaureate. In simplified terms, the requirements for this assignment were to complete a year-long project on essentially anything we wanted.<br></br><br></br>
                            As my team was trying to find an interesting subject for our project, I remembered a television program I had seen about submarines, in which they discussed the difficulties in creating efficient and stealthy propellers. One of the problems was cavitation, a phenomenon where low pressure on the backside of the propeller blades creates vapor bubbles that implode and create loud noises as well as damage to the propeller. We decided to explore this and conduct our own experiments on this subject. We settled on the prompt: How does the shape and material of a propeller affect its motor force?<br></br><br></br>
                            First, I designed a set of differing propellers that were to be tested. We printed them on 3D printers (Image 3). Then, I came up with a device to test the propellers. This can be seen in Images 1 and 2. Our findings supported our hypothesis. I received a 20/20 for the project, report, and presentation in front of a jury at the end of the school year.</p>
                        <iframe className='HydroVideo1' src="https://www.youtube.com/embed/Dwzz5BkMMX4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                    <h3 className="Section" id="Hyperloop">Hyperloop</h3>
                    <p className="Section">I was part of the hyperloop team at Northeastern University. This was a collaborative effort between several universities, Northeastern being a prominent member. I joined the team shortly after they ranked 2nd-worldwide in the Hyperloop competition held by SpaceX. My role consisted of working with the team's in-house wind-tunnel and developping an optimal, minimally intrusive mechanism for precisely changing the pitch, yaw, and roll of the hyperloop skates. Although Hyperloop pods travel in a vaccum, this is not a perfect vaccum and the pod experiences significant air resistance when travelling at very high speeds. Thus aerodynamics played a large role in our analyses.</p>
                    <div className='Gallery2'>
                        <div className='image-container2' id="Hyperloop1">
                            <img 
                                id="Hyperloop1" 
                                src={Hyperloop1}
                                alt="Hyperloop 1"
                            />
                        </div>
                        <div className='image-container' id="Hyperloop2">
                            <img 
                                id="Hyperloop2" 
                                src={Hyperloop2}
                                alt="Hyperloop 2"
                            />
                        </div>
                    </ div>
                    <p className="Section">I also researched optimal ply-up techniques with different material fabrics for the hardware encasings of the pod. The vaccum of the Hyperloop tunnel caused many issues with our electronics, notably the batteries. Myself and two fellow engineers were tasked with designing a soft-shell, pressurized encasing for these components. To create a robust design, our research was heavily focused on ply-up techniques for different materials. With carbon fiber, for instance, ply-up is the way in which different sheets of carbon fiber are layered in varying orientations to maximize the strength of the enclosure when exposed to multi-directional forces.</p>
                </div>
                <div className="Random">
                    <h2 className="Section" id="Random">Random</h2>
                    <div className='Project'>
                        <h3 className="Section">TEDx Talk</h3>
                        <iframe className='TEDVideo' src="https://www.youtube.com/embed/CUFYI-LzpcI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen"></iframe>
                        <p className="Section">I performed a TEDx talk at age 15 titled "Realize Your Dreams". </p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">Music</h3>
                        <div className='Gallery2'>
                            <div className='image-container2' id="Music1">
                                <img 
                                    id="Music1" 
                                    src={Music1}
                                    alt="Music 1"
                                />
                            </div>
                            <div className='image-container' id="Music2">
                                <img 
                                    id="Music2" 
                                    src={Music2}
                                    alt="Music 2"
                                />
                            </div>
                        </ div>
                        <p className="Section">I love to play and compose music. My production software of choice is Logic Pro X. I play the guitar, piano, and some drums. I have been working on several compositions and would love to release some in the near future! My music mainly consists of alternative rock, but my genres vary; I like to exhibit versatility in whatever I do. Styles span from traditional alternative rock, to pieces with heavy classical and operatic undertones, to reggae-like passages, to more modern tastes. Not all at the same time... for the most part. </p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">AlphaBite</h3>
                        <p className="Section">In 9th grade, I worked after school with a teacher for a service learning project. We designed a number of educational puzzles for a school of kids in Haiti. We did this using the school’s new 3D printers, a relatively new technology at the time. The most notable puzzle was called AlphaBite. It was an alphabet puzzle with building blocks for each letter (vowels in red, consonants in blue). The shape I designed was very simple. It resembled a cylinder with a “bite” taken out of it, hence the name of the product. Haiti had a literacy rate of 61.7% in 2016 according to the CIA factbook.</p>
                        <div className='Gallery2'>
                            <div className='image-container2' id="Alphabite">
                                <img 
                                    id="Alphabite" 
                                    src={Alphabite}
                                    alt="Alphabite"
                                />
                            </div>
                        </ div>
                        <p className="Section">The same year, I also mentored a group of students in 3D printing, acting as the teacher’s right-hand-man, if you will. This ultimately got me a paid role at a neighboring school, PS6, for the following year. This was a large after-school workshop program with dozens of students in the 3D printing activities. I helped mentor the students and maintained multiple 3D printers.</p>
                    </div>
                    <div className='Project'>
                        <h3 className="Section">Hobbies</h3>
                        <p className="Section">My hobbies are well reflected in this portfolio. These further include: tennis, running, sailing, and philosophy.</p>
                    </div>
                </div>
                <div className="TBC">
                    <h2 className="TBC">To Be Continued...</h2>
                </div>
            </div>
            <Footer page="Portfolio"/>
        </div>
    );
}

export default Portfolio;