import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Each section should have an id corresponding to the hash-link */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Router>
  );
}

export default App;
