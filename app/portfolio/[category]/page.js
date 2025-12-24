import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat)=>{
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()
}

const Category = async({params}) => {
  const categor = await params
  const data = getData(categor.category)
  // console.log(params);
  
  return (
    <div className='cotniner'>
      <h1 className='cattitlee text-2xl sm:text-3xl lg:text-4xl text-[#53c28b] mb-6 lg:mb-8'>{categor.category}</h1>

      {data.map(item=>(

        <div key={item.id} className="itemm flex flex-col lg:flex-row gap-8 lg:gap-[50px] mt-8 lg:mt-[50px] mb-12 lg:mb-[100px] lg:nth-[2n+1]:flex-row-reverse">
        <div className="contnt flex-1 flex flex-col gap-4 lg:gap-[20px] justify-center">
          <h1 className='titlee text-3xl sm:text-4xl lg:text-[50px]'>{item.title}</h1>
          <p className='descrip text-base sm:text-lg lg:text-[20px] mb-3 lg:mb-5'>{item.desc}</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className="imgcontiner flex-1 h-[250px] sm:h-[350px] lg:h-[500px] relative">
          <Image className='img object-cover' src={item.image} alt='' fill={true} />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Category
