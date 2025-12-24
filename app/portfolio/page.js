import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className='continer'>
      <h1 className='titlee mt-5 mb-5 lg:mt-[20px] lg:mb-[20px]'>Choose a gallery</h1>
      <div className='itmes flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 lg:gap-[50px] justify-center sm:justify-start'>
        <Link href='/portfolio/illustrations' className='itms border-[5px] border-solid text-[#bbb] rounded-[5px] w-full sm:w-[250px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px] hover:text-[#53c28b] relative'>
          <span className='titlee absolute right-[10px] bottom-[10px] text-2xl sm:text-3xl lg:text-[35px] font-bold hover:text-[#53c28b]'>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className='itms border-[5px] border-solid text-[#bbb] rounded-[5px] w-full sm:w-[250px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px] hover:text-[#53c28b] relative'>
          <span className='titlee absolute right-[10px] bottom-[10px] text-2xl sm:text-3xl lg:text-[35px] font-bold hover:text-[#53c28b]'>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className='itms border-[5px] border-solid text-[#bbb] rounded-[5px] w-full sm:w-[250px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px] hover:text-[#53c28b] relative'>
          <span className='titlee absolute right-[10px] bottom-[10px] text-2xl sm:text-3xl lg:text-[35px] font-bold hover:text-[#53c28b]'>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio