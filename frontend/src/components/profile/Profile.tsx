import Info from "./Info";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <>
      <div>
        {/* <div className="border h-72 bg-cover bg-center" style={{backgroundImage : 'url(https://res.cloudinary.com/djusmuols/image/upload/Black_Minimal_Motivation_Quote_LinkedIn_Banner_ditdsb.png)'}}>
      
        </div> */}
        <div className="flex bg-gray-100 px-20 py-10 gap-16">
          <ProfileCard />
          <Info />
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-10">
        {/* Main Profile Container */}
        <div className="bg-white shadow-lg rounded-md w- mt-10 p-6 grid grid-cols-3 gap-6">
          {/* Sidebar Section */}
          <div className="col-span-1 ">
            {/* Profile Picture */}
            <div className="text-center mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Your Profile"
                className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h2 className="text-xl font-bold text-gray-800">Your Name</h2>
              <p className="text-gray-600">Full-Stack Developer</p>
              <div className="text-green-600 mt-2 font-semibold">Available</div>
            </div>

            {/* Quick Stats */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Profile Summary</h3>
              <ul className="text-gray-600">
                <li>
                  Total Jobs: <strong>163</strong>
                </li>
                <li>
                  Total Earnings: <strong>$90k+</strong>
                </li>
                <li>
                  Total Hours: <strong>835</strong>
                </li>
              </ul>
            </div>

            {/* Verifications */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Verifications</h3>
              <ul className="text-gray-600">
                <li>Phone: ✅ Verified</li>
                <li>Email: ✅ Verified</li>
                <li>Languages: English, Spanish</li>
              </ul>
            </div>
          </div>

          {/* Main Profile Details */}
          <div className="col-span-2">
            {/* Title & Price */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Full-Stack Development Services
              </h1>
              <span className="text-blue-600 font-semibold text-lg">
                $80.00/hr
              </span>
            </div>

            {/* About Me */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a passionate Full-Stack Developer with 5+ years of
                experience creating responsive web applications and
                user-friendly designs. I specialize in technologies such as
                React, Node.js, and TailwindCSS to deliver clean, functional,
                and visually appealing websites.
              </p>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Responsive Web Development</li>
                <li>Full-Stack Application Development</li>
                <li>API Integration & Backend Services</li>
                <li>UI/UX Design and Prototyping</li>
                <li>SEO Optimization</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "TailwindCSS",
                  "MongoDB",
                  "Express.js",
                  "GraphQL",
                  "Python",
                  "REST APIs",
                  "SQL",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="border rounded-lg p-4 shadow hover:shadow-md transition"
                  >
                    <h4 className="font-bold mb-2">Project {item}</h4>
                    <p className="text-gray-600 text-sm">
                      A description of this project including the tools used.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Profiles */}
        <div className="w-3/4 bg-white mt-8 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Similar Freelancers</h3>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((person) => (
              <div
                key={person}
                className="border rounded-lg p-4 text-center hover:shadow-lg transition"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-2"
                />
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-600">Web Developer</p>
                <p className="text-blue-600 mt-1 font-medium">$70/hr</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
