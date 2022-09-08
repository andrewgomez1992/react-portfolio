import React from 'react'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#121212] flex justify-center items-center p-4 pt-10'>
        <form method='POST' action="https://getform.io/f/407b4886-1beb-4682-84ad-41ddf78303a0" className='flex flex-col max-w[600px] w-100'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#29AB87] text-[#BDBDBD]'>Contact</p>
                <p className='text-gray-300 py-4 font-semibold'>Submit the form below or <span className='text-[#29AB87]'>shoot me an email</span> - drewgomez209@gmail.com</p>
            </div>
            <input className='bg-[#eae8e8] p-2 rounded' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eae8e8] rounded' type="email" placeholder='Email' name='name' />
            <textarea className='bg-[#eae8e8] p-2 rounded' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-[#BDBDBD] font-semibold border-2 border-[#29AB87] hover:bg-[#29AB87] hover:border-[#29AB87] hover:text-white px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's join forces</button>
        </form>
    </div>
  )
}

export default Contact