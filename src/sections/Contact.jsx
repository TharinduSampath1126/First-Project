import React from 'react'

function Contact() {
  return (
    <div className='w-full h-[578px] grid content-end'>
      <div className='w-full h-[534px] bg-[#E8F4FA] items-center grid place-items-center'>
        <div className='w-[719px] h-[238px] grid content-between '>
            <p className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>Lorem Ipsum <span className='font-poppins font-semibold text-[30px] leading-[170%] tracking-normal text-center'>is simply dummy <br /> text of the printing.</span> </p>
            
            <div className='flex justify-between'>
                <textarea value="        Enter your email" name="" id="" className='bg-[#FFFFFF] w-[532px] h-[67px] rounded-[10px] content-center text-[#787878]'> </textarea>
                <button className='w-[173px] h-[67px] bg-[#000000] rounded-[10px] text-[#FFF4F4]'>SUBSCRIBE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
