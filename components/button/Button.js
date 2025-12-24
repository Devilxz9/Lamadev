import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
  <Link href={url}>
    <button className="p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-white font-medium max-w-max  ">{text} </button>
  </Link>
  )
}

export default Button
