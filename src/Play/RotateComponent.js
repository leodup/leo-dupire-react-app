// RotateComponent.js
import React, { useEffect, useRef, useState } from 'react';
import './Play.css';
import Monta from "../images/PlayImg/Monta.jpg";

const RotateComponent = () => {
  const rotatingDivRef = useRef(null);
  const rotatingDivRef2 = useRef(null);
  const rotatingDisk = useRef(null);

  useEffect(() => {
    // Apply rotation after the component has mounted
    rotatingDivRef.current.style.transform = 'rotate(0deg)';
    rotatingDivRef2.current.style.transform = 'rotate(0deg)';
    rotatingDisk.current.style.transform = 'rotate(0deg)';
  }, []);

  const [rotation, setRotation] = useState(360);
  const [fade, setFade] = useState(1);
  const [border, setBorder] = useState(0);
  const [tape_width, setTapeWidth] = useState(0);
  const [bar_fade, setBarFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationDegree = - (scrollPosition / 750) * 180;
      const fadeAmount = Math.max(1 - scrollPosition/400, 0);

      if (scrollPosition < 400) {
        const BorderWidth = 0;
        const TapeWidth = 0;
        const BarFade = 1;
        setBorder(BorderWidth);
        setTapeWidth(TapeWidth);
        setBarFade(BarFade);

      } 
      else if (scrollPosition < 1000) {
        const BorderWidth = Math.min((scrollPosition-400)/5, 30);
        const TapeWidth = Math.min((scrollPosition-400)/5, 10);
        const BarFade = Math.max(1 - (scrollPosition-400)/100, 0);
        setBorder(BorderWidth);
        setTapeWidth(TapeWidth);
        setBarFade(BarFade);
      }

      setRotation(rotationDegree);
      setFade(fadeAmount);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [size_disk, setSize_disk] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 150) {
        const sizeAmount = window.innerHeight -2 + scrollPosition/2
        setSize_disk(sizeAmount);
      }
      else if (scrollPosition < 400) {
        const sizeAmount = window.innerHeight -2 + scrollPosition/2 + (scrollPosition - 150)**1.4
        setSize_disk(sizeAmount);
      }
      else {
        const sizeAmount = window.innerHeight -2 + scrollPosition/2 + (scrollPosition - 150)**1.4 + (scrollPosition - 400)**2
        setSize_disk(sizeAmount);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const [text, setText] = useState('le');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setText('le');
      } else {
        setText('le');
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
            <div className="background-disk">
              <div className="background-disk-content">
                <div className="background-cover" ref={rotatingDisk} style={{height: size_disk, width: size_disk}}></div>
              </div>
            </div>
            <div className="rotate-container">
                <div className="vinyl" ref={rotatingDivRef} style={{ transform: `rotate(${rotation}deg)`, border: `${border}px solid rgb(255, 255, 255)`}}>
                    <div className='bar1' style={{ opacity: 1-bar_fade}}></div>
                    <div className='bar2' style={{ opacity: 1-bar_fade}}></div>
                    <div className="vinyl-content" style={{ opacity: fade}}>
                      {/* <h2 id="name">{text}</h2> */}
                    </div>
                </div>
                <div className="label" ref={rotatingDivRef2} style={{ transform: `rotate(${rotation}deg)`}}>
                    <p id="label_text">Musician <br/> Lorem Ipsum
                    </p>
                </div>
                <div className="spoke"></div>

                {/* <div className='peek'></div> */}
            </div>
        </div>
        <div className='tape' style={{width: `${tape_width}px`}}></div>
        <div className='bio'>
          <div className='bio-content'>
            <div className='releases'>
              <h2 id="Play">releases</h2>
              <p id="Play">Sirens <br></br>Mad Man <br></br>No Time</p>
            </div>
            <div className='shows'>
              <h2 id="Play">upcoming shows</h2>
              <p id="Play">None Yet</p>
            </div>
            <div className='socials'>
              <h2 id="Play">socials</h2>
              <p id="Play">TikTok <br></br>Instagram <br></br>YouTube</p>
            </div>
            <div className='socials'>
              <h2 id="Play">bio</h2>
              <p id="Play">Hey! My name is Léo Dupire. I'm French, Swedish, and grew up in NYC. I'm a composer, guitarist, pianist, and singer. I primarily make alternative rock. I draw inspiration from multiple cultures in opera, classical music, and many more modern sources that I'll keep to myself for now. If you like Queen, Radiohead, Jeff Buckley, and "noises" made by a French/Swedish guy from a medieval village who grew up in NYC, I think you might like my music! Thank you for checking out my page; I'm quite responsive on socials so please reach out! <br></br><br></br>- Léo</p>
            </div>
            <div className='Monta'>
              <img
                  className="MontaImg"
                  src={Monta}
                  alt="Léo Image"
              />
              <p id="Play">2 0 2 1</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default RotateComponent;