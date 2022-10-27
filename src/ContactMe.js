import { Link } from 'react-router-dom';
import "./ContactMe.css";
import Email from "./images/Email.png";
import Phone from "./images/Phone.png";
import LinkedIn from "./images/LinkedIn.png";

const ContactMe = () => {

    return (
        <div>
            <div className="ContactMe">
                <Link to="/">
                    <div className="HomeLinkContact" id="HomeContact">
                        <p id="HomeLinkContact">Home</p>
                    </div>
                </Link>
                <div className="Curtain1"></div>
                <div className="Curtain2"></div>
                <div className='HoneyComb'></div>
                <h1 id="ContactMe">Contact Me</h1>
            </div>
            <div className="ContactMe2">
                <div className="Symbol">
                    <img
                        className="contactIcon"
                        src={Email}
                        alt="Email"
                    />
                    <div className="ContactInfo">
                        <h2 id="Contact">Email</h2>
                        <p className="Contact">
                            <b>Personal:</b> leo.dupire@gmail.com <br></br>
                            <b>School:</b> ld2494@nyu.edu
                        </p>
                    </div>
                </div>
                <div className="Symbol">
                    <img
                        className="contactIcon"
                        src={Phone}
                        alt="Phone"
                    />
                    <div className="ContactInfo">
                        <h2 id="Contact">Phone Number</h2>
                        <p className="Contact">
                            <b>Mobile:</b> +1 (646) 696-0521 <br></br>
                        </p>
                    </div>
                </div>
                <div className="Symbol">
                    <img
                        className="contactIcon"
                        src={LinkedIn}
                        alt="LinkedIn"
                    />
                    <div className="ContactInfo">
                        <h2 id="Contact">LinkedIn</h2>
                        <p className="Contact">
                            <b>Profile:</b> <a target="_blank" href="https://www.linkedin.com/in/léo-dupire-47387a183">linkedin.com/in/léo-dupire-47387a183</a><br></br>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2></h2>
            </div>
        </div>
    );
}

export default ContactMe;