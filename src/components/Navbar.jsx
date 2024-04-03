import React from 'react';
import '../app.css';

const Navbar = () => {
    return (
        <nav id='navbar' className='navbar'>
            <ul>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}




export default Navbar;