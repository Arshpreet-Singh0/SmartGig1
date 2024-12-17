const ProfileCard = () => {
  return (
    <div className="h-[600px] w-1/4 shadow-lg bg-[#FBFBFB] rounded-lg sticky top-10">
      <div className="flex flex-col justify-center items-center h-56 border-b border-gray-300 p-5">
        <img
          src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
          alt=""
          className="h-32 rounded-full"
        />
        <h1 className="text-2xl font-sans mt-2">Arshpreet Singh</h1>
        <p className="text-[#62646A]">@arshpreet_000</p>
      </div>
      <div className="flex flex-col items-center px-10 h-full border-gray-300 py-8">
        <h2 className="text-xl text-[#62646A] mb-4">
          WEB DEVELOPER || FREELANCER
        </h2>

        <p className="text-[#62646A]">
          "Building your digital dreams, one line of code at a time"
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
