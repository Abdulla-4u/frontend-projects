import React from 'react'
import trend from '../assets/7115637.jpg'
const TrendingGames = ({trendingGames}) => {
   
  return (  
    <div className='mt-6'>
        <h2 className='text-3xl py-2 font-medium dark:text-white'>Trending Games</h2>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
        
            {trendingGames.map((item, i)=> i < 4 && (
                 <div key={i} className='rounded-lg overflow-hidden bg-gray-700 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer'>
                        <img src={item.background_image} alt={trend} className='h-64 w-full object-cover'/>
                        <h2 className='text-xl font-semibold text-white p-4'>{item.name}</h2>
                 </div>
            ))}
        
        
            
        </div>
    </div>
  )
}

export default TrendingGames
