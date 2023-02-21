import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App+/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
);
