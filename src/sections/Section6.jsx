import { motion } from 'framer-motion'
import beneoshop from '../assets/beneoshop.png'
import caspio from '../assets/caspio.png'
import Hypergrid from '../assets/HyperGrid.png'
import leotrippi from '../assets/leotrippi.png'
import bellIcon from '../assets/Bell.png'
import frame25 from '../assets/yellowshape.png'

import frame26 from '../assets/pinkshape.png'


function Section6() {

    const images = [
        {
            img : <img src={beneoshop} alt="beneoshop"/>
        },
        {
            img : <img src={caspio} alt="caspio"/>
        },
        {
            img : <img src={Hypergrid} alt="Hypergrid"/>
        },
        {
            img : <img src={leotrippi} alt="leotrippi"/>
        },
    ]

  return (
    <motion.section 
        id='services'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <div className='relative mt-[70px] lg:mt-[163px] max-w-[1536px] mx-auto px-4 overflow-hidden lg:p-[35px]'>

        {/* Left Background Frame (Frame 25) */}
        <motion.img 
            src={frame25} 
            alt="Frame 25" 
            className="hidden lg:block absolute left-[-80px] top-[450px] w-[300px] h-[505px] z-0 pointer-events-none"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Right Background Frame (Frame 26) */}
        <motion.img 
            src={frame26} 
            alt="Frame 26" 
            className="hidden lg:block absolute right-[0px] top-[100px] w-[433px] h-[505px] z-0 pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* ✅ Bell Icon Positioned Top Right */}
        <motion.img 
            src={bellIcon} 
            alt="Bell Icon" 
            className="hidden md:hidden lg:block absolute top-[-40px] right-[200px] z-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
                rotate: [0, -10, 10, -10, 10, 0],
                transition: { duration: 0.5 }
            }}
        />

        
        

        <motion.div 
            className='grid grid-cols-1 justify-self-center lg:grid-cols-2 gap-10 mb-[100px] lg:mb-[184px] md:justify-self-center lg:justify-self-center font-[400] lg:ml-0'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className='container space-x-5 ml-[10px] mr-[10px] md:mx-auto lg:mx-auto py-5 w-auto md:w-[572px] md:h-[459px] lg:w-[572px] lg:h-[459px] rounded-[20px] bg-[#F4F4F4] place-content-center space-y-10'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
            >
                <motion.p 
                    className='text-[#252525] font-poppins font-[600] text-[25px] leading-[170%] tracking-normal text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Lorem Ipsum is simply <br /> dummy text.
                </motion.p>
                <motion.p 
                    className='text-[#545454] font-poppins font-[400] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[170%] tracking-normal text-center px-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </motion.p>
                <motion.button 
                    className='w-[153px] h-[49px] rounded-[10px] bg-[#1090CB] flex justify-self-center items-center place-content-center text-[#FFFFFF]'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View more
                </motion.button>
            </motion.div>
            <motion.div 
                className='container relative z-10 mx-auto py-5 ml-[10px] mr-[10px] w-auto md:w-[572px] md:h-[459px] lg:w-[572px] lg:h-[459px] rounded-[20px] bg-[#1090CB] place-content-center space-y-10'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
            >
                <motion.p 
                    className='text-[#FFFFFF] font-poppins font-[600] text-[25px] leading-[170%] tracking-normal text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Lorem Ipsum is simply <br /> dummy text.
                </motion.p>
                <motion.p 
                    className='text-[#FFFFFF] font-poppins font-[400] text-[16px] leading-[170%] tracking-normal text-center px-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </motion.p>
                <motion.button 
                    className='w-[153px] h-[49px] rounded-[10px] bg-[#FFFFFF] flex justify-self-center justify-center items-center place-content-center text-[#1090CB]'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View more
                </motion.button>
            </motion.div>
        </motion.div>

        <motion.p 
            className='font-poppins font-[500] text-[24px] leading-[159%] tracking-normal justify-self-center text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            You will be in good Company
        </motion.p>

        <motion.div 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[115px] justify-items-center md:mt-10 lg:mt-10 md:mb-[43px] lg:mb-[43px] lg:pl-[155px] lg:pr-[200px]'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {images.map((image, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {image.img}
                </motion.div>
            ))}
        </motion.div>

    </div>
    </motion.section>
  )
}

export default Section6
