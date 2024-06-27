// RotateComponent.js
import React, { useEffect, useRef, useState } from 'react';
import './Play.css';

const RotateComponent = () => {
  const rotatingDivRef = useRef(null);
  const rotatingDivRef2 = useRef(null);

  useEffect(() => {
    // Apply rotation after the component has mounted
    rotatingDivRef.current.style.transform = 'rotate(0deg)';
    rotatingDivRef2.current.style.transform = 'rotate(0deg)';
  }, []);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationDegree = Math.min((scrollPosition / 750) * 180, 180);
      setRotation(rotationDegree);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [text, setText] = useState('Original Text');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setText('037');
      } else {
        setText('Léo');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numDots = 10000;
    const dotsArray = [];
    const centerX = 750;
    const centerY = 750;
    const maxRadius = 750;

    for (let i = 0; i < numDots; i++) {
      const angle = i * 0.01;
      const radius = (i / numDots) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      dotsArray.push({ x, y });
    }

    setDots(dotsArray);
  }, []);


  return (
    <>
        <div className='all'>
            <h1></h1>
            <div className="rotate-container">
                <div className="vinyl" ref={rotatingDivRef} style={{ transform: `rotate(${rotation}deg)`}}>
                    {dots.map((dot, index) => (
                        <div
                        key={index}
                        className="spiral-dot"
                        style={{left: `${dot.x}px`, top: `${dot.y}px`}}
                        ></div>
                    ))}
                    <h2 id="name">{text}</h2>
                </div>
                <div className="label" ref={rotatingDivRef2} style={{ transform: `rotate(${rotation}deg)`}}>
                    <p id="label_text">Musician <br/> Lorem Ipsum
                    </p>
                </div>
                <div className="spoke"></div>

                <div className='peek'></div>
            </div>
        </div>
        <div className='bio'></div>
    </>
  );
};

export default RotateComponent;