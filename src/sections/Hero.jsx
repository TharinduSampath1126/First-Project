import React from 'react'
import Frame19 from '../assets/Frame19.png' 

export default function Hero() {
  return (
    <section className='w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-[#f3f6fd] to-[#eaf6fb] px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-20'>
        <div className=" w-full md:w-1/2 max-w-4xl h-150 text-center md:text-left mt-10 md:mt-0  items-center">
          <h1 className="text-[40px]  font-bold leading-snug mb-6">
            Experienced <span className="text-[#1090CB]">mobile and web</span> <br />
            applications and website <br />
            builders measuring.
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-10 mb-8 leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

     
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mt-18">
             <button className="bg-[#1090CB] text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] transition">
                Contact us
             </button>
             <button className="border border-[#1090CB] text-[#1090CB] px-6 py-3 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] transition">
                  View more
             </button>
          </div>
        </div>

        <div className=''>
          <img src={Frame19} alt="" />
        </div>

    </section>
  )
}
