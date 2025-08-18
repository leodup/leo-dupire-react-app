import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';
import ScrollToTop from "./ScrollToTop";

import Home from '../Home/Home.js';
import Work from '../Work/Work.js';
import Education from "../Education/Education.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Portfolio2 from "../Portfolio2/Portfolio2.js";
import Music from "../Music/Music.js";
import Menu from '../Menu/Menu.js';


function App() {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Léo Dupire</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="About Léo Dupire" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            {/* <Footer /> */}
          </div>
        } />
        <Route path="/menu" element={
          <div>
            <Menu />
            {/* <Footer /> */}
          </div>
        } />
        <Route path="/work" element={
          <div>
            <Work />
            {/* <Footer /> */}
          </div>
        } />
        <Route path="/education" element={
        <div>
          <Education />
          {/* <Footer /> */}
        </div>
        } />
        <Route path="/portfolio" element={
          <div>
            <Portfolio />
            {/* <Footer /> */}
          </div>
        } />
        <Route path="/portfolio2" element={
          <div>
            <Portfolio2 />
            {/* <Footer /> */}
          </div>
        } />
        <Route path="/music" element={
          <div>
            <Music />
            {/* <Footer /> */}
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
