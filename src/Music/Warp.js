import './Music.css';
import LeoDisk from "../images/PlayImg/Disk.png";

const Single = (props) => {
    return (
        <>
            <div className='black'>
                <div className='releases'>
                    <h1>SINGLES</h1>
                    <div className='songs'>
                        <div className='divider'></div>
                        <div className='song'>
                            <p className='record'>SIRENS</p>
                            <p className='recStat'>10/18</p>
                        </div>
                        <div className='divider'></div>
                        <div className='song'>
                            <p className='record'>MAD MAN</p>
                            <p className='recStat'>11/29</p>
                        </div>
                        <div className='divider'></div>
                        <div className='song'>
                            <p className='record'>NO TIME</p>
                            <p className='recStat' >01/10</p>
                        </div>
                        <div className='divider'></div>
                    </div>
                </div>
            </div>
            <div className='contCorpus' style={{ height: height2}}>
                <div class="bottom2" style={{ height: height2}}>
                    <div className='ContCont'>
                        <div className='Cont2'>
                            <div className='crt'></div>
                        </div>
                    </div>
                </div>
                <div className='top2' style={{ height: height2}}>
                    <div className='releases'>
                        <h1 style={{ color: "rgb(127 163 176)" }}>LIVE</h1>
                        <div className='songs'>
                            <div className='divider2'></div>
                            <div className='song'>
                                <p className='record' style={{ color: "rgb(127 163 176)" }}>NYC</p>
                                <p className='recStat' style={{ color: "rgb(127 163 176)" }}>Coming Soon</p>
                            </div>
                            <div className='divider2'></div>
                            <div className='song'>
                                <p className='record' style={{ color: "rgb(127 163 176)" }}>More to follow</p>
                                <p className='recStat' style={{ color: "rgb(127 163 176)" }}>...</p>
                            </div>
                            <div className='divider2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Single;