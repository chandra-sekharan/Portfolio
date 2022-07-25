import React from 'react';
import './styles/App.css';
import Home from './Home';
import Project from './Projects';
import Skills from './Skills';
import About from './About';
import Loader from './Loader';

const App = () => {
  const trigger = ()=>{
    document.getElementsByClassName("skill-card")[0].style.display="block";
  }
  return (
    <div className="main" onScroll={trigger}>
    <Home/>
    <Skills/>
    <Project/>
    <About/>
    </div>
    );
    
}

export default App;
