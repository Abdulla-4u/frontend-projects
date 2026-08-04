import { MdKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      <div className="absolute inset-0 bg-[url('./assets/images/backgound.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-5xl text-center px-4">
        <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-extrabold sm:mb-4 mb-2 sm:leading-15">
          Unlimited movies, TV <br /> shows, and more
        </h1>
        <p className="text-white font-normal text-base md:text-xl mb-8">
          Starts at USD 2.99. Cancel anytime.
        </p>
        <p className="text-white text-md md:text-sm font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-3 gap-3 w-full max-w-xl mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-grow w-full md:w-auto px-4 py-4 rounded-md bg-black/60 border border-[#5E5E5E] placeholder:text-[#B7B7B7] text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-fit md:w-auto sm:px-5 px-4 py-3 flex items-center justify-center gap-1 rounded-md text-xl font-bold cursor-pointer text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] duration-300 transition-colors">
            Get Started 
           <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
