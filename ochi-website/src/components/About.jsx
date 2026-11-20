const About = () => {
  return (
    <section
      className="
      relative z-30
      min-h-[55vh] lg:min-h-[80vh]
      w-full rounded-2xl
      bg-[#CDEA68]
      px-5 py-12
      sm:px-8 sm:py-14
      md:px-12 md:py-16
      lg:px-20 lg:py-16
"
    >
      <h2
        className="
      max-w-[1400px]
      font-NeueMontreal
      text-[clamp(1.75rem,4.3vw,4.3vw)]
      leading-[1.05]
      tracking-[-0.035em]
      text-[#212121]
      lg:leading-none
  "
      >
        Ochi is a strategic presentation agency for forward-thinking
        businesses that need to{" "}
        <span className="underline underline-offset-2">
          raise funds, sell products, explain complex ideas,
        </span>{" "}
        and{" "}
        <span className="underline underline-offset-2">
          hire great people
        </span>
        .
      </h2>
    </section>
  );
};

export default About;
