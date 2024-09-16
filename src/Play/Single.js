import './Play2.css';
import LeoDisk from "../images/PlayImg/Disk.png";

const Single = (props) => {
    return (
        <>
            <div class="bottom3" style={{ position: 'relative', rotate: props.theta }}>
                <div className='ContCont2'>
                    <div className='Cont1'>
                        <div className='HeaderName2'>
                            <div className='HeaderNameInner'>
                                <img
                                    src={LeoDisk}
                                    alt="Single Background"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top3' style={{ position: 'absolute' }}>
                <div class="container2">
                    <div className='HeaderName2'>
                        <p className='rec2'>{props.single}</p>
                    </div>
                </div>
            </div>
    </>
    );
}

export default Single;