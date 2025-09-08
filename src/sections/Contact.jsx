import React from 'react'

function Contact() {
  return (
    <div className='  '>
      <div className=' h-[534px] bg-[#E8F4FA]  grid place-items-center font-[400] '>
        <div className=' grid gap-20'>
            <div>
              <p className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>Lorem Ipsum <span className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>is simply dummy <br /> text of the printing.</span> </p>
            </div>
            
            <div className=' content-center grid grid-cols-1 md:flex lg:flex'>
                <div className=''>
                  <textarea value="        Enter your email" name="" id="" className='bg-[#FFFFFF] rounded-[10px] content-center text-[#787878] w-[532px] h-[67px]'> </textarea>
                </div>
                <div>
                  <button className='w-[173px] h-[67px] bg-[#000000] rounded-[10px] text-[#FFF4F4] lg:ml-10 md:ml-10 ml-40'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
