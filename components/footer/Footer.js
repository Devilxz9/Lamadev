import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex h-[50px] items-center justify-between text-[14px] '>
    <div>&copy; 2025 Lmamia. All rights reserved.</div>
    <div className='flex gap-[10px] '>
    <Image src="/1.png" width={15} height={15} className='opacity-[0.6] cursor-pointer ' alt='Lama Dev' />
    <Image src="/2.png" width={15} height={15} className='opacity-[0.6] cursor-pointer ' alt='Lama Dev' />
    <Image src="/3.png" width={15} height={15} className='opacity-[0.6] cursor-pointer ' alt='Lama Dev' />
    <Image src="/4.png" width={15} height={15} className='opacity-[0.6] cursor-pointer ' alt='Lama Dev' />
    </div>
    </div>
  )
}

export default Footer
