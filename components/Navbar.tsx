import React from 'react'
import yoomlogo from '../public/icons/yoom-logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
      return (
            <>             

                  <nav className=' flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
                        <Link href="/" className="flex items=center gap-1">
                             <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          YOOM
        </p>
                        </Link>

                        <div className='gap-5 flex-between'>
                              {/* clerk authentication and user management */}
                              <MobileNav/>
                        </div>
                  </nav>         
                  
                  </>

                  )
}

export default Navbar