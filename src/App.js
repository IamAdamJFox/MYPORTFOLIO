import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import "./Style/App.css";

function App() {
    return (
      <div className="App">
        <Router>
        <Header/>
          <div className="container mt-5">
            <Routes>
              <Route path="/MYPORTFOLIO/" element={<About />} />
              <Route path="/MYPORTFOLIO-portfolio/" element={<About />} />
              <Route path="/MYPORTFOLIO/about" element={<About />} />
              <Route path="/MYPORTFOLIO/portfolio" element={<Portfolio />} />
              <Route path="/MYPORTFOLIO/contact" element={<Contact />} />
              <Route path="/MYPORTFOLIO/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }

  export default App;