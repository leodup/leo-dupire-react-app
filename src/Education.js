import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

import Library from "./images/Library.jpg"; //https://www.weforum.org/agenda/2021/12/diversity-inclusion-human-library/
import NYU from "./images/NYU.png";
import NEU from "./images/NEU.png"; // https://www.google.com/search?q=northeastern+university+logo&rlz=1C5CHFA_enAU806AU806&sxsrf=ALiCzsY0AIofA2r-Ylu6_-E7EYIkgHjUsw:1657999670977&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjWg7SLkv74AhX4GVkFHRJgDCsQ_AUoAXoECAEQAw&biw=1527&bih=762&dpr=2.2#imgrc=jFaBWjkNtOSB5M&imgdii=v84AuK80Z_B2sM
import LFNY from "./images/LFNY.png";

const Education = () => {

    const NYUDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const NYUDesc2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    const NEUDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const NEUDesc2 = "I completed my first semester of university abroad in Melbourne, Australia. This term lasted from July 2018 until December 2018. During this time, I was involved in student organizations such as the Formula SAE team, in which I began the research and design process for a custom wind-tunnel. Unfortunately, due to my limited time in Melbourne, I handed the project back to the local students as I returned to the States.";
    const LFNYDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const LFNYDesc2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    return (
        <>
            <div className="body" id="Education">
                <div className="Header" id="Education">
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
                            <p id="Desc1">{NYUDesc2}</p>
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
                            <p id="Desc2">{NEUDesc2}</p>
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
                            <p id="Desc3">{LFNYDesc2}</p>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    );
}

export default Education;