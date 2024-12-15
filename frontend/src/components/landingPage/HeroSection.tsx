import { Button } from "../button/Button";
import Navbar from "../navbar/LangingPageNavbar";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[70vh] pt-6 bg-[#F1FAFA] dark:bg-black dark:text-white"
    >
      <Navbar />

      <div className="flex">
        <div className="flex flex-col justify-center items-end w-1/2">
        <div className="pr-28">
          <h1 className="text-5xl font-bold leading-snug text-[#252525] dark:text-white">
            Are you looking for <br /> Freelancers?
          </h1>
          <p className="opacity-50 mt-2 leading-7 mr-[5.5rem]">
            Hire Great Freelancers, Fast. Spacelance helps <br /> you hire elite
            freelancers at a moment's notice
          </p>

        </div>

          <div className="flex items-center mt-5 gap-4 mr-14">
            <Button
              text="Hire a freelancer"
              variant="primary"
              className="py-3"
            />
            <input
              placeholder="search freelance work"
              className="w-72 py-3 placeholder:text-sm px-3 rounded border"
            />
            <div className="border w-7 h-7 relative right-16 rounded-full bg-blue-100 p-1">
              <img src="/src/assets/serachicon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-1">
          <img
            src="/src/assets/Workingremotely.svg"
            alt=""
            className="h-[60vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
