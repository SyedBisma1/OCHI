import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full  h-screen bg-zinc-900 pt-1'>
       <div className='textStructure mt-52 px-20'>

      {["we create","Eye-Opening" , "presentations"].map((item, index)=>{
        return <div className="masker ">
            <div className='w-fit flex items-end overflow-hidden'>
            { index === 1 && (<div className=' mr-5 w-[9vw] h-[5.4vw] bg-green-600  rounded-md'></div>)}
            <h1 className='uppercase text-[7.3vw]  leading-[6vw] tracking-tighter font-bold'>{item}</h1>
            </div>
       </div>
      })}

    
       </div>
       <div className='border-t-[1px]  border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'> 
        {["For public and private companise " , 
         "From the first pitch to IPO",
        ].map((item , index)=>
            <p className=' text-,d font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className="start flex items-center gap-3">
        <div className='px-7 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase text-md'>start the project</div>
        <div className='w-10 h-10 rounded-full  border-zinc-400 border-[2px] flex  justify-center items-center ' > 
             <span className='rotate-[45deg] text-md'>
             <FaArrowUpLong/>
             </span>
            </div>
       </div>
       </div>
       
    </div>
  )
}

export default LandingPage
