import Image from 'next/image'
import React from 'react'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className='continer'>
      <div className='imgcontiner w-full relative h-[200px] sm:h-[250px] lg:h-[300px]'>
        <Image className="object-cover grayscale-[100%]" alt='' src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} />
        <div className='imagetetxt absolute bottom-[10px] left-[10px] sm:bottom-[20px] sm:left-[20px] bg-[#53c28b] text-white p-2 sm:p-[5px] rounded-[5px] font-bold'>
          <h1 className='imgtitle text-xl sm:text-3xl lg:text-4xl'>Digital Storytellers</h1>
          <h2 className='imagetitle text-lg sm:text-2xl lg:text-3xl'>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className='textcontiner flex flex-col lg:flex-row gap-8 lg:gap-[100px]'>
        <div className='item flex-1 mt-8 lg:mt-[50px] flex flex-col gap-6 lg:gap-[30px]'>
          <h1>Who Are We?</h1>
          <p className='text-base lg:text-[18px] font-light text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
        </div>
        <div className='item flex-1 mt-8 lg:mt-[50px] flex flex-col gap-6 lg:gap-[30px]'>
          <h1 className='title2'>What We Do?</h1>
          <p className='text-base lg:text-[18px] font-light text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps</p>
            <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About