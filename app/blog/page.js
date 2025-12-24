import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

async function getdata() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store',});

  if (!res.ok){
    throw new Error('failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {

  const data = await getdata()
  return (
   <div className=''>
      {data.map(item=>(
        <Link key={item._id} href={`/blog/${item._id}`} className='continer flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-[50px] mb-8 sm:mb-10 lg:mb-[50px]'>
      <div className="imgcontiner w-full sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[200px] lg:h-[250px] relative flex-shrink-0">
        <Image
        src={item.img}
        alt=''
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 300px, 400px"
        className='img object-cover rounded-lg'
        />
      </div>
      <div className='contentt flex-1'>
        <h1 className='mb-2 sm:mb-[10px] text-2xl sm:text-3xl lg:text-[40px] font-bold'>{item.title}</h1>
        <p className='text-base sm:text-lg lg:text-[18px] text-[#999]'>{item.desc}</p>
      </div>
      </Link>
      ))}
      
    </div>
  )
}

export default Blog
