"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  // session = useSession()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn("credentials", { email, password, redirect: false, })

  if (res?.ok) {
      router.push("/dashboard")
    }

    
  }




  return (
   <div className='flex justify-center items-center flex-col gap-6 lg:gap-10 px-4'>
      <form className="w-full sm:w-[350px] lg:w-[300px] flex flex-col gap-4 lg:gap-[20px]" onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className='inputt' required />
        <input type="password" placeholder='password' className='inputt' required />

        <button className='bg-[#53c28b] rounded-[3px] h-12 lg:h-[50px] text-white font-semibold text-base lg:text-[17px] hover:scale-105 transition-all duration-200 ease-in-out'>Login</button>
      </form>
      <button className='cursor-pointer text-sm sm:text-base hover:text-[#53c28b] transition-colors' onClick={() => signIn("google")}>Login with Google</button>


    </div>
  )
}

export default Login
