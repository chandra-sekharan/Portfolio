import React from "react";
import './styles/project.css';
import movielogo from './images/movieflix.png';
import spotify from './images/spotify.png';
import calculator from './images/calculator.png';
import notes from './images/note.png';

const Project = ()=>{
    return(
        <div className="projects" id="projects">
        <h1>My Projects</h1>
       <div className="project-section">
            <div className="project-display">  
            <a href="https://www.movieflix-cs.ml/" target="_blank" rel="noreferrer"><img src={movielogo} alt=""  /></a>
                <div className="discript">
                <p>This is a movie based React Application made using TMDB API and React</p>
                </div>                
                <div className="pro-name">
                    <h6><a href="https://www.movieflix-cs.ml/" target="_blank" rel="noreferrer">MovieFlix</a></h6>
                </div>
            </div>
            <div className="project-display">
            <a href="https://spotify-react-cs.herokuapp.com/" target="_blank" rel="noreferrer"><img src={spotify} alt="" className="otherimages1" /></a>
                
                <div className="discript">
                <p>This is a Spotify React Application made using SpotifyAPI and React</p>
                </div>                
                <div className="pro-name">
                    <h6><a href="https://spotify-react-cs.herokuapp.com/" target="_blank" rel="noreferrer">Spotify</a></h6>
                </div>
            </div>
            <div className="project-display">
            <a href="https://calculator-cs.netlify.app/" target="_blank" rel="noreferrer"><img src={calculator} alt="" className="otherimages" /></a>
                
                <div className="discript">
                <p>This is a Calculator React Application made using React</p>
                </div>
                
                <div className="pro-name">
                    <h6><a href="https://calculator-cs.netlify.app/" target="_blank" rel="noreferrer">Calculator</a></h6>
                </div>
                
            </div>
            <div className="project-display">
            <a href="https://note-management-crud.netlify.app/" target="_blank" rel="noreferrer"><img src={notes} alt="" className="otherimages" /></a>
                
                <div className="discript">
                <p>This is a Notes React Application made using React </p>
                </div>                
                <div className="pro-name">
                    <h6><a href="https://note-management-crud.netlify.app/" target="_blank" rel="noreferrer">Note Application</a></h6>
                </div>
              
            </div>
       </div>
    </div>
    );
}

export default Project;
