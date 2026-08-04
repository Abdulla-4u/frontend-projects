import React from 'react'

const Testing = () => {
  return (
    <div>
           <div className="relative flex items-center w-full gap-4 px-7">

        <div className="card w-1/2 h-[90vh]">
          <p className="font-NeueMontreal text-xl">Cardboard Spaceship</p>
          <div className=" rounded-lg h-[30rem] mt-4 overflow-hidden hover:scale-[.96] transition-transform duration-700 cursor-pointer">
          
                <div className="textbox absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                    <h2 className="absolute text-[#CDEA68] text-[5vw] leading-none left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
                        FYDE
                    </h2>
                </div>
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="wp-content"
              />
            </div>
          </div>
        </div>

        <div className="card w-1/2 h-[90vh]">
          <p className="font-NeueMontreal text-xl">AH2 & Matt Horn</p>
          <div className="rounded-lg h-[30rem] mt-4 overflow-hidden hover:scale-[.96] transition-transform duration-700 cursor-pointer">
          
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt="image"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testing

{/* <div class="featured-project relative">
						<div class="text-sm uppercase mb-15 flex items-center">
							<span class="w-10 h-10 flex-shrink-0 rounded-full bg-current mr-8"></span>
							<span>AH2 &amp; Matt Horn</span>
						</div>
						<a class="group group--no-event overflow-hidden md:overflow-visible relative mb-15 block" href="https://ochi.design/case/ah2-matt-horn-pitch-deck-design/">
							<div class="rounded transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 overflow-hidden">
								<picture class="w-full">
									<img class="bg-gray-200 w-full max-w-full rounded transition-transform group-hover:scale-110 duration-500 group-hover:duration-1000 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" width="663" height="551" data-src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" data-srcset="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png 1x, https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png 1x, https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png 2x" style="">
								</picture>
							</div>
							<h2 class="h1 text-green-100 m-0 z-2 uppercase font-semibold absolute whitespace-nowrap featured-project__headline pointer-events-none is-inview" data-scroll="" data-scroll-call="split" data-split="chars" data-ignore-animation="" style="" data-shown="true" data-show="true"><div class="splitter-wrap overflow-hidden is-row-parent" style="display: block; text-align: start; position: relative;">     <div style="position:relative;display:inline-block;" class="is-char">A</div><div style="position:relative;display:inline-block;" class="is-char">H</div><div style="position:relative;display:inline-block;" class="is-char">2</div> <div style="position:relative;display:inline-block;" class="is-char">&amp;</div> <div style="position:relative;display:inline-block;" class="is-char">M</div><div style="position:relative;display:inline-block;" class="is-char">a</div><div style="position:relative;display:inline-block;" class="is-char">t</div><div style="position:relative;display:inline-block;" class="is-char">t</div> <div style="position:relative;display:inline-block;" class="is-char">H</div><div style="position:relative;display:inline-block;" class="is-char">o</div><div style="position:relative;display:inline-block;" class="is-char">r</div><div style="position:relative;display:inline-block;" class="is-char">n</div> </div></h2>
						</a>
													<div class="flex flex-wrap -mb-10 items-start">
																	<div class="mr-10 mb-10">
										<a class="btn btn--default btn--small" href="https://ochi.design/presentation-design-agency-services/">
											<span class="btn__text">Pitch deck</span>
										</a>
									</div>
															</div>
											</div> */}



  {/* <div  className="relative card w-1/2 flex flex-col ">
          <p className="font-NeueMontreal text-xl mb-4">Cardboard Spaceship</p>

          <motion.div onHoverStart={()=> handleHoverStart(0)} onHoverEnd={()=> handleHoverEnd(0)} className="rounded-lg h-[85vh] w-full overflow-hidden transition-transform duration-500 cursor-pointer">
              <h2 className="text-[#CDEA68] text-[6.5vw] flex overflow-hidden uppercase leading-none tracking-tighter font-bold absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                {'Cardboard Spaceship'.split('').map((char, index) => (
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
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="wp-content"
              />
            </div>
          </motion.div>

        </div> */}

             {/* Card 2 */}
        {/* <div className="relative card w-1/2 flex flex-col">
          <p className="font-NeueMontreal text-xl mb-4">AH2 & Matt Horn</p>
          <motion.div onHoverStart={()=> handleHoverStart(1)} onHoverEnd={()=> handleHoverEnd(1)} className="rounded-lg h-[85vh] w-full overflow-hidden  transition-transform duration-500 cursor-pointer">
            <h2 className="text-[#CDEA68] text-[6.5vw] uppercase flex overflow-hidden leading-none tracking-tighter font-bold absolute -left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  {'AH2 & Matt Horn'.split('').map((char, index) => (
                    <motion.span
                    key={index}
                    initial={{y: '100%'}}
                    animate={cards[1]}
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
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt="image"
              />
            </div>
          </motion.div>
        </div> */}