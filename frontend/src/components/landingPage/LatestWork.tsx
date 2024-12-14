import { ArrowLeft, ArrowRight } from "lucide-react";

const LatestWork = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="w-[70%] h-[500px] mx-auto pt-16 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl text-[#9D9D9D]">
              The latest freelance work!
            </h1>
            <h1 className="text-4xl mt-4">
              Recently Posted <span className="text-blue-100">Works</span>
            </h1>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center items-center w-12 h-12  rounded-full shadow dark:shadow-white">
            <ArrowLeft className="text-blue-100"/>
            </div>
            <div className="flex justify-center items-center w-12 h-12 shadow rounded-full bg-blue-100">
            <ArrowRight className="text-white"/>
            </div>
          </div>
        </div>

        <div className="flex justify-between h-72 mt-12">
          <div className="w-[300px] shadow rounded-3xl p-2 dark:shadow-white">
            <div className="flex justify-center">
              <img src="/src/assets/MaterialUi.png" alt="" />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-xl">Logo Design</h1>
              <p className="text-[#9D9D9D]">
                Need a professional logo with writing underneath for our
                jewellery company
              </p>
            </div>
            <div className="flex p-4">
              <div className="w-1/2 text-center text-[#252525]">
                <h3 className="text-xl dark:text-white opacity-80">Highest bid</h3>
                <h2 className="text-2xl dark:text-white opacity-80">$500</h2>
              </div>
              <div className="flex justify-center items-center flex-1">
                <h2 className="text-blue-100 underline">Apply now</h2>
              </div>
            </div>
          </div>
          <div className="w-[300px] shadow rounded-3xl p-2 dark:shadow-white">
            <div className="flex justify-center">
              <img src="/src/assets/CanvaApp.png" alt="" />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-xl">Graphic Design</h1>
              <p className="text-[#9D9D9D]">
                We need a graphic designer with UI/UX skills for our Furniture
                company
              </p>
            </div>
            <div className="flex p-4">
              <div className="w-1/2 text-center text-[#252525]">
                <h3 className="text-xl dark:text-white opacity-80">Highest bid</h3>
                <h2 className="text-2xl dark:text-white opacity-80">$500</h2>
              </div>
              <div className="flex justify-center items-center flex-1">
                <h2 className="text-blue-100 underline">Apply now</h2>
              </div>
            </div>
          </div>
          <div className="w-[300px] shadow rounded-3xl p-2 dark:shadow-white">
            <div className="flex justify-center">
              <img src="/src/assets/Account.png" alt="" />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-xl">Need a SEO</h1>
              <p className="text-[#9D9D9D]">
                Need a SEO for our company who will let our company to a higher
                level
              </p>
            </div>
            <div className="flex p-4 ">
              <div className="w-1/2 text-center text-[#252525]">
                <h3 className="text-xl dark:text-white opacity-80">Highest bid</h3>
                <h2 className="text-2xl dark:text-white opacity-80">$300</h2>
              </div>
              <div className="flex justify-center items-center flex-1">
                <h2 className="text-blue-100 underline">Apply now</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
