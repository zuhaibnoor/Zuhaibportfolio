import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Zuhaib</div>
        <ul className='gap-50 lg:gap-16 md:gap-12 md:flex'>
            <li className='menuLink'  ><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
