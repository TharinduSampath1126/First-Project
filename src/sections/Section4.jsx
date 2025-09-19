import React from 'react';
import { motion } from 'framer-motion';

export default function Section4() {
  return (
    <motion.section 
      id='Aboutus' 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mt-[50px] mb-[100px] md:mb-[55px] lg:mb-[55px] px-[10px] lg:px-0"
    >
      <motion.div 
        className="space-y-[32px] text-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p 
          className="font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug tracking-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.02 }}
        >
          Lorem Ipsum is simply dummy text of the printing.
        </motion.p>
        <motion.p 
          className="font-poppins font-normal text-base md:text-lg lg:text-xl max-w-3xl justify-self-center leading-relaxed md:leading-[175%] tracking-normal text-[#868686]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
