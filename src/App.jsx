// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;