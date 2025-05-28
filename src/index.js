import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import TuneTrek from './tunetrek';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootswatch/dist/lux/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tunetrek" element={<TuneTrek />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
