import React from 'react'
import DREW from '../assets/drew.jpg'

const About = () => {
  return (
    <div id='about' href='about' className='w-full h-full bg-[#121212] text-[#BDBDBD] pt-10 pb-10'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4 pt-12'>
                    <p className='text-[#BDBDBD] text-4xl font-bold inline border-b-4 border-[#29AB87]'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-left text-4xl font-bold'>Hi. <span className='text-[#29AB87]'>I'm Andrew</span>, nice to meet you.</p>
                        <p className='pt-8 font-semibold'>I have spent hundreds of hours
                             with JavaScript, React, HTML, CSS, API's, SQL and more which have 
                             thrusted me into a bright introduction of a world I once never knew 
                             existed. Though my time in tech is just emerging I've found myself 
                             consumed by the endless possibilities that could be sketched with the 
                             end of my fingertips. <span className='text-[#29AB87]'>My goal is to contribute to technology to make 
                             the world a better place.</span>
                        </p>
                    </div>
                    <div>
                        <img className="rounded-lg " src={DREW} alt="selfie" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About