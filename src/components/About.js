import React from 'react';
import portrait from '../images/portrait.jpg'
import Header from './Header'

const About = ({ showMenu }) => {

    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="about">

                <div class="about-branding">
                    <img src={portrait} alt="myportrait" />
                </div>
                <div class="about-me">
                    <h2 class="about-me-title">Let me introduce myself:</h2>
                    <p class="about-me-text">I am a self-taught web developer born in the Republic of Kalmykia in Russia and
                    lived in Elista, Moscow, Taipei and Berlin.
                    Before beginning my journey in tech, I studied art theory and art history as well
                    as pursued career of a musician as the frontman, singer and bass player of the Moscow based
                    indie-rock
                    band Bubbles&ZePieretta. In 2016 I moved to Berlin to do my PhD studies and conduct the research on
                    the
                    Soviet architecture.
                    It was during the work on my doctoral thesis in 2020 when I was exposed to programming and began to
                    teach coding myself with the help of FreeCodeCamp, Codecademy and various youtube tutorials.
                    Coding became my passion. It offered me something, what my research and PhD studies could not,
                    that
                    is a room for creativity, constant learning and challenging tasks. Since then I decided
                to change my career and become a web developer.</p>
                </div>
            </main>
        </div>
    )
}

export default About;