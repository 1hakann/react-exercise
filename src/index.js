import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import './css/birthday.css';
//import './css/userlist.css';
// import './css/accordion.css'
import './css/menu.css'
import App from './App';
import TourApp from './components/first steps/10-TourApp';
import ReviewApp from './components/first steps/11-ReviewApp';
import Accordion from './components/first steps/12-AccordionApp.js'
import MenuApp from './components/13-MenuApp.js'

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <MenuApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
