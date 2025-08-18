import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from "./pages/AboutMe"; 
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import WebDev from "./pages/WebDev";
import MobApp from "./pages/MobApp";
import Arduino from "./pages/Arduino";
import Graphic from "./pages/Graphic";
import Consultation from "./pages/Consultation";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Auth Pages */}
          <Route path="/" element={<AboutMe />} />   
          <Route path="/resume" element={<Resume />} />   
          <Route path="/projects" element={<Project />} />  
          <Route path="/contacts" element={<Contact />} />    
          <Route path="/web_dev" element={<WebDev />} /> 
          <Route path="/mob_app" element={<MobApp />} /> 
          <Route path="/arduino" element={<Arduino />} />    
          <Route path="/graphic" element={<Graphic />} />    
          <Route path="/consultation" element={<Consultation />} />       

        </Routes>
      </ BrowserRouter>

    </>
  )
}

export default App
