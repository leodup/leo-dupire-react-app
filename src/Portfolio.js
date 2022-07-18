import { Link } from 'react-router-dom';
import "./Portfolio.css";
import CrossBow from "./images/CrossBow.jpg";

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

const Portfolio = () => {
    
    return (
        <div>
            <div className="Portfolio">
                <Link to="/">
                    <div className="PortfolioLink">
                        <p id="PortfolioLink">Home</p>
                    </div>
                </Link>
                <h1 id="Portfolio">PORTFOLIO</h1>
            </div>
            <div className="Portfolio">
                <h1 id="Portfolio">P2</h1>
            </div>
            <div>
                <h2>hello</h2>
            </div>
        </div>
    );
}

export default Portfolio;