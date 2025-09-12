import React from 'react'
import Frame22 from '../assets/Frame2222.png'
import Frame23 from '../assets/Frame23.png'
import Frame24 from '../assets/Frame24.jpg'
import happy1 from '../assets/happy1.png'

function Section5() {

  return (
    <div className='container mx-auto px- md:px- '>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[100px] lg:mb-[100px] ">
        <div className="space-y-6 md:space-y-8 p-4 md:p-8 lg:pl-[123px] lg:pt-12 lg:mt-15  ">
          <div className=''>
            <div className="flex items-center">
              <div className="bg-[#08D3BB] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl">
                <img src={happy1} alt="happy1" className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="ml-4">
                <p className="font-poppins font-medium text-base md:text-[17px] leading-relaxed">Lorem Ipsum is simply dummy text</p>
                <p className="font-poppins font-normal text-sm md:text-[14px] leading-relaxed text-[#868686]">Lorem Ipsum is simply dummy text</p>
              </div>
            </div>
          </div>
          <p className="font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]">
            Lorem Ipsum <span className="text-[#252525]">is simply dummy text of the printing.</span>
          </p>
          <p className="font-poppins font-[400] text-sm md:text-base leading-relaxed text-[#545454]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={Frame22} alt="Frame22" className="max-w-full h-auto" />
        </div>
    </div>


      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mb-[86px]  ">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <img src={Frame23} alt="Frame23" className="max-w-full h-auto" />
        </div>
        <div className="space-y-6 md:space-y-8 p-4 md:p-8 lg:p-12 lg:pr-30 order-1 lg:order-2 lg:mt-15 ">
          <div className=''>
                <div className='flex'>
                  <div className={`bg-[#1090CB] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl mt-6 md:mt-0 lg:mt-0`}>
                    <img src={happy1} alt="happy1" />
                  </div>
                  <div className='ml-5'>
                    <p className='font-poppins font-medium text-[17px] leading-[175%] tracking-normal'>Lorem Ipsum is simply dummy text</p>
                    <p className='font-poppins font-normal text-[14px] leading-[175%] tracking-normal text-[#868686]'>Lorem Ipsum is simply dummy text</p>
                  </div>
                </div>
              </div>
            <p className='font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]'>Lorem Ipsum <span className='text-[#252525]'>is simply dummy text <br /> of the printing.</span> </p>
            <p className='font-poppins font-[400] text-[16px] leading-[170%] tracking-normal text-[#545454]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          </div>
      </div>


      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 ">
        <div className="space-y-6 md:space-y-8 p-4 md:p-8 lg:pl-[123px] lg:pr-20 lg:pt-12 lg:mt-13 ">
          <div className=''>
                <div className='flex'>
                      <div className={`bg-[#9208D3] flex justify-center items-center w-15 h-13 md:w-[58px] md:h-[58px] rounded-4xl mt-6 md:mt-0 lg:mt-0`}>
                        <img src={happy1} alt="happy1" />
                      </div>
                      <div className='ml-5'>
                        <p className='font-poppins font-medium text-[17px] leading-[175%] tracking-normal'>Lorem Ipsum is simply dummy text</p>
                        <p className='font-poppins font-normal text-[14px] leading-[175%] tracking-normal text-[#868686]'>Lorem Ipsum is simply dummy text</p>
                      </div>
                    </div>
                </div>
                <p className='font-poppins font-[600] text-2xl md:text-3xl leading-tight text-[#1090CB]'>Lorem Ipsum <span className='text-[#252525]'>is simply dummy text <br /> of the printing.</span> </p>
                <p className='font-poppins font-[400] text-[16px] leading-[170%] tracking-normal text-[#545454]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
        </div>
        <div className="flex items-center justify-center lg:ml-20 ">
          <img src={Frame24} alt="Frame24" className="max-w-full lg:max-w-[1000px] h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Section5
