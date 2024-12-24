
const skills = [
    {
        domain : "Frontend Development",
        skills : ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js", "Tailwind CSS", "Bootstrap", "Material-UI"]
    },
    {
        domain : "Backend Development",
        skills : ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "GraphQL", "Apollo Server", "Prisma"]
    }
]

const AllSkills = () => {
  return (
    <div className="w-[80%] mx-auto px-8 py-10">
      <h1 className="text-2xl font-bold mb-5">Skills & Expertise</h1>

      <div className="flex gap-10">
        <div className="w-1/2 border-gray-300">
        <h3 className="font-bold">Technical Skills</h3>
          <div className="py-5">
            <div className="flex flex-col gap-5">
                {
                    skills?.map((skill, index) => (
                        <div key={index} className="border border-gray-300 p-5 rounded-xl bg-white">
                            <h5 className="text-lg font-bold mb-2">{skill.domain}</h5>
                                {
                                    skill.skills.map((s, i) => (
                                       <div className="inline-block border m-2 px-4 py-1 rounded-2xl bg-[#f5f5f5] text-gray-600">{s}</div>
                                    ))
                                }
                                
                        </div>))
                }

            </div>
          </div>
        </div>
        <div className="w-1/2 border-gray-300">
        <h3 className="font-bold">Technical Skills</h3>
          <div className="py-5">
            <div className="flex flex-col gap-5">
                {
                    skills?.map((skill, index) => (
                        <div key={index} className="border border-gray-300 p-5 rounded-xl bg-white">
                            <h5 className="text-lg font-bold mb-2">{skill.domain}</h5>
                                {
                                    skill.skills.map((s, i) => (
                                       <div className="inline-block border m-2 px-4 py-1 rounded-2xl bg-[#f5f5f5] text-gray-600">{s}</div>
                                    ))
                                }
                                
                        </div>))
                }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
