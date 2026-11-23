
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#5542ff] py-5 text-black md:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:px-8 md:flex-row md:gap-4 lg:px-12">

        {/* Copyright */}
        <p className="text-center text-xs font-light sm:text-sm md:text-left">
          © Nova 2024. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-lg transition-colors duration-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-center text-xs font-light transition-colors duration-300 hover:text-white hover:underline sm:text-sm md:text-right"
        >
          Privacy Policy
        </a>

      </div>
    </footer>
  );
};

export default Footer;
