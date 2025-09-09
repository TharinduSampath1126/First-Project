import React from 'react'
import beneoshop from '../assets/beneoshop.png'
import caspio from '../assets/caspio.png'
import Hypergrid from '../assets/Hypergrid.png'
import leotrippi from '../assets/leotrippi.png'
import Bell from '../assets/Bell.png'
import yellowshape from '../assets/yellowshape.png'
import PaiChart from '../assets/PaiChart.png'
import Star from '../assets/Star.png'
import pinkshape from '../assets/pinkshape.png'


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
    <div className=' mt-[198px]'>

        <div>
            {/* <img src={Bell} alt="" className='absolute left-[1180px] top-[2830px] hidden lg:block '/> */}
        </div>

        {/* 
        <div>
            <img src={yellowshape} alt="yellowshape" className='absolute left-[] top-[3350px] hidden lg:block'/>
        </div>
        
        <div>
            <img src={pinkshape} alt="pinkshape" className='absolute left-[1000px] top-[3150px] hidden lg:block z-10'/>
        </div>
        */}

        <div>
            <img src={PaiChart} alt="PaiChart" className='absolute left-[1030px] top-[3810px] hidden lg:block'/>
        </div> 

        <div>
            <img src={Star} alt="Star" className='absolute left-[130px] top-[3680px] hidden '/>
        </div>

        
        

        <div className='grid grid-cols-1  justify-self-center lg:grid-cols-2 gap-10 mb-[184px] md:justify-self-center lg:justify-self-center font-[400] lg:mx-o   '>
            <div className='container space-x-5 ml-[10px] mr-[10px] md:mx-auto lg:mx-auto py-5 w-auto md:w-[572px] md:h-[459px] lg:w-[572px] lg:h-[459px] rounded-[20px] bg-[#F4F4F4] place-content-center space-y-10 '>
                <p className='text-[#252525] font-poppins font-semibold text-[25px] leading-[170%] tracking-normal text-center'>Lorem Ipsum is simply <br /> dummy text.</p>
                <p className='text-[#545454] font-poppins font-normal sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[170%] tracking-normal text-center px-2'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className='w-[153px] h-[49px] rounded-[10px] bg-[#1090CB] flex justify-self-center items-center place-content-center text-[#FFFFFF]'>view more</button>
            </div>
            <div className='container mx-auto py-5 ml-[10px] mr-[10px] w-auto md:w-[572px] md:h-[459px] lg:w-[572px] lg:h-[459px] rounded-[20px] bg-[#1090CB] place-content-center space-y-10 '>
                <p className='text-[#FFFFFF] font-poppins font-semibold text-[25px] leading-[170%] tracking-normal text-center'>Lorem Ipsum is simply <br /> dummy text.</p>
                <p className='text-[#FFFFFF] font-poppins font-normal text-[16px] leading-[170%] tracking-normal text-center px-2'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className='w-[153px] h-[49px] rounded-[10px] bg-[#FFFFFF] flex justify-self-center items-center place-content-center '>view more</button>
            </div>
        </div>

        <p className='font-poppins font-medium text-[24px] leading-[159%] tracking-normal justify-self-center text-center'>You will be in good Company</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center mt-10 mb-[43px]'>
            {images.map((image,index) => (
                <div key={index}>{image.img}</div>
            ))}
        </div>

    </div>
  )
}

export default Section6
