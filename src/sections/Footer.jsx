import React from 'react'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'


function Footer() {
  return (
     <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="font-Poppins font-bold text-base leading-[100%] tracking-normal text-[#00329B]">LOGO</h2>
          <p className=" mt-8 font-Poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#515151]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-800 mt-8 text-sm">@Lorem</p>
        </div>

        
        <div className='ml-20'>
          <h3 className="font-Poppins font-medium text-[17px] leading-[100%] tracking-normal">About us</h3>
          <ul className="space-y-2 font-Poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#515151] mt-5">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-Poppins font-medium text-[17px] leading-[100%] tracking-normal mb-4">Contact us</h3>
          <p className="font-Poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#515151]">
            Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.
          </p>
          <p className="font-Poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#515151] mt-5">+908 89097 890</p>
        </div>

        
        <div className="flex md:justify-end items-end space-x-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md text-gray-600 hover:text-white hover:bg-blue-600 transition">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md text-gray-600 hover:text-white hover:bg-pink-500 transition">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md text-gray-600 hover:text-white hover:bg-sky-500 transition">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md text-gray-600 hover:text-white hover:bg-blue-700 transition">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>

      
      <div className="border border-[#D2D2D2] py-4">
        <p className="text-center font-Poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#515151]">
          Copyright © 2021 Lorem All rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
