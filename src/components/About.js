import React from 'react';
import portrait from '../images/portrait.jpg'
import Header from './Header'

const About = ({ showMenu }) => {

    return (
        <div>
            <main className={` ${showMenu === true ? "hide" : "show"}`} id="about">

                <div className="about-branding">
                    <img src={portrait} alt="myportrait" />
                </div>
                <div className="about-me">
                    <h2 className="about-me-title md-heading">Hey there, my name is Basan!</h2>
                    <p className="about-me-text">I am from the steppe region in the southern part of Russia, Kalmykia
                        but currently based in Berlin.
                        For the past five years I have been doing my PhD studies in Berlin and Jena researching
                        the history of Soviet architecture.
                        During the coronavirus pandemic I seized an opportunity to dive into a long-time passion of web development and coding.
                        Now I can proudly say that I have changed my career from the junior researcher to the front end developer.
                        My language of choice is Javascript and I find myself comfortable using React, SASS, Firebase, NodeJS, Express, GrahpQL, MySQL and MongoDB. However, I am always keen to learn new technologies.
                        Apart from sitting in front of
                        Visual Studio Code and coding, you can also often find me
                        writing electronic music, playing drums,
                        riding a long board or refurbishing old bikes, and more coding.
                        Thank you for visiting my portfolio!
                        I am a very open person so please don't hesitate to reach out
                        if you would like to know more!</p>
                </div>
            </main>
        </div>
    )
}

export default About;