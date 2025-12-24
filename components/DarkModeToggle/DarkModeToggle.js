"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {

 const {toggle, mode} = useContext(ThemeContext)
  return (
    <div onClick={toggle} className='continer w-[52px] h-[26px] border-[2.5px] border-solid border-[#53c28b70] rounded-[30px] flex justify-between items-center p-[2px] relative cursor-pointer '>
        <div className='icon text-[13px] '>🌙</div>
        <div className='icon text-[14px] '>🔆</div>
        <div className={`ball w-[18px] h-[18px] bg-[#53c28b] rounded-[50%] absolute  ${mode === "light" ? "left-[3px]" : "left-[27px]"} transition-all duration-300 ease-in`}/>
    </div>
  )
}

export default DarkModeToggle
