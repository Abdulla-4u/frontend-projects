import { OverviewDetails } from "../Data/Data";

type OverviewDetailsType = {
  title: string;
  description: string;
  icon: React.FC;
};

const Overview = () => {
  return (
    <div className="lg:max-w-5xl w-full lg:mx-auto mt-10 sm:px-5 px-5">
      <h2 className="text-white font-bold sm:text-2xl text-xl">
        More Reasons to Join
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-2 mt-5 pb-14">
        {OverviewDetails.map((item: OverviewDetailsType, i: number) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;

const Card = ({ title, description, icon: Icon }: OverviewDetailsType) => {
  return (
    <div className="card py-5 px-4 lg:max-w-[230px] max-w-full w-full flex flex-col justify-between sm:gap-10 gap-7 sm:rounded-lg rounded-xl bg-gradient-to-b from-[#1A2042] to-[#1F1324]">
      <div>
        <h3 className="text-2xl text-white font-bold mb-3 ">{title}</h3>
        <p className="text-sm font-medium text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="ml-auto">
        <Icon />
      </div>
    </div>
  );
};
