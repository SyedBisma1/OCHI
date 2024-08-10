import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#c6ec3f] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='text-[3.5vw] leading-[3.5vw] tracking-tight '>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people </h1>

      <div className='w-full border-t-[2px] pt-10 border-[#a1b562] mt-20 flex justify-evenly items-center '>
        <h1 className='w-full'>What you can expect:</h1>
        <h1 className='w-full'>We create tailored presentations to help you persuade your <br /> colleagues, clients, or investors.  Whether its live or digital,  <br />delivered  for one or a hundred people.
          We believe the mix of <br /> strategy and design (with a bit of coffee)  is what makes your  <br />message clear, convincing, and captivating.</h1>

      </div>

      <div className='w-full border-t-[2px] pt-10 border-[#a1b562] mt-20 flex gap-5'>
        <div className='w-1/2 '>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='uppercase text-xl px-10 py-3 bg-zinc-900 mt-10 rounded-full  text-white flex items-center gap-5 '>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[65vh] bg-[#738922] rounded-3xl '>
          <img className='object-cover h-full w-full rounded-3xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>

    </div>

  )
}

export default About
