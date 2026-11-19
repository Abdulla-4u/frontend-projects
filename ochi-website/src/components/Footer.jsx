import Logo from "./Navbar/Logo";

const Footer = () => {
    return (
        <footer className="w-full bg-[#F1F1F1] px-5 py-6 mb-2 sm:px-8 lg:px-10">
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">

                {/* Logo */}
                <div className="mb-5 sm:mb-0">
                    <Logo />
                </div>

                {/* Copyright & Legal */}
                <div className="flex flex-wrap items-center gap-2 font-NeueMontreal text-sm text-black/30">
                    <span>© ochi design 2026.</span>
                    <span
                        to="/privacy"
                        className="underline underline-offset-2 transition-opacity hover:opacity-60"
                    >
                        Legal Terms
                    </span>
                </div>

                {/* Website Credit */}
                <p className="font-NeueMontreal text-sm text-black/30">
                    Website by{" "}
                    <a
                        href="https://obys.agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 transition-opacity hover:opacity-60"
                    >
                        Obys
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;