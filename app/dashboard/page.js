"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

const Dashboard = () => {



  const session = useSession()

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, error, isLoading } = useSWR(
    session?.status === "authenticated"
      ? `/api/posts?username=${session?.data?.user?.name}`
      : null,
    fetcher
  );

  console.log(data, "i am data");


  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login")
    }


  }, [session.status, router])

  if (session.status === "loading") {
    return <p>Loading....</p>
  }

const handleSubmit = async(e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const img = e.target[2].value;
  const content = e.target[3].value;

  try{
await fetch("/api/posts",{
  method:"POST",
  body: JSON.stringify({
    title,desc,img,content,username: session.data.user.name,

  }),
});
mutate()
  }catch(err){
    console.log(err);
    
  }
  
}

const handleDelete = async (id) => {
  try{
await fetch(`/api/posts/${id}`,{
  method:"DELETE",
})
mutate()
  }catch (err){
    console.log(err);
    
  }
  
}





  if (session.status === "authenticated") {
    return <div className='text-white flex flex-col lg:flex-row gap-12 lg:gap-[100px]'>
      <div className='postss flex-1 flex flex-col'>
        {isLoading ? "Loading" 
        : data?.map(post=>(
<div className='post flex flex-col sm:flex-row items-center justify-between gap-4 m-6 sm:m-8 lg:m-[50px]' key={post._id}>
          <div className='imgcon w-full sm:w-[150px] lg:w-[200px] h-[150px] sm:h-[80px] lg:h-[100px] relative'>
          <Image src={post.img} alt='' className='object-cover' fill={true}/>
        </div>
        <h2 className='text-base sm:text-lg lg:text-xl flex-1 text-center sm:text-left'>{post.title}</h2>
        <span onClick={()=>handleDelete(post._id)} className='deletee cursor-pointer text-[#bbb] font-bold text-xl hover:text-red-500'>X</span>
      </div>
      ))}
    </div>
      <form className='neww flex-1 flex flex-col gap-5 lg:gap-[20px]' onSubmit={handleSubmit}>
        <h1 className='text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#bbb]'>Add New Post</h1>


        <input type="text" placeholder='Title' className='inputy' />
        <input type="text" placeholder='desc' className='inputy' />
        <input type="text" placeholder='Image' className='inputy' />

        <textarea className='textareaa inputy mt-3 lg:mt-5' placeholder='Content' cols={"30"} rows={"10"}></textarea>
        <button className='p-4 lg:p-[20px] cursor-pointer border-none bg-[#53c28b] rounded-[5px] font-bold text-white hover:bg-[#45a876] transition-colors'>Send</button>

      </form>
    </div>
  }
}



export default Dashboard;
