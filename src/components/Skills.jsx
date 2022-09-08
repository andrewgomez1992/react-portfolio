import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div id='skills' name='skills' className='w-full h-full bg-[#121212] text-[#BDBDBD] pt-10 pb-10'>
        {/** Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-1 flex flex-col justify-center w-full h-full'>
            <div className='pt-12'>
                <p className='text-4xl font-bold inline border-b-4 border-[#29AB87]'>Skills</p>
                <p className='py-4 font-semibold'>These are the technologies <span className='text-[#29AB87]'>I've recently</span> worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-semibold'>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={Node} alt="Github icon" />
                    <p className='my-4'>Node Js</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={FireBase} alt="Mongo icon" />
                    <p className='my-4'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#29AB87] hover:scale-110 duration-500 rounded pt-2'>
                    <img className='w-20 mx-auto pt-2' src={Mongo} alt="FireBase icon" />
                    <p className='my-4'>Mongo DB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills