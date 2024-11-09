import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/dp.jpeg)] bg-left lg:bg-[15%] bg-cover' style = {{backgroundSize:"35%"}}>
    <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[100px sm:text-[50px] md:text-[50px] font-bold leading-tight flex justify-center items-center'>
                <div>
                    <p>This is </p>
                    <p> Zuhaib Noor's </p>
                    <p> portfolio</p>
                </div>
            </div>
            
        </div>
    </div>
        

  )
}

export default Hero
