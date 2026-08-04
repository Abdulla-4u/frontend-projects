import React, { useEffect } from 'react'
import banner from '../assets/7115637.jpg'


const Banner = ({gameBanner}) => {
  
  return (
    <div className='relative w-full '>
        <div className='absolute bottom-0 p-7'>
            <h2 className='text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 dark:text-white'>{gameBanner?.name }</h2>
            <a className='bg-blue-500 px-4 cursor-pointer hover:shadow-2xl shadow-blue-800 py-2 rounded-md font-semibold text-lg text-white'>Get Now</a>
        </div>
        <img src={gameBanner?.background_image || banner} alt="banner" className='md:h-[320px] w-full object-cover rounded-xl' />
    </div>
  
  )
}

export default Banner
