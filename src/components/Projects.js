import React from 'react';
import mysnimg from '../images/MySNimg.jpg'

const Projects = ({ showMenu }) => {

    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="projects">
                <h1 id='title-projects' className='lg-leading'>Projects</h1>
                <div id='ls-projects' className='ls-projects'>
                    <div className="project-card">
                        <div className='project-img2' alt='busking-radar-page' src='' />
                        <h2 className='hd-md'>Busking Radar</h2>
                        <p className="project-info">
                            Busking Radar is the final group project created in order to complete the Berlin TechLabs Bootcamp.
                            The team disciplines included UX/UI design, Web Development, and Data Science. All disciplines were
                            put into practice to develop Busking Radar. By
                            using interactive map for displaying street performances the Busking Radar makes outdoor
                            live entertainment easily discoverable for any user and helps buskers draw
                            a larger audience to their performances.

                        </p>
                        <h3 className='hd-sm'>Stack:</h3>
                        <div className='stack-container'>
                            <ul className='stack-ls'>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>MongoDB Atlas</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                            <ul className='stack-ls'>
                                <li>JWT</li>
                                <li>Mapbox GL JS</li>
                                <li>MomentJS</li>
                                <li>Axios</li>
                                <li>SASS</li>                            </ul>
                        </div>
                        <div className='btn-container'>
                            <a target='_blank' href='https://buskingradar.herokuapp.com/'  > <button className="btn-visit">Visit Project</button></a>
                            <a target='_blank' href='https://github.com/TechLabs-Berlin/st21-busking-radar' > <button className="btn-visit">Visit Github</button></a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className='project-img1' alt='mystudynotes-homepage' />
                        <h2 className='hd-md'>MyStudyNotes</h2>
                        <p className="project-info">
                            MyStudyNotes is a personal project I created during the time of self-study to put into practice what I was learning at the FreeCodeCamp and various other platforms for learning programming.
                            Even though, MyStudyNotes was created for practice it also aims to simplify a personal daily task when self-learning.
                            MyStudyNotes, therefore allows users to organize their learning material into libraries
                            and create notes to save the knowledge and materials accumulated during their self-study.
                        </p>
                        <h3 className='hd-sm'>Stack:</h3>
                        <div className='stack-container'>                            <ul className='stack-ls'>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Firebase</li>
                            <li>React</li>
                        </ul>
                            <ul className='stack-ls'>
                                <li>MomentJS</li>
                                <li>Axios</li>
                                <li>Redux</li>
                                <li>SASS</li>
                            </ul>
                        </div>
                        <div className='btn-container'>
                            <a target='_blank' href='https://my-study-notes.herokuapp.com/'> <button className="btn-visit">Visit Project</button></a>
                            <a target='blank' href='https://github.com/KuBerlinOV/my-study-notes/tree/main' ><button className="btn-visit">Visit Github</button></a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Projects;

