
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  `
    group isolate relative inline-flex w-fit
    items-center justify-center overflow-hidden
    rounded-full border-[1.4px] leading-[14px]
    px-3 py-1 text-[14px]
    font-NeueMontreal uppercase
    transition-colors duration-300
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-current
    focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50

    before:pointer-events-none
    before:absolute before:-inset-x-12
    before:-inset-y-full before:z-0
    before:scale-y-0 before:origin-top
    before:rounded-[50%]
    before:transition-transform before:duration-700
    before:ease-[cubic-bezier(0.215,0.61,0.355,1)]
    hover:before:scale-y-100
    hover:before:origin-bottom

    motion-reduce:before:transition-none
  `,
  {
    variants: {
      variant: {
        dark: "border-[#212121] text-[#212121] before:bg-[#212121]",
        light: "border-white text-white before:bg-white",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

const buttonTextVariants = cva(
  "relative z-10 transition-colors duration-300 delay-150",
  {
    variants: {
      variant: {
        dark: "group-hover:text-white",
        light: "group-hover:text-[#212121]",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

const FeatureButton = ({
  children,
  variant = "dark",
  className,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(buttonVariants({ variant }), className)}
    >
      <span className={buttonTextVariants({ variant })}>
        {children}
      </span>
    </button>
  );
};

export default FeatureButton;
