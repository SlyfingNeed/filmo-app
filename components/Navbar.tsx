import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '../constants'

const Navbar = () => {
  return (
    <nav className="border-spacing-4 flexBetween fixed max-container padding-container z-[1000] py-5 overflow-x-hidden">
    
    <Link href="/">
      <Image src={"/nav-logo.svg"}
             alt='logo'
             width={150}
             height={100}/>     
    </Link>

    <ul className='hidden fixed right-20 items-end gap-[4vw] h-container lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
                className='font-sans font-semibold text-xl text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-red-600 hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      
      <Image 
      src={"/burger-dropdown.svg"}
      alt="menu"
      width={32}
      height={32}
      className='fixed right-10 items-end cursor-pointer gap-[4vw] lg:hidden'
      />

    </nav>
  )
}

export default Navbar