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
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch( Sticky(), Fade(), MoveOut(0,-200))}>
                        <div className="Portfolio">
                            <img
                                className="CrossBow"
                                src={CrossBow}
                                alt="Crossbow"
                            />
                            <Link to="/">
                                <div className="PortfolioLink">
                                    <p id="PortfolioLink">Home</p>
                                </div>
                            </Link>
                            <h1 id="Portfolio">PORTFOLIO</h1>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={MoveIn(0,200)}>
                        <div className="Portfolio">
                            <h1 id="Portfolio">P2</h1>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <div>
                <h2>hello</h2>
            </div>
        </div>
    );
}

export default Portfolio;