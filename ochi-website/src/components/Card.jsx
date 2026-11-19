import { motion, useAnimation } from "framer-motion";
import FeatureButton from "./common/FeatureButton";

const Card = ({ item, index }) => {

  const cards = [useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: '0' })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' })
  }


  return (
    <div className="relative card flex flex-col">
      <p className="title md:pl-5 pl-1 font-NeueMontreal mb-4 relative uppercase">{item.title}</p>

      <div className=" rounded-lg w-full overflow-hidden transition-transform duration-500 cursor-pointer">
        <h2 className={`text-[#CDEA68] font-FoundersGrotesk text-[clamp(1.875rem,8.5vw,8.5vw)] flex overflow-hidden uppercase leading-none tracking-normal
                     font-bold absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] ${index % 2 !== 0 ? 'md:-left-0 left-1/2' : 'md:left-full left-1/2'} `}>
          {item.title.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: '100%' }}
              animate={cards[0]}
              transition={{
                ease: [0.25, 1, 0.5, 1],
                delay: index * 0.03 + Math.random() * 0.02,
                duration: 0.4,
              }}
              className={`inline-block ${char === ' ' ? 'w-[.3ch] opacity-0' : ''
                }`}
            >{char}</motion.span>
          ))}
        </h2>

        <motion.div onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} className="h-full w-full rounded-lg hover:scale-95 transition-transform duration-500 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center rounded-lg hover:scale-110 transition-transform  duration-500"
            src={item.image}
            alt="wp-content"
          />
        </motion.div>
      </div>



      <div className="btns flex flex-wrap gap-3 mt-4">
        {item.services.map((service, index) => (
          <FeatureButton className={"leading-none px-2 md:leading-[16px] md:px-3"} key={index}>
            {service}
          </FeatureButton>
        ))}
      </div>
    </div>
  )
}

export default Card
