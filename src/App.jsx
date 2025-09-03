import { useState } from "react";
import Home from "./pages/Home"
import TopicBox from "./components/TopicBox";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";


function App() {
  return (
      <div>
        
        {/* <Home/> */}
        <Navbar/>
        <Hero/>
        
      </div>
  );
}

export default App;
