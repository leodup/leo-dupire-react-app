import { Link } from 'react-router-dom';
import "./Portfolio.css";
import CrossBow from "./images/CrossBow.jpg";

import DataScienceText from "./images/DataScienceText.png";
import ComputerScienceText from "./images/ComputerScienceText.png";
import MechEText from "./images/MechEText.png";
import RandomText from "./images/RandomText.png";

import DataScienceIcon from "./images/DataScienceIcon.png";
import ComputerScienceIcon from "./images/ComputerScienceIcon.png";
import MechEIcon from "./images/MechEIcon.png";
import RandomIcon from "./images/RandomIcon.png";

import CodeImage from "./images/CodeImage.jpg";

const Portfolio = () => {
    
    return (
        <div>
            <div className="PortfolioHeader">
                <div className="LinesLeft"></div>
                <Link to="/">
                    <div className="PortfolioLink">
                        <p id="PortfolioLink">Home</p>
                    </div>
                </Link>
                <div className='Blocks'>
                    <div className="Top">
                        <div className="Q1">
                            <img
                                className="TitleText1"
                                src={DataScienceText}
                                alt="Data Science Text"
                            />
                            <div className="BlockTop">
                                <p id="DS-Box-Title">Data Science</p>
                            </div>
                            <p id="DS-Box-Text">
                                <ul>
                                    <li>Identifying Multilingual Misinformation</li>
                                    <li>Disparity and Bias Mitigation</li>
                                    <li>Intro to Data Science</li>
                                </ul>
                            </p>
                        </div>
                        <div className="Q2">
                            <img
                                className="TitleText2"
                                src={ComputerScienceText}
                                alt="Computer Science Text"
                            />
                        </div>
                    </div>
                    <div className="Bottom">
                        <div className="Q3">
                            <img
                                className="TitleText3"
                                src={MechEText}
                                alt="Mechanical Engineering Text"
                            />
                        </div>
                        <div className="Q4">
                            <img
                                className="TitleText3"
                                src={RandomText}
                                alt="Random Text"
                            />
                        </div>
                    </div>
                </div>
                {/* <img
                    className="Image"
                    src={CodeImage}
                    alt="Code Image"
                /> */}
            </div>
            <div className="Header1">
                <h1 id="Portfolio">PORTFOLIO</h1>
            </div>
            <div className="PortfolioBody">
                <div className="DataScience">
                    <h2 className="Section">Data Science</h2>
                    <h3 className="Section">NLP</h3>
                    <p className="Section"></p>
                    <h3 className="Section">Bias Mitigation</h3>
                    <p className="Section"></p>
                    <h3 className="Section">School Analysis</h3>
                    <p className="Section"></p>
                </div>
                <div className="ComputerScience">
                    <h2 className="Section">Computer Science</h2>
                    <h3 className="Section">This Website</h3>
                    <p className="Section"></p>
                    <h3 className="Section" id="DAC">Boston Museum of Science</h3>
                    <p className="Section">Cornerstone is an intensive engineering design course at Northeastern University. It covers 2D and 3D modeling software such as AutoCAD and Solidworks, programming languages like MATLAB and C++, robotics and circuit design using arduino and C++. The course also teaches decision making strategies, product design techniques, as well as ethical engineering practices.<br></br><br></br>
                        Completion of the course required a final project. My class’s assignment was a sustainability-themed museum exhibit for the Boston Museum of Science. I proposed the idea of carbon sequestration, the removal of CO​2 from the atmosphere to combat climate change.<br></br><br></br>
                        The exhibit had to be user friendly and appeal to users of all ages. For this, we made several iterations of our project, implementing universal design, and making it as intuitive as possible. This required several “focus group” meetings to see what the audience would want to see. I wanted to make the project as interactive as possible. This required all our programming, circuit building, and design skills to be put to use. We created a user interface using a touch screen as can be seen in Images 1 and 2. The goal of the exhibit was for the user to build his or her own negative emissions plant. Several user-decisions impacted their final score. These include: what to do with the CO​2,​ where to build the plant, and what energy source to use. Each step would subtract money from the budget. For maximum interactability, the user was tasked with building the plant using the blocks in Image 3. The amount of blocks used depended on what was left in the budget. This effectively tackled both the environmental and economical aspects of sustainability.</p>
                </div>
                <div className="MechE">
                    <h2 className="Section">Mechanical Engineering</h2>
                    <h3 className="Section" id="GoKart">Go Kart</h3>
                    <p className="Section">I built a car when I was twelve years old! For my birthday, I asked my parents, not for a present, but for a project. They couldn’t say no to such a request.<br></br><br></br>
                        All the Youtube videos showed similar factory-made go-karts. Those didn’t grasp my attention. My interest was in building the car, not just to drive it - so I decided to make my own, from scratch. Not that building a go-kart is easy, but I really wanted a challenge - so I made plans to implement my own suspension designs, effectively making it an off-road vehicle.<br></br><br></br>
                        I scoured Amazon, Ebay, and the local hardware stores for individual parts, materials, and equipment. I also had to make sure everything was compatible (bearings with axles, sprockets with chains). I bought a welder and angle grinder - among many, many other things - and taught myself how to use these tools. Items like the steering kit I had gotten had to be aggressively adapted to fit my custom dimensions. I finally finished the kart one year later as I could only advance during some weekends and part of the summer (not much space to build a small car in NYC). If I were to change anything, I would put hard compound Pirelli tires on it!</p>
                    <h3 className="Section" id="Ventilator">Resperatory Ventilator</h3>
                    <p className="Section">There is no better time to make a cost-effective home-made ventilator than in the middle of a global pandemic and ventilator shortage! Jokes aside, starting in mid-March, 2020, I went into quarantine with my family in New York. At the time, New York was an epicenter of the virus outbreak, the state itself having more cases than any other country. This led to shortages of hospital beds for the sick, not to mention life-saving ventilators. The cost per ventilator was said to be over 50 thousand dollars according to Forbes’ coverage of Governor Andrew Cuomo.<br></br><br></br>
                        Fearing for the safety of my parents, and lacking confidence in accessibility to essential healthcare, I decided to make my own ventilator.<br></br><br></br>
                        I already had the design in mind, I just had to find the correct parts online. Everything I ordered can be seen in Image 1 to the right, each item bought separately from the rest. I got to work! I could only advance at night and during week-ends because I was working from home for my previous co-op during the day.<br></br><br></br>
                        After a few days of doing wiring, soldering, a little bit of carpentry, and my fair share of programming in C++, I completed the ventilator (Images 2 & 3).<br></br><br></br>
                        My ventilator uses a bag valve mask to deliver the air to the patient. This means it pushes a certain volume of air into the patient’s lungs. It does not have the fancier features that hospitals have, such as pressure regulation. This project was meant to provide a life-line, a last resort in case of emergency. I still equipped it with a user interface (LCD screen), rpm variation inputs (buttons), and an alarm in case of a problem (button & speaker system). It also cost less than $200 in materials to make, a sizable step down from the 50 thousand I mentioned earlier.</p>
                    <h3 className="Section">Hydrodynamic Water Tunnel</h3>
                    <p className="Section">In 11th grade, I decided to conduct a research project with two classmates for our TPE (Travaux Personnels Encadrés) in the French Baccalaureate. In simplified terms, the requirements for this assignment were to complete a year-long project on essentially anything we wanted.<br></br><br></br>
                        As my team was trying to find an interesting subject for our project, I remembered a television program I had seen about submarines, in which they discussed the difficulties in creating efficient and stealthy propellers. One of the problems was cavitation, a phenomenon where low pressure on the backside of the propeller blades creates vapor bubbles that implode and create loud noises as well as damage to the propeller. We decided to explore this and conduct our own experiments on this subject. We settled on the prompt: How does the shape and material of a propeller affect its motor force?<br></br><br></br>
                        First, I designed a set of differing propellers that were to be tested. We printed them on 3D printers (Image 3). Then, I came up with a device to test the propellers. This can be seen in Images 1 and 2. Our findings supported our hypothesis. I received a 20/20 for the project, report, and presentation in front of a jury at the end of the school year.</p>
                    <h3 className="Section" id="Hyperloop">Hyperloop</h3>
                    <p className="Section"></p>
                </div>
                <div className="Random">
                    <h2 className="Section">Random</h2>
                    <h3 className="Section">Music</h3>
                    <p className="Section"></p>
                    <h3 className="Section">Alphabite</h3>
                    <p className="Section">In 9th grade, I worked after school with a teacher for a service learning project. We designed a number of educational puzzles for a school of kids in Haiti. We did this using the school’s new 3D printers, a relatively new technology at the time. The most notable puzzle was called AlphaBite. It was an alphabet puzzle with building blocks for each letter (vowels in red, consonants in blue). The shape I designed was very simple. It resembled a cylinder with a “bite” taken out of it, hence the name of the product. Haiti had a literacy rate of 61.7% in 2016 according to the CIA factbook.<br></br><br></br>
                        The same year, I also mentored a group of students in 3D printing, acting as the teacher’s right-hand-man, if you will.<br></br><br></br>
                        This ultimately got me a paid job at a neighboring school, PS6, for the following year. This was a large after-school workshop program with dozens of students in the 3D printing activities. I helped mentor the students and maintained multiple 3D printers.</p>
                    <h3 className="Section">Hobbies</h3>
                    <p className="Section"></p>
                </div>
                <h2 className="TBC">To Be Continued...</h2>
            </div>
        </div>
    );
}

export default Portfolio;