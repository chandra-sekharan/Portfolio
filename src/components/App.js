import React from 'react';
import './styles/App.css';
import Home from './Home';
import Project from './Projects';
import Skills from './Skills';
import About from './About';
import Loader from './Loader';

const App = () => {
  return (
    <div className="main">
    <Home/>
    <Skills/>
    <Project />
    <About/>
    </div>
    );
    
}

export default App;
