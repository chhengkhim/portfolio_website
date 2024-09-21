/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Php from '../assets/php.png';
import ReactLogo from '../assets/react.png';
import Laravel from '../assets/laravel.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Xampp from '../assets/xampp.png';
import Bootstrap from '../assets/boostrap.png';

const Skills = () => {
  const skills = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: Php, name: "PHP" },
    { img: Laravel, name: "Laravel" },
    { img: GitHub, name: "GitHub" },
    { img: ReactLogo, name: "React.js" },
    { img: Tailwind, name: "Tailwind" },
    { img: Xampp, name: "XAMPP" },
  ];

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              {skills.map((skill, index) => (
                <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
                  <p className='my-4'>{skill.name.toUpperCase()}</p>
                </div>
              ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 py-8">
            <a href="https://web.facebook.com/pisethsambo2004" target="_blank" rel="noopener noreferrer">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-300 hover:text-pink-600">
                  <path d="M22 12a10 10 0 1 0-11.5 9.88V14.9h-2.9v-3h2.9v-2.3c0-2.9 1.7-4.5 4.3-4.5 1.2 0 2.5.2 2.5.2v2.7H16c-1.3 0-1.7.8-1.7 1.6v2h3l-.5 3h-2.5v6.98A10.04 10.04 0 0 0 22 12z" />
                </svg>
              </span>
            </a>

            <a href="https://github.com/chhengkhim" target="_blank" rel="noopener noreferrer">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-300 hover:text-pink-600">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.2 11.39.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.47-4.04-1.47-.54-1.37-1.33-1.74-1.33-1.74-1.08-.75.08-.74.08-.74 1.19.08 1.82 1.23 1.82 1.23 1.06 1.82 2.8 1.29 3.48.99.11-.77.42-1.29.76-1.59-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.53 11.53 0 0 1 6 0C17.97 5.9 19 6.23 19 6.23c.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.23v3.29c0 .32.22.7.82.58A12.05 12.05 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/pisethsambo-phok-854b95304/" target="_blank" rel="noopener noreferrer">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-300 hover:text-pink-600">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7V9h3v10zm-1.5-11.5C8.12 7.5 7.5 6.88 7.5 6S8.12 4.5 9 4.5 10.5 5.12 10.5 6s-.62 1.5-1.5 1.5zM20 19h-3V14c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3V9h3v1.4c.92-1.4 3.08-1.4 4 0V19z" />
                </svg>
              </span>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Skills;
