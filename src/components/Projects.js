import React from 'react';

const Projects = ({ showMenu }) => {

    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="projects">
                <h1 id='title-projects' className='lg-leading'>Projects</h1>
                <div id='ls-projects' className='ls-projects'>
                    Project
                </div>
            </main>
        </div>
    )

}

export default Projects;