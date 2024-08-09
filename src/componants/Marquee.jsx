//import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div className='w-full py-8 rounded-tl-3xl rounded-tr-3xl   bg-[#004D43] -mb-[4vw]'>
       <div className="text border-t-2 border-b-2 mb-10 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden">
        <h1  className='text-[15vw] leading-none uppercase mb-[2vw] pt-8 font-bold  tracking-tighter'>We are ochi</h1>
        <h1  className='text-[15vw] leading-none uppercase mb-[2vw] pt-8 font-bold  tracking-tighter'>We are ochi</h1>
       </div>
    </div>
  )
}

export default Marquee
