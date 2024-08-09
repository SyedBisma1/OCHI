import React from 'react'
import Navbar from './componants/Navbar'
import LandingPage from './componants/LandingPage'
import Marquee from './componants/Marquee'
import About from './componants/About'


function App() {
  return (
    <div className='m-h-screen w-full  text-white bg-zinc-900'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
    </div>
  )
}

export default App
