import React from 'react';
import profile from './images/chandu.jpeg';
import './styles/Home.css';
import resume from './Resume.pdf';

const Home = () => {
    const menubar = () => {

        var container = document.getElementsByClassName("container")[0];
        container.classList.toggle("change");
        var menu = document.getElementsByClassName("menu")[0];
        menu.classList.toggle("change");
      }
    return(
        <>
        <div className="container" id="home">
         <div className='menu-icon' onClick={menubar}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
         </div>
        <div className="menu">
        <div className='menu-icon' onClick={menubar}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
        </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div className="content">
            <div className="title">
                <div className='section_inform'>
                <h4>&nbsp;Hi,</h4>
                <h3>&nbsp;I'<span id="hi">m</span></h3>
                <h1><span className="c" >C</span><span className="h" >h</span><span className="a" >a</span><span className="n" >n</span><span className="d" >d</span><span className="r" >r</span><span className="a1" >a</span>&nbsp;<span className="s" >S</span><span className="h1" >h</span><span className="e" >e</span><span className="k" >k</span><span className="a3" >a</span><span className="r" >r</span></h1>
                <label>A Full Stack Web Developer</label><br/>
                <div className='social_links'>
                <a href="https://www.facebook.com/chandrasekharan.cs/" target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="35" viewBox="0 0 50 50" >    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path></svg></a>
                <a href="https://www.instagram.com/chandrasekharan_cs/" target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64" ><path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path></svg></a>
                <a href="https://twitter.com/chandu_the_cs" target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30" >    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg></a>
                <a href="https://github.com/chandra-sekharan" target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30" >    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg></a><br></br>
                </div>
                <a href={resume} target="_blank" rel='noreferrer' ><button>Resume &nbsp;<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVRIie2RMQ5AUBAFR6JVOAdKNBJ8nZs7ilPQvIJEIpHdyk7zik1mioUgeKEGWs9AD+zA6BkZFEkR+RTJtA2wGkZmYAG2/HIojQKF9jDy3XD9Q8gf6SSfPOQAlSLBnzkBeWIR2zGAlB0AAAAASUVORK5CYII=" alt='' /></button></a>
                </div>
            </div>
            <div className="avatar-back">
                <div className='image_section'>
                <img className="framed" src={profile} alt="" width="80%" />              
                </div>
            </div>
        </div>
   </div>
 
        </>
    );
}

export default Home;
