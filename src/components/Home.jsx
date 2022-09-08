import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {

  return (
    <div id='home' href='/' className='w-full h-screen bg-[#121212]'>
        {/** Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#BDBDBD] font-semibold'>Hi, my name is</p>
            <h1 className='pb-2 pt-2 text-4xl sm:text-7xl font-bold text-[#29AB87]'>Andrew Gomez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d7d7d7]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#BDBDBD] py-4 max-w-[700px] font-semibold'>I am passionate about improving the lives of those around me. I specialize in 
                        doing so through Full Stack Web Development. <span className='text-[#29AB87] font-bold'>What would you do if you had a Software Engineer 
                        at your fingertips?</span></p>
            <div className='max-w-[190px] sm:max-w-[33%] md:max-w-[26%] lg:max-w-[20%]'>
                <a href='#projects' className='text-[#BDBDBD] font-bold group border-2 rounded px-6 py-3 my-2 flex items-center border-[#29AB87] hover:bg-[#29AB87] hover:border-[#29AB87] hover:text-white'>View Projects
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Home