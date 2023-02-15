import './Tabs.css';
import { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Tabs = (props) => {
    return (
        <div className="CenterTabs">
            <div className="Tabs">
                <div className="Filler">
                    <Link to={props.link1} style={{ textDecoration: 'none' }}>
                        <div className="Tab">
                            <p>{props.title1}</p>
                        </div>
                    </Link>
                </div>
                <div className="Filler">
                    <Link to={props.link2} style={{ textDecoration: 'none' }}>
                        <div className="Tab">
                            <p>{props.title2}</p>
                        </div>
                    </Link>
                </div>
                <div className="Filler">
                    <Link to={props.link3} style={{ textDecoration: 'none' }}>
                        <div className="Tab">
                            <p>{props.title3}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Tabs;
