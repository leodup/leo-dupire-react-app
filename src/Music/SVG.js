import './Music.css';

const SVG = (props) => {
    return (
        <>
            <svg className="svg" style={{ height: 0 }}>
                <filter id="warp1">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.005" 
                        numOctaves="3" 
                        result="waves"
                    ></feTurbulence>
                    <feColorMatrix in="waves" type="hueRotate">
                        <animate 
                            attributeName="values" 
                            values="0;360" 
                            dur="12s" 
                            repeatCount="indefinite" 
                        ></animate>
                    </feColorMatrix>
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        scale="50" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    ></feDisplacementMap>
                </filter>
                <svg className="svg" style={{ height: 0 }}>
                    <filter id="warp2">
                        <feTurbulence 
                            type="fractalNoise" 
                            baseFrequency="0.005" 
                            numOctaves="3" 
                            result="waves"
                        ></feTurbulence>
                        <feColorMatrix in="waves" type="hueRotate">
                            <animate 
                                attributeName="values" 
                                values="0;360" 
                                dur="6s" 
                                repeatCount="indefinite" 
                            ></animate>
                        </feColorMatrix>
                        <feDisplacementMap 
                            in="SourceGraphic" 
                            scale="40" 
                            xChannelSelector="R" 
                            yChannelSelector="G"
                        ></feDisplacementMap>
                    </filter>
                </svg>
            </svg>
        </>
    );
}

    export default SVG;