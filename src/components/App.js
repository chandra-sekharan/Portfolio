import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Home from './Home';
import Project from './Projects';
import Skills from './Skills';
import About from './About';
import Loader from './Loader';

const App = () => {
  const [loading , setloading] = useState(true);

  useEffect(()=>{
     setTimeout(()=>{
         setloading(false);
     },2495)
  },[]);
  const trigger = ()=>{
    document.getElementsByClassName("skill-card")[0].style.display="block";
  }
  return (
    <>
    {loading ? <Loader/> :
   <div className="main" onScroll={trigger}>
    <Home/>
    <Skills/>
    <Project/>
    <About/>
    </div>
    }
    </>
    );
    
}

export default App;
