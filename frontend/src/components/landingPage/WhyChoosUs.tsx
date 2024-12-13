const WhyChoosUs = () => {
  return (
    <div className="pt-16 dark:bg-black dark:text-white">
      <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
      <div className="flex w-[70%] mx-auto">
        <div className="flex justify-center items-center w-[666px] h-[550px]">
          <img
            src="/src/assets/Whychooseus.png"
            alt="img"
            className="w-[600px] h-[500px]"
          />
        </div>

        <div className="flex flex-col justify-center flex-1 mt-5 p-10">
          <h1 className="text-4xl leading-snug">
            Find The Best <br />{" "}
            <span className="text-blue-100">Freelancers</span> Here
          </h1>
          <p className="text-[#9D9D9D] "> Discover top-rated freelancers from around the world. Whether you need creative professionals, developers, or writers, our platform connects you with the perfect talent for your projects. Over 500+ freelancers are ready to work, and more than 300+ projects have already been successfully posted. Start your journey today and bring your ideas to life effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
