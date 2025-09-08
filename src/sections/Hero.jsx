import React from 'react'
import Frame19 from '../assets/Frame19.png'
import blueshape from '../assets/blueshape.png'
import greenshape from  '../assets/greenshape.png'

export default function Hero() {
  return (
    <section className='  flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-[#f3f6fd] to-[#eaf6fb] px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-20 '>

        <img src={blueshape} alt="Blue Shape" className='hidden lg:block absolute top-[300px] left-[1430px]'/>
        <img src={greenshape} alt="Green Shape" className='hidden lg:block absolute top-[425px] left-[37px]'/>

        <div className=" w-full md:w-1/2 h-150 text-center md:text-left mt-10 md:mt-[102px]  items-center content-center ">
          <h1 className="text-[40px]  font-bold leading-snug mb-6">
            Experienced <span className="text-[#1090CB]">mobile and web</span> <br />
            applications and website <br />
            builders measuring.
          </h1>

          <p className="text-gray-600 font-[400] sm:text-base md:text-lg lg:text-xl mt-10 mb-8 leading-relaxed sm:text-left md:text-left">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

     
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start mt-18 font-[400] ">
             <button className="bg-[#1090CB] w-[193px] h-[51px] text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] transition">
                Contact us
             </button>
             <button className="border border-[#1090CB] text-[#1090CB] w-[193px] h-[51px] px-6 py-3 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] transition">
                  View more
             </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={Frame19} 
            alt="Hero illustration" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>

    </section>
  )
}
