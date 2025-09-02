import React from 'react'
import Frame19 from '../assets/Frame19.png'
import Group23 from '../assets/Group23.png'
import Group24 from '../assets/Group24.png'
import Group25 from '../assets/Group25.png'
import Group26 from '../assets/Group26.png'
import Group15 from '../assets/Group15.png'
import Group30 from '../assets/Group30.png'


export default function home() {
  return (


    <div className=''>
      <div className='grid grid-cols-2 gap-4 content-center w-full h-20 rounded-xl ' >
        <div>
          <p className='ml-10 text-xl font-bold mt-2 text-blue-500'>LOGO</p>
        </div>
        <div className='grid justify-items-end mr-10  '>
          <ul className='flex  list-none '>
            <li className='ml-5 mr-15 text-xl hover:text-blue-500  '>Home</li>
            <li className='ml-5 mr-15 text-xl hover:text-blue-500'>About us</li>
            <li className='ml-5 mr-15 text-xl hover:text-blue-500'>Services</li>
            <li className='ml-5 mr-15 text-xl hover:text-blue-500'>Blog</li>
            <li>
              <button className='bg-blue-500 rounded-sm w-30 h-10 text-white'>Contact us</button>
            </li>
          </ul>
        </div>
        {/* <div className='grid justify-items-end mr-5'>
          <button className='bg-blue-500 rounded-sm w-30 h-10 text-white'>Contact us</button>
        </div> */}
      </div>


      <div className='absolute bg-blue-100 w-[1440px] h-[743px] top-[102px]'>

          <div className='absolute w-[630px] h-[450px] top-[230px] left-[123px] rounded-[10px] border border-[#1090CB] '>
              <div className=' absolute w-[630px] h-[193px] top-[230px] left-[123px] '>
                  <p className='text-[40px] font-semibold leading-[100%] tracking-normal font-poppins'>Experienced <span className='text-[40px] font-semibold leading-[100%] tracking-normal font-poppins'>mobile and web</span> applications and website builders measuring.
                  </p>
              </div>
              <div className=' w-200 h-50 ml-30'>
                  <p className='text-xl'>At the very basic level, developing using Vite is not that different from <br />
                    using a static file server. However, Vite provides many enhancements <br /> over native ESM imports to support various features that are typically seen <br /> in bundler-based setups.</p>
              </div>
              <div className=' w-200 h-50 ml-30 mb-30 '>
                  <button className='bg-blue-500 w-50 h-15 mt-5  rounded-lg border text-white'>View more</button>
                  <button className='bg-white w-50 h-15 ml-10 mr-15 rounded-lg border text-blue-500'>Contact us</button>
              </div>
          </div>

          <div className=' w-250 h-200 pl-35'>
                <img src={Frame19} alt="Frame 19" />
          </div>

      </div>

      <div className=' w-full h-40 grid grid-cols-4'>
          <div>
              <img src={Group23} alt="Group 23" className='mt-10 ml-15 '/>
          </div>
          <div>
              <img src={Group24} alt="Group 23" className='mt-10 ml-15' />
          </div>
          <div>
              <img src={Group25} alt="Group 23" className='mt-10 ml-15'/>
          </div>
          <div>
              <img src={Group26} alt="Group 23" className='mt-10 ml-15'/>
          </div>
      </div>

      <hr />

      <div className=' justify-center mt-20 mb-20'>
        <h1 className='text-[33px] text-[#252525] font-semibold leading-[160%] tracking-normal text-center font-poppins'>Lorem Ipsum is simply dummy text of the printing. </h1> <br />
        <h2 className='text-[18px] font-normal leading-[175%] tracking-normal text-center font-poppins text-[#868686] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's</h2>
      </div>

      <div className='w-1317px h-537px top-[1319px] left-[123px] bg-red-100'>
            
      </div>

      <div className='absolute w-[1317px] h-[537px] top-[1319px] left-[123px] bg-red-100'>
          <div className='absolute bg-blue-100 w-[516px] h-[389px] top-[1423px] left-[123px]'>

          </div>
          <div className='absolute w-[803px] h-[537px] top-[1319px] left-[637px] bg-green-100'>

          </div>
      </div>

      
    </div>
  )
}
