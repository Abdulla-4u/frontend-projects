
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PlayingEyes = () => {
  const [rotate, setRotate] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 20,
    mass: 0.6,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);

      // Move the black circles slightly towards the cursor
      const moveX = (deltaX / (window.innerWidth / 2)) * 16;
      const moveY = (deltaY / (window.innerHeight / 2)) * 16;

      x.set(Math.max(-12, Math.min(12, moveX)));
      y.set(Math.max(-12, Math.min(12, moveY)));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);


  return (
    <div
      data-scroll
      data-scroll-speed="-.6"
      className="
      relative z-10
      h-[75svh] min-h-[420px]
      w-full overflow-hidden
      bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]
      bg-cover bg-center
      sm:h-[80svh] sm:min-h-[500px]
      min-[781px]:h-screen min-[781px]:min-h-0
    "
    >
      <div
        className="
        flex h-full w-full
        items-center justify-center
        gap-4
        sm:gap-6
        min-[781px]:gap-10
      "
      >
        {/* Box 1 */}
        <div
          className="
          relative flex size-32
          items-center justify-center
          rounded-full bg-white p-6
          min-[640px]:size-40 min-[640px]:p-8
          min-[781px]:size-48 min-[781px]:p-9
        "
        >
          <span className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 font-NeueMontreal text-xs text-white sm:text-sm min-[781px]:text-base">
            PLAY
          </span>

          {/* Inner parent black box */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="parent relative h-full w-full rounded-full bg-zinc-900 will-change-transform"
          >
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute left-1/2 top-1/2 flex h-6 w-full items-center"
            >
              <div className="size-4 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Box 2 */}
        <div
          className="
          relative flex size-32
          items-center justify-center
          rounded-full bg-white p-6
           min-[640px]:size-40 min-[640px]:p-8
           min-[781px]:size-48 min-[781px]:p-9
        "
        >
          <span className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 font-NeueMontreal text-xs text-white sm:text-sm min-[781px]:text-base">
            PLAY
          </span>

          {/* Inner parent black box */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="parent relative h-full w-full rounded-full bg-zinc-900 will-change-transform"
          >
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute left-1/2 top-1/2 flex h-6 w-full items-center"
            >
              <div className="size-4 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

};

export default PlayingEyes;
