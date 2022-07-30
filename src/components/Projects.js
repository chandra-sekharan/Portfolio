import React from "react";
import './styles/project.css';
import movie from './images/movie.png';
import spotify from './images/spotify.png';
import weather from './images/weather.png';
import notes from './images/notes.png';

const Project = ()=>{
    return(
        <div className="projects" id="projects">
        <h1>My Projects</h1>
       <div className="project-section">
            <div className="project-display">            
                <img src={movie} alt=""  />
                <div className="git">
                    <h5>Git URL <a href="https://github.com/chandra-sekharan/MovieFlix" target="_blank" rel="noreferrer">link</a></h5>
                    <h5>Deploy URL <a href="https://www.movieflix-cs.ml/" target="_blank" rel="noreferrer">link</a></h5>
                </div>
                <div className="pro-name">
                    <h6><a href="https://www.movieflix-cs.ml/" target="_blank" rel="noreferrer">MovieFlix</a></h6>
                </div>
            </div>
            <div className="project-display">
                <img src={spotify} alt="" className="otherimages1" />
                <div className="git">
                    <h5>Git URL <a href="https://github.com/chandra-sekharan/Spotify-react" target="_blank" rel="noreferrer">link</a></h5>
                    <h5>Deploy URL <a href="https://spotify-react-cs.herokuapp.com/" target="_blank" rel="noreferrer">link</a></h5>
                </div>
                <div className="pro-name">
                    <h6> <a href="https://spotify-react-cs.herokuapp.com/" target="_blank" rel="noreferrer">Spotify</a></h6>
                </div>
            </div>
            <div className="project-display">
                <img src={weather} alt="" className="otherimages" />
                <div className="git">
                    <h5>Git URL <a href="https://github.com/chandra-sekharan/Weather-Application" target="_blank" rel="noreferrer">link</a></h5>
                    <h5>Deploy URL <a href="https://weather-app-cs.herokuapp.com/" target="_blank" rel="noreferrer">link</a></h5>
                </div>
                <div className="pro-name">
                    <h6><a href="https://weather-app-cs.herokuapp.com/" target="_blank" rel="noreferrer">Weather</a></h6>
                </div>
            </div>
            <div className="project-display">
                <img src={notes} alt="" className="otherimages" />
                <div className="git">
                    <h5>Git URL <a href="https://github.com/chandra-sekharan/Note-Application" target="_blank" rel="noreferrer">link</a></h5>
                    <h5>Deploy URL <a href="https://cs-notes-app.herokuapp.com/" target="_blank" rel="noreferrer">link</a></h5>
                </div>
                <div className="pro-name">
                    <h6><a href="https://cs-notes-app.herokuapp.com/" target="_blank" rel="noreferrer">Notes</a></h6>
                </div>
            </div>
       </div>
    </div>
    );
}

export default Project;
