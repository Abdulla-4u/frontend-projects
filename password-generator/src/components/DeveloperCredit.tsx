import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const DeveloperCredit = () => {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6">
      <div className="border-t border-white/[0.07] pt-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-medium text-slate-300">
            Designed & built by{" "}
            <span className="font-bold text-[#8DE2C5]">Abdullah Mohammad.</span>
          </p>

          <a
            href="https://github.com/Abdulla-4u"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-1 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-slate-400 transition-all duration-200 hover:border-[#8DE2C5]/30 hover:bg-[#8DE2C5]/[0.05] hover:text-[#8DE2C5]"
          >
            <FiGithub size={14} />
            Find me on GitHub
            <FiArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DeveloperCredit;
