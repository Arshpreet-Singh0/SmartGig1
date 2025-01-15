import ProjectDeatils from "../../components/projects/ProjectDeatils";

const ViewProjectDetails = () => {
  return (
    <div className="p-6">
      <div className="flex rounded-lg bg-black-200 text-white w-[80%] mx-auto px-24 gap-20">
        <div className="text-center w-1/2 border-b-4 border-blue-600 py-4">
          <p className="text-xl font-semibold">Project Details</p>
        </div>
        <div className="flex-1 text-center py-4">
          <p className="text-xl font-semibold">Proposals</p>
        </div>
      </div>

      <ProjectDeatils />
    </div>
  );
};

export default ViewProjectDetails;
