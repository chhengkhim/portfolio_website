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
      </div>
    </div>
  );
};

export default Skills;
