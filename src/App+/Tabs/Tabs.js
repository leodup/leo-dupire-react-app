import './Tabs.css';
import { HashLink as Link } from 'react-router-hash-link';

const Tabs = (props) => {
    const title1 = props.title1;
    const title2="Work"
    const title3="Education"
    const title4="Portfolio"

    const link1= props.link1
    const link2="/work"
    const link3="/education"
    const link4="/portfolio"

    return (
        <div className="CenterTabs" id={props.page}>
            <div className="Tabs">
                <Link to={link1} style={{ textDecoration: 'none' }}>
                    <div className="Tab" id={props.page}>
                        <p id="pText">{title1}</p>
                    </div>
                </Link>
                <Link to={link2} style={{ textDecoration: 'none' }}>
                    <div className="Tab" id={props.page}>
                        <p id="pText">{title2}</p>
                    </div>
                </Link>
                <Link to={link3} style={{ textDecoration: 'none' }}>
                    <div className="Tab" id={props.page}>
                        <p id="pText">{title3}</p>
                    </div>
                </Link>
                <Link to={link4} style={{ textDecoration: 'none' }}>
                    <div className="Tab" id={props.page}>
                        <p id="pText">{title4}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Tabs;
