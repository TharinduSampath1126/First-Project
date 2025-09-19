import React from "react";
import { motion } from "framer-motion";
import s31 from "../assets/s31.png";
import s32 from "../assets/s32.png";
import s33 from "../assets/s33.png";
import s34 from "../assets/s34.png";

const Section3 = () => {
  const services = [
    {
      icon: <img src={s31} alt="Web Application" className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Web Application",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-purple-100",
    },
    {
      icon: <img src={s32} alt="SEO" className="w-6 h-6 md:w-8 md:h-8" />,
      title: "SEO",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-green-100",
    },
    {
      icon: <img src={s33} alt="AR/VR" className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AR/VR Solutions",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-blue-100",
    },
    {
      icon: <img src={s34} alt="Mobile Apps" className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile Applications",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <motion.section 
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-[1536px] md:py-[43px] bg-white justify-self-center lg:mr-[] border-b-[0.7px] border-[#C7C7C7]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto lg:ml-[123px] font-[400] mt-10 mb-10 lg:mt-[0px] lg:mb-[0px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-start space-x-4 p-4 justify-center"
            >
              <motion.div 
                className={`p-3 md:p-4 rounded-xl ${service.bgColor}`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.h3 
                  className="text-base md:text-lg font-semibold mb-1"
                  whileHover={{ scale: 1.02 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section3;