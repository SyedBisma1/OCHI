import React from 'react'
import Navbar from './componants/Navbar'
import LandingPage from './componants/LandingPage'
import Marquee from './componants/Marquee'
import About from './componants/About'
import Eyes from './componants/Eyes'
import Featured from './componants/Featured'
import Cards from './componants/Cards'
import Footer from './componants/Footer'


function App() {
  return (
    <div className='m-h-screen w-full  text-white bg-zinc-900'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App
