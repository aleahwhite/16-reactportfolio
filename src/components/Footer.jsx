import React from 'react';
import '../app.css';

const Footer = () => {
    return (
        <footer>
            <p> © 2024 Aleah White</p>
            <div className='social-links'>
                <a href='https://github.com/aleahwhite' target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href='https://www.linkedin.com/in/aleah-white-7ab08a302' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a href='https://twitter.com/aleahcodes' target='_blank' rel='noopener noreferrer'>X</a>
                <a href='mailto:aleahwhite55@gmail.com' >Gmail</a>
            </div>
        </footer>
    );
};


export default Footer;