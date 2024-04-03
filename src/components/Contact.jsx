import React from 'react';
import '../app.css';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Email:', email, 'Message:', message);

        event.target.reset();
        alert('Your message has been sent!');
    };

    return (
        <div id='contact' className='contact-container'>
            <h2>Contact Me!</h2>

            <div id='contact-links' className='contact-links'>
                <a href='https://github.com/aleahwhite' target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href='https://www.linkedin.com/in/aleah-white-7ab08a302' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a href='mailto:aleahwhite55@gmail.com' >Gmail</a>
            </div>
        
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message" 
                  required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};



export default Contact;