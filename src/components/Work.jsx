import React from 'react'
import airtravel from '../assets/airtravel.png';
import devspace from '../assets/devspace.png';
import flix from '../assets/flix.png';
import myadmin from '../assets/myadmin.png';

const Work = () => {

    const flixURL = "https://flix-react-js-tailwind.vercel.app/"
    const airTravelURL = "https://airtravel-indol.vercel.app/#top"
    const myAdminURL = "https://myadmin-nine.vercel.app/"
    const devSpaceURL = "https://dev-space-nine.vercel.app/"

    const devspaceCode = "https://github.com/andrewgomez1992/devSpace"
    const airtravelCode = "https://github.com/andrewgomez1992/airtravel"
    const flixCode = "https://github.com/andrewgomez1992/flix-react-js-tailwind"
    const myadminCode = "https://github.com/andrewgomez1992/myadmin"

  return (
    <div id='projects' href='#work' name='work' className='w-full md:h-screen text-[#BDBDBD] bg-[#121212]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#BDBDBD] border-[#29AB87]'>Projects</p>
                <p className='py-6 font-semibold'>Check out some of my recent projects</p>
            </div>

            {/** Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/** Grid Item */}
                <div style={{backgroundImage: `url(${flix})`}}
                className='shadow-md shadow-[#29AB87] group container rounded-md flex justify-center mx-auto content-div'>
                    
                    {/** Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 p-4'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS & Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="flix-site">
                                <button onClick={() => window.open(flixURL, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="flix-code">
                                <button onClick={() => window.open(flixCode, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/** Grid Item */}
                <div style={{backgroundImage: `url(${myadmin})`}}
                className='shadow-md shadow-[#29AB87] group container rounded-md flex justify-center mx-auto content-div'>
                    
                    {/** Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 p-4'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS & Sass
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="myadmin-site">
                                <button onClick={() => window.open(myAdminURL, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="myadmin-code">
                                <button onClick={() => window.open(myadminCode, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/** Grid Item */}
                <div style={{backgroundImage: `url(${devspace})`}}
                className='shadow-md shadow-[#29AB87] group container rounded-md flex justify-center mx-auto content-div'>
                    {/** Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 p-4'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           JavaScript, HTML, and CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="devspace-site">
                                <button onClick={() => window.open(devSpaceURL, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="devspace-code">
                                <button onClick={() => window.open(devspaceCode, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/** Grid Item */}
                <div style={{backgroundImage: `url(${airtravel})`}}
                className='shadow-md shadow-[#29AB87] group container rounded-md flex justify-center mx-auto content-div'>
                    {/** Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 p-4'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML and CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="travel-site">
                                <button onClick={() => window.open(airTravelURL, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="travel-code">
                                <button onClick={() => window.open(airtravelCode, '_blank')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div style={{backgroundImage: `url(${flix})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                     */}
                    {/** Hover Effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS & Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}
                {/** Grid Item */}
                {/* <div style={{backgroundImage: `url(${flix})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div'>
                     */}
                    {/** Hover Effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS & Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
            

        </div>
    </div>
  )
}

export default Work