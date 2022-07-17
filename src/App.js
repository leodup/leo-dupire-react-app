import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import ScrollToTop from "./ScrollToTop";

import Home from './Home.js';
import Work from './Work.js';
import Education from "./Education.js"

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
        <Route path="/work" element={
          <div>
            <Work />
            <Footer />
          </div>
        } />
        <Route path="/" element={
          <div>
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/education" element={
        <div>
          <Education />
          <Footer />
        </div>
        
        } />
      </Routes>
      </>
  );
}

export default App;
