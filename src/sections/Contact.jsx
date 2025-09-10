import React from 'react'
import paiChartIcon from '../assets/PaiChart.png'
import starIcon from '../assets/Star.png'

function Contact() {
  return (
    <div className='relative'>

      {/*  Star Icon */}
      <img 
        src={starIcon} 
        alt="Star Icon" 
        className="hidden lg:block absolute top-[-50px] left-[167px] w-25  z-10" 
      />

      {/*  Pai Chart Icon */}
      <img 
        src={paiChartIcon} 
        alt="Pai Chart Icon" 
        className="hidden lg:block absolute top-[85px] right-[400px] w-[54px] h-[54px] z-10" 
      />

      <div className=' lg:h-[534px] md:h-[530px] h-[450px] bg-[#E8F4FA]  grid place-items-center font-[400]'>
        <div className=' grid gap-[80px]'>
            <div>
              <p className='font-poppins font-[600]  lg:text-[30px] md:text-[27px] text-[25px] leading-[170%] tracking-normal text-center ml-[10px] mr-[10px]'>Lorem Ipsum <span className='font-poppins font-[600] lg:text-[30px] md:text-[27px] text-[25px] leading-[170%] tracking-normal text-center'>is simply dummy <br /> text of the printing.</span> </p>
            </div>
            
            <div className='  grid grid-cols-1 justify-items-center-safe md:flex lg:flex '>
                <div className=''>
                  {/* <textarea value="        Enter your email" name="" id="" className='bg-[#FFFFFF] rounded-[10px] content-center text-[#787878] lg:w-[532px] lg:h-[67px] md:w-[532px] md:h-[67px] w-[300px] h-[50px]'> </textarea> */}
                  <textarea defaultValue="     Enter your email" className='bg-[#FFFFFF] rounded-[10px] content-center text-[#787878] lg:w-[532px] lg:h-[67px] md:w-[532px] md:h-[67px] w-[300px] h-[50px]' />
                </div>
                <div>
                  <button className='lg:w-[173px] lg:h-[67px] md:w-[173px] md:h-[67px] w-[173px] h-[50px] font-[500] bg-[#000000] rounded-[10px] text-[#FFF4F4] lg:ml-10 md:ml-10'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
