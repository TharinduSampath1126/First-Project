import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <div className="max-w-full mx-auto px- sm:px- lg:px-">
        <Navbar/>
        <main>
          
          <Hero/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
