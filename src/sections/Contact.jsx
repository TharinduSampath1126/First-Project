import React from 'react'

function Contact() {
  return (
    <div className='  '>
      <div className=' h-[534px] bg-[#E8F4FA]  grid place-items-center font-[400] '>
        <div className=' grid gap-20'>
            <div>
              <p className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>Lorem Ipsum <span className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>is simply dummy <br /> text of the printing.</span> </p>
            </div>
            
            <div className='  grid grid-cols-1 justify-items-center-safe md:flex lg:flex '>
                <div className=''>
                  <textarea value="        Enter your email" name="" id="" className='bg-[#FFFFFF] rounded-[10px] content-center text-[#787878] lg:w-[532px] lg:h-[67px] md:w-[532px] md:h-[67px] w-[300px] h-[50px]'> </textarea>
                </div>
                <div>
                  <button className='lg:w-[173px] lg:h-[67px] md:w-[173px] md:h-[67px] w-[120px] h-[50px]  bg-[#000000] rounded-[10px] text-[#FFF4F4] lg:ml-10 md:ml-10'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
