import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const title1="Home"
    const title2="Work"
    const title3="Education"
    const title4="Portfolio"
    const link1="/"
    const link2="/work"
    const link3="/education"
    const link4="/portfolio"

    return (
        <div className="Footer" id={props.page}>
            <div className="CenterFooter" id={props.page}>
                <div className="FooterItems">
                    <Link to={link1} style={{textDecoration:'none'}}>
                        <div className="FooterItem" id={props.page}>
                            <p>{title1}</p>
                        </div>
                    </Link>
                </div>
                <div className="FooterItems">
                    <Link to={link2} style={{textDecoration:'none'}}>
                        <div className="FooterItem" id={props.page}>
                            <p>{title2}</p>
                        </div>
                    </Link>
                </div>
                <div className="FooterItems">
                    <Link to={link3} style={{textDecoration:'none'}}>
                        <div className="FooterItem" id={props.page}>
                            <p>{title3}</p>
                        </div>
                    </Link>
                </div>
                <div className="FooterItems">
                    <Link to={link4} style={{textDecoration:'none'}}>
                        <div className="FooterItem" id={props.page}>
                            <p>{title4}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Footer;