import React from "react";
import vector from "../assets/vector.png"


const 
Section3 = () => {
  const services = [
    {
      icon: <img src={vector} alt="Web Application" className="w-8 h-8" />,
      title: "Web Application",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-purple-100",
    },
    {
      icon: <img src={vector} alt="SEO" className="w-8 h-8" />,
      title: "SEO",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-green-100",
    },
    {
      icon: <img src={vector} alt="AR/VR" className="w-8 h-8" />,
      title: "AR/VR Solutions",
      description: "Lorem Ipsum is simply .",
      bgColor: "bg-blue-100",
    },
    {
      icon: <img src={vector} alt="Mobile Apps" className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Lorem Ipsum is simply ",
      bgColor: "bg-red-100",
    },
  ];

return (
    <section className="py-12 bg-white ">
      {/* ================= SERVICES SECTION ================= */}
      
      <div className=" mx-auto justify-self-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 ">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`p-4 rounded-xl ${service.bgColor}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[1440px] mx-auto px-6 justify-self-center border border-[#C7C7C7] mt-10 " />
    </section>
    
  );
};

export default Section3;



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