import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'services'
    },
    {
      id: 4,
      link: 'clients'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
      <div className='flex justify-between items-center bg-cyan-900 text-white px-4 h-20 w-full'>
        <div>
          <h1 className='text-5xl font-ArialBlack ml-2'>WELTECH</h1>
        </div>
        
        <ul className='hidden md:flex'>
          {
            links.map(({ id, link })=> (
              <li className='px-4 cursor-pointer capitalize text-gray-400
                font-medium hover:scale-110 duration-200'>
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
               
                </li>
            ))
          }
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}  
        </div>

        {nav && (
              <div className='flex flex-col absolute top-0 left-0 w-full text-gray-300
                justify-center items-center h-screen bg-gradient-to-b from-cyan-950 to-cyan-700'>
                <ul>
                  {links.map(( {id, link }) => <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                  
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                  
                  </li>)}    
                </ul>
              </div>
        )}

      </div>
      
  )
}

export default NavBar