import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '../constants'

const Navbar = () => {
  return (
    <nav className="border-spacing-2 flexBetween max-container padding-container relative z-30 py-5">

    
    <Link href="/">
      <Image src={"/FILMO.svg"}
             alt='logo'
             width={76}
             height={29}/> 
     
    </Link>

    <ul className='h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
                className='font-sans font-semibold text-xl text-black flexCenter cursor-pointer pb-1.5 transition-all hover:text-red-600 hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar