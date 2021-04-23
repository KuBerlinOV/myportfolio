import React from 'react';
import Header from './Header';

const Projects = ({ showMenu }) => {

    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="about">

                <h2>My Projects</h2>
            </main>
        </div>
    )

}

export default Projects;