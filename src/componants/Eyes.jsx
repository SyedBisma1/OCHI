import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>

        <div className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          
        <div className=' absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           
           <div className='w-[13vw] h-[12.5vw] rounded-full bg-zinc-100 flex justify-center items-center'>

            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 '>

            <div className='line w-full h-6  bg-red-500'>
                <div className='w-6 h-6 rounded-full bg-red-100'></div>
            </div>
            
            </div>

           </div>
           <div className='w-[13vw] h-[12.5vw] rounded-full bg-zinc-100 flex justify-center items-center'>

            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 '>
              <div className='line w-full h-6  bg-red-500'>
              <div className='w-6 h-6 rounded-full bg-zinc-100 '></div>
              </div>

            
            </div>

           </div>

        </div>   
        </div>      
    </div>
  )
}

export default Eyes
