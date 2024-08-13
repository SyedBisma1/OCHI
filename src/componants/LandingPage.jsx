import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full  h-screen  pt-1'>
      <div className='textStructure mt-52 px-20'>

        {["we create", "Eye-Opening", "presentations"].map((item, index) => {
          return <div key={index} className="masker ">
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className=' mr-5 w-[9vw] h-[5.4vw] bg-red-600 bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]  rounded-md'></motion.div>
              )}
              <h1 className='uppercase text-[7.3vw]  leading-[6vw] tracking-tighter font-bold'>{item}</h1>
            </div>
          </div>
        })}


      </div>
      <div className='border-t-[1px]  border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companise ",
          "From the first pitch to IPO",
        ].map((item, index) =>
          <p key={index} className=' text-,d font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className="start flex items-center gap-3">
          <div className='px-7 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase text-md hover:bg-white hover:text-black transition-all ease-in'>start the project</div>
          <div className='w-10 h-10 rounded-full  border-zinc-400 border-[2px] flex  justify-center items-center  hover:bg-white hover:text-black transition-all ease-in ' >
            <span className='rotate-[45deg] text-md  '>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
