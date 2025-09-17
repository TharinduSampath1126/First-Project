import React from "react";
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
    <section id="" className="max-w-[1536px] md:py-[43px] bg-white justify-self-center lg:mr-[] border-b-[0.7px] border-[#C7C7C7] ">
      <div className=" max-w-7xl mx-auto lg:ml-[123px]  font-[400] mt-10 mb-10 lg:mt-[0px] lg:mb-[0px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 justify-center">
              <div className={`p-3 md:p-4 rounded-xl ${service.bgColor}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        

      </div>

        
      
    </section>
  );
};export default Section3;



{/* ================= SERVICES SECTION ================= */}


//       <section className="py-12 bg-white">
//             <div className="absolute left-0 top-160 z-80">
//                 <img src={GreenCurve} alt="icon" className="w-10 h-90" />
//             </div> 


//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {services.map((service, index) => (
//                         <div key={index} className="flex items-start space-x-4">
//                             <div className={p-4 rounded-xl ${service.bgColor}}>
//                             {service.icon}
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                                 <p className="text-gray-600 text-sm">{service.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//       </section>
//     </div>
//   );
// };