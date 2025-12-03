import React from 'react'
import { motion } from 'framer-motion'
import Frame19 from '../assets/Frame19.png'
import blueshape from '../assets/blueshape.png'
import greenshape from '../assets/greenshape.png'
import fyshape from '../assets/fyshape.png'

export default function Hero() {
  return (
    <motion.section 
      id='hero' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[#1090CB]/10  flex items-center justify-center relative mx-auto'
    >
      <div className='max-w-[1536px] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:pl-[123px] py-0 md:pb-0 relative'>
        <motion.img 
          src={blueshape} 
          alt="Blue Shape" 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='absolute hidden lg:block top-[220px] right-0'
        />
        <motion.img 
          src={greenshape} 
          alt="Green Shape" 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='absolute hidden lg:block top-[345px] left-[0px]'
        />
        
        <motion.div 
          className="w-full md:w-1/2 h-150 text-center md:text-left mt- md:mt-[102px] md:ml-5 items-center lg:mt-45 lg:py-0 md:py-0 py-25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1 
            className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-[600] leading-snug mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experienced <motion.span 
              className="text-[#1090CB]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >mobile and web</motion.span> <br />
            applications and website <br />
            builders measuring.
          </motion.h1>

          <motion.p 
            className="text-gray-600 font-[400] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-10 mb-8 leading-relaxed sm:text-left md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </motion.p>

          <motion.div 
            className="grid lg:flex lg:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start mt-18 font-[400]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button 
              className="bg-[#1090CB] w-[250px] h-[50px] sm:w-[140px] sm:h-[40px] md:w-[193px] md:h-[51px] lg:w-[193px] lg:h-[51px] text-white sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.button>
            <motion.button 
              className="border border-[#1090CB] text-[#1090CB] w-[250px] h-[50px] sm:w-[140px] sm:h-[40px] md:w-[193px] md:h-[51px] lg:w-[193px] lg:h-[51px] sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View more
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end relative lg:pr-[65px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           {/* Yellow Shape Behind Image */}
          <motion.img 
            src={fyshape} 
            alt="Yellow Shape" 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute hidden md:block lg:block top-[50px] right-[0px] w-[200px] md:w-[300px] lg:w-[380px] z-0"
          />

          <motion.img 
            src={Frame19} 
            alt="Hero illustration" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-[500px] h-auto object-contain md:pb-[66px] relative z-10"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}