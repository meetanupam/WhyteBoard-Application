import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Pages/Contact';
import './index.css';
import About from './components/Pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
