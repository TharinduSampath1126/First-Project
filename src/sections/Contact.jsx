import React from 'react'
import { motion } from 'framer-motion'
import paiChartIcon from '../assets/PaiChart.png'
import starIcon from '../assets/Star.png'

function Contact() {
  return (
    <motion.section 
      id='blog'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className='relative justify-self-center bg-[#1090CB]/10 w-full'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
      <div className='relative lg:w-[1536px] justify-self-center'>

        {/*  Star Icon */}
        <motion.img 
          src={starIcon} 
          alt="Star Icon" 
          className="hidden lg:block absolute top-[-50px] left-[167px] w-25 z-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
          animate={{ 
            rotate: [0, 360],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />

        {/*  Pai Chart Icon */}
        <motion.img 
          src={paiChartIcon} 
          alt="Pai Chart Icon" 
          className="hidden lg:block absolute top-[85px] right-[400px] w-[54px] h-[54px] z-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            rotate: 180,
            transition: { duration: 0.6 }
          }}
        />
        <motion.div 
          className='lg:h-[534px] md:h-[530px] h-[450px] bg-[#E8F4FA] grid place-items-center font-[400]'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className='grid gap-[80px]'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.p 
                className='font-poppins font-[600] lg:text-[30px] md:text-[27px] text-[25px] leading-[170%] tracking-normal text-center ml-[10px] mr-[10px]'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Lorem Ipsum <motion.span 
                  className='font-poppins font-[600] lg:text-[30px] md:text-[27px] text-[25px] leading-[170%] tracking-normal text-center'
                  whileHover={{ color: "#1090CB" }}
                >
                  is simply dummy <br /> text of the printing.
                </motion.span>
              </motion.p>
            </motion.div>
            
            <motion.div 
              className='flex items-center gap-2 flex-col md:flex-row px-4 md:px-0'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.input 
                type="email" 
                defaultValue="Enter your email" 
                className='bg-[#FFFFFF] rounded-[10px] content-center text-[#787878] lg:w-[532px] lg:h-[67px] md:w-[532px] md:h-[67px] w-full h-[50px]'
                whileFocus={{ scale: 1.02, backgroundColor: "#FFFFFF" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.button 
                className='lg:h-[67px] md:h-[67px] w-full h-[50px] font-[500] bg-[#000000] rounded-[10px] text-[#FFF4F4] md:w-[173px]'
                whileHover={{ scale: 1.05, backgroundColor: "#1090CB" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SUBSCRIBE
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </motion.section>
  )
}

export default Contact
