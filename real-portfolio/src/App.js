import React, { Component } from 'react';
import { Routes , Route } from 'react-router-dom'
import Dashboard from "/Pages/Dashboard";
import About from "/Pages/About";
import Projects from "/Pages/Projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
