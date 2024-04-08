import React from 'react';
import image from '../assets/portfolio.jpeg';
import '../app.css';

const AboutMe = () => {
    return (
    <div id='aboutme' className='aboutme-container'>

        <div className='aboutme-photo'>
            <img src={image} alt='Aleah White'/>
        </div>

        <div className='aboutmeinfo-container'>
        <h2 className='aboutme-header'>About Me</h2>
        <h3 className='aboutme-header'>Aleah White | Jr. Web Developer</h3>

        <p>
        Junior Full-Stack Developer in the last weeks of completing a 
        boot camp at the University of Minnesota. I have gained a lot of skills in HTML, CSS, JS, and
        more I am ready to make an new impact in the tech industry. My passion lies in creating innovative tech applications,
        and I prefer to be working on the back-end of things. My journey so far hasn't just been about coding- from scooping ice cream to serving, I've honed my skills in trust, customer service, and 
        workplace dynamics. Though I am new to the tech community my love for the field grows each day. While I 
        can seem shy at first, I quickly warm up thriving in social settings and collaborative projects. As I move 
        forward, my goal is to find a position that allows me to blend my newfound coding skills and passion for building 
        technology. I am open to exploring a variety of companies, work environments, and roles. Let me know if you have any questions or if I sound like a good fit for your company!
        </p>
        </div>
    </div>
    );
};



export default AboutMe;