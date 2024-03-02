import React, { Component } from 'react';
import { Routes , Route } from 'react-router-dom'
import Dashboard from "./Pages/Experience";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
