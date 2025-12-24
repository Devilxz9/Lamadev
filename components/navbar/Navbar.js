"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  
  const session = useSession();

  return (
    <div className='h-[80px] lg:h-[100px] flex justify-between items-center relative'>
      <Link href="/" className='font-bold text-lg lg:text-[22px]'>lamamia</Link>
      
      {/* Mobile menu button */}
      <button 
        className='lg:hidden flex flex-col gap-1 z-50'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop menu */}
      <div className='hidden lg:flex items-center gap-5'>
        <DarkModeToggle/>
        {links.map((link) =>(
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session.status === "unauthenticated" && (
          <Link href={"/dashboard/login"}>
            <button className='px-4 py-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px]'>Login</button>
          </Link>
        )}
        {session.status === "authenticated" && (
          <button onClick={signOut} className='px-4 py-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px]'>Logout</button>
        )}
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed top-0 right-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col gap-6 p-8 mt-20'>
          <DarkModeToggle/>
          {links.map((link) =>(
            <Link 
              key={link.id} 
              href={link.url}
              onClick={() => setIsOpen(false)}
              className='text-lg'
            >
              {link.title}
            </Link>
          ))}
          {session.status === "unauthenticated" && (
            <Link href={"/dashboard/login"} onClick={() => setIsOpen(false)}>
              <button className='w-full px-4 py-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px]'>Login</button>
            </Link>
          )}
          {session.status === "authenticated" && (
            <button 
              onClick={() => {
                signOut();
                setIsOpen(false);
              }} 
              className='w-full px-4 py-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-[3px]'
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Navbar