import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const PlayingEyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
       window.addEventListener('mousemove', (e) => {
       
           let mouseX = e.clientX;
           let mouseY = e.clientY;

           let deltaX = mouseX - window.innerWidth/2;
           let deltaY = mouseY - window.innerHeight/2;

           let rotate = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
           setRotate(rotate - 180);
       })
    }, [])


  return (
    <div data-scroll data-scroll-speed='-.6' className='h-screen w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center relative z-10 overflow-hidden'>
        <div  className='h-full w-full flex gap-10 items-center justify-center'> 

            <div className='size-48 p-8 rounded-full bg-white relative flex items-center justify-center'>
              <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md font-NeueMontreal z-50'>PLAY</span>
                <div className='parent h-full w-full bg-zinc-900 rounded-full relative'>
                
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}  className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='w-5 h-5 rounded-full bg-white'></div>    
                        </div>
                </div>
            </div>

            <div className='relative size-48 p-8 rounded-full bg-white flex items-center justify-center'>
                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md font-NeueMontreal z-50'>PLAY</span>
                <div className='parent h-full w-full bg-zinc-900 rounded-full relative'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='w-5 h-5 rounded-full bg-white'></div>    
                    </div>
                </div>
            </div>

        </div>
    </div>
  
  )
}

export default PlayingEyes
    
