export const dynamic = "force-dynamic";


import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getdata(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, { cache: 'no-store',});

  if (!res.ok){
    return notFound()
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const {id} = await params
  const post = await getdata(id)
  return {
    title: post.title,
    description: post.desc,
  }
}



const Blogpost = async ({params}) => {
  const {id} = await params;

  const data = await getdata(id)
  return (
    <div className="continer mx-auto px-4">
  <div className="top flex flex-col lg:flex-row gap-8 lg:gap-12">
    
    <div className="info flex-1 flex flex-col justify-between gap-6 lg:gap-8">
      <h1 className="title text-2xl sm:text-3xl lg:text-[40px] font-bold">
        {data.title}
      </h1>

      <p className="desc text-base sm:text-lg lg:text-[18px] font-light">
        {data.desc}
      </p>

      <div className="author flex items-center gap-[10px]">
        <Image
          src={data.img}
          alt=""
          width="40"
          height="40"
          className="avatar w-10 h-10 rounded-full object-cover"
        />
        <span className="username text-sm sm:text-base">{data.username}</span>
      </div>
    </div>

   <div className="imageContiner flex-1 order-first lg:order-none w-full">
  <Image
    src={data.img}
    alt=""
    width={600}
    height={300}
    className="imag object-cover rounded-2xl w-full h-[200px] sm:h-[250px] lg:h-[300px]"
  />
</div>

  </div>

  <div className="content mt-8 lg:mt-[50px] text-base sm:text-lg lg:text-[20px] font-light text-[#999] text-justify">
    <p className="text">
      {data.content}
    </p>
  </div>
</div>

  )
}

export default Blogpost
