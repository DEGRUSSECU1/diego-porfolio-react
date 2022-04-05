import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import "./components/css/fonts/TextFonts.net_brice-font-family/Brice-Black.otf";
import { BrowserRouter } from "react-router-dom";
import "./components/css/components/app.scss"
ReactDOM.render(
  
     <BrowserRouter><App /></BrowserRouter>
,
  document.getElementById('root')
);

