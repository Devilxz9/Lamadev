import React from 'react'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: "lama dev Contact",
  description: "Contact and get in touch with us",
};


const Contact = () => {
  return (
   <div className='continer'>
      <h1 className='title text-3xl sm:text-4xl lg:text-[60px] mb-12 lg:mb-[100px] text-center font-bold'>Let's Keep in Touch</h1>
      <div className='contentt flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-center'>
        <div className='imgcontiner lg:flex-1 h-[300px] sm:h-[400px] lg:h-[500px] relative w-full order-1 lg:order-none'>
          <Image src='/contact.png' alt='' fill={true} className='image object-contain animation' />
        </div>
          <form className='form flex-1 flex flex-col gap-5 lg:gap-[20px] w-full order-2 lg:order-none' action="">
            <input type="text" placeholder='name' className='inputt p-4 lg:p-[20px] bg-transparent border-none outline-none text-[#bbb] border-[3px] border-solid text-base lg:text-[20px] font-light' />
            <input type="text" placeholder='email' className='inputt p-4 lg:p-[20px] bg-transparent border-none outline-none text-[#bbb] border-[3px] border-solid text-base lg:text-[20px] font-light' />
            <textarea name="" cols="30" rows="10" placeholder='message' className='p-4 lg:p-[20px] bg-transparent border-none outline-none text-[#bbb] border-[3px] border-solid text-base lg:text-[20px] font-light'></textarea>
            <Button url='#' text='send' />
          </form>
      </div>
    </div>
  )
}

export default Contact
