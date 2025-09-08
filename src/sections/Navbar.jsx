import React from 'react'

export default function Navbar() {
  return (
    <section className=' h-[102px] flex items-center justify-between fixed bg-white w-[1440px]   '>

        <div className='w-[82px] h-[44px] ml-[32px]'>
           <p className='mt-1.5 text-[#1090CB] font-Poppins font-bold text-[29px] leading-[100%] tracking-normal'>LOGO</p>
        </div>

        <div className='flex justify-between mr-8 '>
            <ul className='w-[436px] h-[24px] flex space-x-19 mt-2 mr-15'>
                <li className='text-[#1090CB]'>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
            <button className='w-[125px] h-[41px] bg-[#1090CB] rounded-sm text-white font-poppins'>Contact us</button>
        </div>



    </section>
  )
}

