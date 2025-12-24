"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {

  const [error, setError] = useState(null)

  const router = useRouter()

  const handleSubmit = async (e) => {
    console.log(handleSubmit);
    
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created")

    } catch (err) {
      setError(err)
    }

  };


  return (
    <div className='flex flex-col gap-6 lg:gap-[40px] justify-center items-center px-4'>
      <form className="w-full sm:w-[350px] lg:w-[300px] flex flex-col gap-4 lg:gap-[20px]" onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='inputt rounded-[15px] hover:border-[#53c28b]' required />
        <input type="email" placeholder='email' className='inputt' required />
        <input type="password" placeholder='password' className='inputt' required />

        <button className='bg-[#53c28b] rounded-[3px] h-12 lg:h-[50px] text-white font-semibold text-base lg:text-[17px] hover:scale-105 transition-all duration-200 ease-in-out'>Register</button>
      </form>
      {error && <span className='text-red-500 text-sm sm:text-base'>Something went wrong....!</span>}
      <Link href={"/dashboard/login"} className='text-sm sm:text-base hover:text-[#53c28b] transition-colors'>Login with existing account?</Link>
    </div>
  )
}

export default Register
