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
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Php} alt="Php icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Laravel} alt="Laravel icon" />
                  <p className='my-4'>LARAVEL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                  <p className='my-4'>REACT.JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Xampp} alt="Xampp icon" />
                  <p className='my-4'>XAMPP</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
