import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className='bg-[#004D43] relative w-full py-14 pt-20 rounded-tl-2xl rounded-tr-2xl z-20'>
        <div className='flex whitespace-nowrap border-t-[1px] border-b-[1px] overflow-hidden border-zinc-300'>
            {Array(10).fill().map((_, index) => (
              <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 8}} key={index} className="text-white uppercase text-[27vw] leading-[.7] font-FoundersGrotesk pt-1 pb-8 pr-14">We are ochi</motion.h1>
            ))}
        </div>
    </div>
  )
}

export default Marquee
