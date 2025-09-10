import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "Aboutus", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-[1536px]">
        {/* Logo */}
        <div className="flex-1 text-left md:text-left ">
          <div className="text-2xl font-bold text-sky-600">LOGO</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-[400] relative ">
          {navLinks.map((link) => (
            <div key={link.id} className="relative ml-10">
              {/* Dot Indicator */}
              {active === link.id && (

                <span className="absolute -top-2 left-0 w-2 h-2 bg-[#08D3BB] rounded-full"></span>

              )}
              <a
                href={`#${link.id}`}
                className={`transition hover:text-sky-700 ${active === link.id ? "text-[#1090CB]" : "text-gray-700"}`}
              >
                {link.label}
              </a>
            </div>
          ))}
          <button className="bg-sky-600 text-white px-5 py-2 rounded-md hover:bg-sky-700 transition">
            Contact Us
          </button>
        </nav>

        {/* Hamburger Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-sky-600 focus:outline-none">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-lg font-semibold">
          <div className="flex flex-col items-center space-y-6 py-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`w-full text-center text-lg py-2 rounded-md transition ${active === link.id
                  ? "text-[#1090CB] bg-sky-50"
                  : "text-gray-700"
                  }`}
                onClick={() => {
                  setActive(link.id);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="w-full bg-sky-600 text-white text-lg px-4 py-3 rounded-md hover:bg-sky-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;