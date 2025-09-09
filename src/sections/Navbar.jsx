import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Blog", href: "#blog" },
    {
      name: "Contact us",
      href: "#contact",
      color: "bg-[#1090CB] rounded-xl p-2 text-center text-white",
    },
  ];

  return (
    <div className="shadow-md md:py-6 top-0 w-full p-4 bg-white z-10">
      <div className="px-4 w-full flex items-center justify-between">
        
        <div>
          <p className="text-[#1090CB] text-[29px] font-bold">LOGO</p>
        </div>

        
        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${link.color || "text-gray-700 hover:text-blue-600"} transition`}
            >
              {link.name}
            </a>
          ))}
        </div>

       
        <div className="lg:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-sky-100 p-2 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-[64px] left-0 w-full z-20">
          <div className="flex flex-col space-y-4 px-5 pt-5 pb-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${link.color || "text-gray-700 hover:text-blue-600"} transition block`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}