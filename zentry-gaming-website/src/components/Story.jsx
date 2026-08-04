import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef();

  const handleMouseMove = (e) => {
    const element = frameRef.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 20;

    gsap.to(element, {
      duration: 0.3,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.3,
      rotationX: 0,
      rotationY: 0,
      ease: "power1.out",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black">
      <div className="flex flex-col items-center size-full py-10 pb-24 text-blue-50">
        <p className="font-General text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            id="story"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  ref={frameRef}
                  src="img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
          <div className="-mt-80 flex w-full justify-center md:-mt-48 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>

              <Button
                id="realm-btn"
                title="discover prologue"
                containerClass="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
