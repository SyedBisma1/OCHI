import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20  '>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-[3vw] ' >
                <h1 className='text-7xl tracking-tight font-light' >Featured Projects</h1>
            </div>

            <div className=' px-20'>
                <div className="cards w-full flex gap-10 mt-10 ">

                    <div className="cardcontainer w-1/2  h-[70vh] relative  ">
                        <h1 className=' absolute z-[9] text-[#dbff5a] -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter left-full '>FYDE</h1>
                        {"FYDE".split(' ').map((item, index) =>
                        (<span>{item}</span>

                        ))}
                        <div className=' card w-full h-full rounded-xl  overflow-hidde '>

                            <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className="cardcontainer w-1/2  h-[70vh] relative ">

                        <div className=' card w-full h-full rounded-xl   overflow-hidden '>
                            <h1 className=' absolute z-[9] text-[#dbff5a] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter right-full '>VISE</h1>
                            {"VISE".split(' ').map((item, index) => (
                                <span>{item}</span>
                            ))}
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
