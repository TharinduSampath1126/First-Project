import React from 'react'
import beneoshop from '../assets/beneoshop.png'
import caspio from '../assets/caspio.png'
import Hypergrid from '../assets/Hypergrid.png'
import leotrippi from '../assets/leotrippi.png'

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
    <div className=' mt-10 '>

        <div className='grid sm:grid-cols-1  lg:grid-cols-2 gap-10 mb-20 justify-self-center font-[400]'>
            <div className='w-[572px] h-[459px] rounded-[20px] bg-[#F4F4F4] place-content-center space-y-10'>
                <p className='text-[#252525] font-poppins font-semibold text-[25px] leading-[170%] tracking-normal text-center'>Lorem Ipsum is simply <br /> dummy text.</p>
                <p className='text-[#545454] font-poppins font-normal text-[16px] leading-[170%] tracking-normal text-center'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br /> mobile and web applications and website builders <br /> measuring dozens of completed projects. We build and <br /> develop mobile applications for several top platforms, <br /> including Android  & IOS. </p>
                <button className='w-[153px] h-[49px] rounded-[10px] bg-[#1090CB] flex justify-self-center items-center place-content-center text-[#FFFFFF]'>view more</button>
            </div>
            <div className='w-[572px] h-[459px] rounded-[20px] bg-[#1090CB] place-content-center space-y-10'>
                <p className='text-[#FFFFFF] font-poppins font-semibold text-[25px] leading-[170%] tracking-normal text-center'>Lorem Ipsum is simply <br /> dummy text.</p>
                <p className='text-[#FFFFFF] font-poppins font-normal text-[16px] leading-[170%] tracking-normal text-center'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br /> mobile and web applications and website builders <br /> measuring dozens of completed projects. We build and <br /> develop mobile applications for several top platforms, <br /> including Android  & IOS. </p>
                <button className='w-[153px] h-[49px] rounded-[10px] bg-[#FFFFFF] flex justify-self-center items-center place-content-center '>view more</button>
            </div>
        </div>

        <p className='font-poppins font-medium text-[24px] leading-[159%] tracking-normal justify-self-center'>You will be in good Company</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center mt-10'>
            {images.map((image) => (
                <div>{image.img}</div>
            ))}
        </div>

    </div>
  )
}

export default Section6
