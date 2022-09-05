import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import ScrollToTop from "./ScrollToTop";

import Home from './Home.js';
import Work from './Work.js';
import Education from "./Education.js"
import Portfolio from "./Portfolio.js"
import Hobbies from "./Hobbies.js"
import ContactMe from "./ContactMe.js"


function App() {

  const Footer = () => {
    return(
      <div className="Footer">
        <Link to="/">
          <p id="ReturnHome"><i class="fa fa-home fa-2x"></i></p>  {/*https://icons.getbootstrap.com*/}
        </Link>
      </div>
    )
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/work" element={
          <div>
            <Work />
            <Footer />
          </div>
        } />
        <Route path="/education" element={
        <div>
          <Education />
          <Footer />
        </div>
        } />
        <Route path="/portfolio" element={
          <div>
            <Portfolio />
            <Footer />
          </div>
        } />
        <Route path="/contactme" element={
          <div>
            <ContactMe />
            <Footer />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
