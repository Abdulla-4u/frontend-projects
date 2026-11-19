import Card from "./Card";
import { Projects } from "../constant/constant"
import CaseStudiesButton from "./CaseStudiesButton ";

const Features = () => {
  return (
    <section className="relative z-30 mb-10 w-full bg-[#F1F1F1]">
      {/* Section Heading */}
      <h3
        className="
          px-5 pt-10
          font-NeueMontreal
          text-[clamp(1.5rem,4vw,3.5rem)]
          tracking-tight
          text-[#212121]
          sm:px-8
          lg:px-10
        "
      >
        Featured projects
      </h3>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-[#D2D2D2] sm:my-8" />

      {/* Projects Grid */}
      <div
        className="
          relative grid w-full grid-cols-1
          gap-x-4 gap-y-8
          px-5 pb-5
          md:grid-cols-2 sm:gap-y-10 sm:px-8
          md:px-10
        "
      >
        {Projects.map((item, i) => (
          <Card key={i} item={item} index={i} />
        ))}
      </div>

      {/* Button */}
      <CaseStudiesButton />
    </section>
  );
};

export default Features;


