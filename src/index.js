import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aportes from './pages/aporte';

ReactDOM.render( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/aportes" element={<Aportes/>}/>
    </Routes>
  </BrowserRouter>,
    document.getElementById('root')
);