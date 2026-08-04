import { motion, useAnimation } from "framer-motion";
import React from 'react'
import Button from "./Button";

const Card = ({item, index}) => {

    const cards = [useAnimation()];
  
    const handleHoverStart = (index)=>{
      cards[index].start({y: '0'})
    }
    const handleHoverEnd = (index)=>{
      cards[index].start({y: '100%'})
    }
  

  return (
    <div  className="relative card flex flex-col">
         <p className="title pl-5 font-NeueMontreal t mb-4 relative uppercase ">{item.title}</p>

        <div className="rounded-lg bg-purple-500 w-full overflow-hidden transition-transform duration-500 cursor-pointer">
            <h2 className={`text-[#CDEA68] text-[6.5vw] flex overflow-hidden uppercase leading-none tracking-tighter font-bold absolute ${index % 2 !== 0 ? 'md:-left-0 left-1/2': 'md:left-full left-1/2'} top-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
            {item.title.split('').map((char, index) => (
                <motion.span
                key={index}
                initial={{y: '100%'}}
                animate={cards[0]}
                transition={{
                ease: [0.25, 1, 0.5, 1], // More dramatic easing curve
                delay: index * 0.03 + Math.random() * 0.02, // Randomized delay for natural effect
                duration: 0.5, // Smooth and longer transition
                }}
                className={`inline-block ${
                char === ' ' ? 'w-[.3ch] opacity-0' : ''
                }`} // Add width for spaces
                >{char}</motion.span>
            ))}
            </h2>

        <motion.div onHoverStart={()=> handleHoverStart(0)} onHoverEnd={()=> handleHoverEnd(0)} className="h-full w-full">
            <img
            className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            src={item.image}
            alt="wp-content"
            />
        </motion.div>
        </div>
        
        <div className="btns flex flex-wrap gap-3 mt-4">
            {item.services.map((service, index) =>(
              <Button key={index} item={service}/>
            ))}
        </div>
  </div>
  )
}

export default Card
