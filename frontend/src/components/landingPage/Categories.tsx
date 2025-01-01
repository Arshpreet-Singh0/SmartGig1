import React from "react";
import {
  Blend,
  BriefcaseBusiness,
  ChartColumnDecreasing,
  Code,
  Image,
  SquarePen,
} from "lucide-react";
import { Button } from "../ui/Button";

const categories = [
  {
    heading: "Development",
    experts: "1,200+ Experts",
    icon: <Code />,
    features: [
      "Full Stack Development",
      "Mobile App Development",
      "Backend Development",
    ],
  },
  {
    heading: "Design",
    experts: "800+ Experts",
    icon: <Image />,
    features: ["UI/UX Design", "Brand Identity", "Visual Design"],
  },
  {
    heading: "Marketing",
    experts: "600+ Experts",
    icon: <Blend />,
    features: ["Digital Marketing", "Content Strategy", "SEO Optimization"],
  },
  {
    heading: "Writing",
    experts: "400+ Experts",
    icon: <SquarePen />,
    features: ["Content Writing", "Copywriting", "Technical Writing"],
  },
  {
    heading: "Data",
    experts: "300+ Experts",
    icons: <ChartColumnDecreasing />,
    features: ["Data Analysis", "Data Science", "Machine Learning"],
  },
  {
    heading: "Business",
    experts: "500+ Experts",
    icon: <BriefcaseBusiness />,
    features: ["Business Strategy", "Financial Analysis", "Market Research"],
  },
];

const Categories = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center">
        Explore Talent Categories
      </h1>
      <p className="text-center mt-4 text-gray-400">
        Find experts across various domains to help bring your projects to life
      </p>

      <div className="grid grid-cols-3 w-[70%] mx-auto gap-5 mt-20 px-14">
        {categories?.map((c: any, idx) => (
          <Card
            heading={c.heading}
            experts={c.experts}
            features={c.features}
            key={idx}
            icon={c.icon}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          text="Browser All Categories"
          variant="secondary"
          className="py-4 px-8"
        />
      </div>

      <div className="py-16"></div>
    </div>
  );
};

export default Categories;

interface props {
  heading: string;
  experts: string;
  features: string[];
  icon: React.ReactElement;
}
const Card: React.FC<props> = ({ heading, experts, features, icon }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-6">
      <div className="flex gap-2">
        <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#292951] text-[#6366F1]">
          {icon}
        </div>

        <div>
          <h2 className="text-lg">{heading}</h2>
          <p className="text-sm text-gray-400">{experts}</p>
        </div>
      </div>
      {features?.map((f: string, idx: number) => (
        <li
          key={idx}
          className={`text-sm text-gray-400 ${idx == 0 ? "mt-4" : "mt-2"} `}
        >
          {f}
        </li>
      ))}
    </div>
  );
};
