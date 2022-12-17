import React from 'react'
import './App.css';
import Sidenav from './components/Sidenav';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <div className='app'>
    <Sidenav/>
    <Homepage/>
    {/* <About/> 
     <Contact />
    <Projects /> */}
    </div>
    </>
  );
}

export default App;
