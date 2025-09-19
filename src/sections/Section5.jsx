import React from 'react'
import { motion } from 'framer-motion'
import Frame22 from '../assets/Frame2222.png'
import Frame23 from '../assets/Frame23.png'
import Frame24 from '../assets/Frame24.jpg'
import happy1 from '../assets/happy1.png'

function Section5() {

  return (
    
    <motion.section 
      className='max-w-[1536px] justify-self-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[100px] lg:mb-[100px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="space-y-6 md:space-y-8 p-4 md:p-8 lg:pl-[123px] lg:pt-12 lg:mt-15"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className=''
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="bg-[#08D3BB] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src={happy1} 
                  alt="happy1" 
                  className="w-6 h-6 md:w-8 md:h-8"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <motion.div 
                className="ml-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.p 
                  className="font-poppins font-medium text-base md:text-[17px] leading-relaxed"
                  whileHover={{ color: "#1090CB" }}
                >
                  Lorem Ipsum is simply dummy text
                </motion.p>
                <motion.p className="font-poppins font-normal text-sm md:text-[14px] leading-relaxed text-[#868686]">
                  Lorem Ipsum is simply dummy text
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.p 
            className="font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem Ipsum <motion.span 
              className="text-[#252525]"
              whileHover={{ color: "#1090CB" }}
            >
              is simply dummy text of the printing.
            </motion.span>
          </motion.p>
          <motion.p 
            className="font-poppins font-[400] text-sm md:text-base leading-relaxed text-[#545454]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img 
            src={Frame22} 
            alt="Frame22" 
            className="max-w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>


      

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[86px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="flex items-center justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img 
            src={Frame23} 
            alt="Frame23" 
            className="max-w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        <motion.div 
          className="space-y-6 md:space-y-8 p-4 md:p-8 lg:p-12 lg:pr-30 order-1 lg:order-2 lg:mt-15"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div className=''>
            <motion.div 
              className='flex'
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`bg-[#1090CB] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl mt-6 md:mt-0 lg:mt-0`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src={happy1} 
                  alt="happy1"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <motion.div 
                className='ml-5'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.p 
                  className='font-poppins font-medium text-[17px] leading-[175%] tracking-normal'
                  whileHover={{ color: "#1090CB" }}
                >
                  Lorem Ipsum is simply dummy text
                </motion.p>
                <motion.p className='font-poppins font-normal text-[14px] leading-[175%] tracking-normal text-[#868686]'>
                  Lorem Ipsum is simply dummy text
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.p 
            className='font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem Ipsum <motion.span 
              className='text-[#252525]'
              whileHover={{ color: "#1090CB" }}
            >
              is simply dummy text <br /> of the printing.
            </motion.span>
          </motion.p>
          <motion.p 
            className='font-poppins font-[400] text-[16px] leading-[170%] tracking-normal text-[#545454]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS. 
          </motion.p>
        </motion.div>
      </motion.div>


      

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="space-y-6 md:space-y-8 p-4 md:p-8 lg:pl-[123px] lg:pr-20 lg:pt-12 lg:mt-13"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div className=''>
            <motion.div 
              className='flex'
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`bg-[#9208D3] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl mt-6 md:mt-0 lg:mt-0`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src={happy1} 
                  alt="happy1"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <motion.div 
                className='ml-5'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.p 
                  className='font-poppins font-medium text-[17px] leading-[175%] tracking-normal'
                  whileHover={{ color: "#1090CB" }}
                >
                  Lorem Ipsum is simply dummy text
                </motion.p>
                <motion.p className='font-poppins font-normal text-[14px] leading-[175%] tracking-normal text-[#868686]'>
                  Lorem Ipsum is simply dummy text
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.p 
            className='font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem Ipsum <motion.span 
              className='text-[#252525]'
              whileHover={{ color: "#1090CB" }}
            >
              is simply dummy text <br /> of the printing.
            </motion.span>
          </motion.p>
          <motion.p 
            className='font-poppins font-[400] text-[16px] leading-[170%] tracking-normal text-[#545454]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS. 
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center lg:ml-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img 
            src={Frame24} 
            alt="Frame24" 
            className="max-w-full lg:max-w-[1000px] h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

      </motion.section>
    
  )
}

export default Section5
