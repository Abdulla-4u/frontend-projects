import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20 sm:px-5 px-5">
      <div className="sm:text-center">
        <p className="text-white text-base font-medium">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center mt-4 gap-4 w-full max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow p-4 placeholder:text-[#B7B7B7] rounded-md bg-[#333] text-white border border-[#4B4B4B] focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
          />
          <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 sm:text-2xl text-lg text-white cursor-pointer py-3 px-5 rounded-md transition-colors duration-300 whitespace-nowrap max-w-fit sm:w-auto font-bold justify-center">
            Get Started{" "}
            <MdKeyboardArrowRight className="text-white sm:text-3xl text-2xl" />
          </button>
        </div>
      </div>

      <footer className="bg-black text-[#B3B3B3] py-12">
        {/* Top text */}
        <p className="mb-9 mt-5">
         <span className="underline">Questions? Contact us.</span>
        </p>

        {/* Grid of links */}
        <ul className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="underline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Language selector */}
        <div className="mt-8 relative inline-block">
          <select
            className="appearance-none bg-black border border-gray-500 text-white px-4 py-1 text-base rounded pr-8"
            defaultValue="English"
          >
            <option>English</option>
            <option>हिन्दी</option>
          </select>

          {/* Custom arrow */}
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white">
            <IoMdArrowDropdown />
          </span>
        </div>


        {/* Bottom text */}
        <p className="mt-6 text-sm">Netflix Bangladesh</p>
        <p className="mt-10 text-sm text-[#788080]" >This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-[#3E8EF4] underline">Learn more.</span> </p>
      </footer>
    </div>
  );
};

export default Footer;
