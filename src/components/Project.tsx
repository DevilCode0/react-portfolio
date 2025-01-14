import React from "react";
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Home Server</h2></a>
                <p>This project is a home server equipped with ZFS redundant storage, hosting over 30 Docker containers that support various services including smart home automation, DNS, Git, VPN, and NextCloud.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Buildify</h2></a>
                <p>My second graduation project for my bachelor's degree It's an application for creating CVs and making authentication links for your certificates</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>SpotHole</h2></a>
                <p>This project is a home server equipped with ZFS redundant storage, hosting over 30 Docker containers that support various services including smart home automation, DNS, Git, VPN, and NextCloud.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Library store website</h2></a>
                <p>A graduation project for my associate's degreel.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;