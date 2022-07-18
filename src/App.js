import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import ScrollToTop from "./ScrollToTop";

import Home from './Home.js';
import Work from './Work.js';
import Education from "./Education.js"
import Portfolio from "./Portfolio.js"
import Hobbies from "./Hobbies.js"

function App() {

  const Footer = () => {
    return(
      <Link to="/">
        <p id="ReturnHome">Return Home</p>
      </Link>
    )
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
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
        <Route path="/hobbies" element={
          <div>
            <Hobbies />
            <Footer />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
