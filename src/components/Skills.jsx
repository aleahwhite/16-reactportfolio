import React from 'react';
import '../app.css';
import { skills } from '../data'; 

const Skills = () => {
    return (

        <div id='skills' className='skills-container'>
            <div className='heading-container'>
            <h2>My Skills</h2>
            </div>

            {skills.map((skillCategory) => (
                <div key={skillCategory.category} className='skills-category'>
                    <h3>{skillCategory.category}</h3>
                    <div className='skills-list'>
                        {skillCategory.list.map((skill) => (
                            <div key={skill} className='skill-item'>{skill}</div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Skills;