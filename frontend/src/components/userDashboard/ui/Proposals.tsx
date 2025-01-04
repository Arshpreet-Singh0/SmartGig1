import axios from "axios";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Project {
  title: string;
  category: string;
  User: {
    name: string;
    avatar: string;
    company: string;
  };
}

interface Proposal {
  id: number;
  status: string;
  proposedBudget: number;
  pricingType: string;
  createdAt: string;
  project: Project;
}

const Proposals = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/freelancer/proposals`, {
          withCredentials: true,
        });
        setProposals(res.data?.proposals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProposals();
  }, []);

  return (
    <div className="p-6 text-white font-inter" id="Proposals">
      <h1 className="text-2xl font-semibold">Proposals</h1>
      <p className="opacity-60 text-md">
        Browse and manage your current projects
      </p>

      <div className="mt-5 border border-gray-700 rounded-lg bg-black-200">
        <table className="w-full border-collapse table-auto bg-black-200 text-white">
          <thead>
            <tr className="text-sm uppercase bg-black-200">
              <th className="px-6 py-4 text-left font-medium">Project</th>
              <th className="px-6 py-4 text-left font-medium">Client</th>
              <th className="px-6 py-4 text-left font-medium">Amount</th>
              <th className="px-6 py-4 text-left font-medium">Submitted</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr
                key={proposal.id}
                className="bg-black-200 hover:bg-gray-700 transition border-t border-gray-700"
              >
                {/* Project Details */}
                <td className="px-6 py-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#404040] rounded-lg flex justify-center items-center">
                      <span className="text-white text-sm font-bold">
                        <FileText className={`${index%2==0 ? 'text-blue-600' : 'text-green-600'}`} />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{proposal.project.title}</h3>
                      <p className="text-sm opacity-60">
                        {proposal.project.category || "Web Development"}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Client Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={proposal.project.User.avatar || "https://avatar.iran.liara.run/public"}
                      alt="Client Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{proposal.project.User.name}</h3>
                      <p className="text-sm opacity-60">
                        Company: {proposal.project.User.company || "Unknown"}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Budget */}
                <td className="px-6 py-4">
                  <div>
                    <h3 className="font-semibold">
                      ${proposal.proposedBudget.toLocaleString()}
                    </h3>
                    <p className="text-sm opacity-60">{proposal.pricingType || "Fixed Price"}</p>
                  </div>
                </td>

                {/* Submitted Date */}
                <td className="px-6 py-4">
                  <div>
                    <h3 className="font-medium">
                      {proposal.createdAt &&
                        new Date(proposal.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                    </h3>
                    <p className="text-sm opacity-60">
                      {proposal.createdAt &&
                        `${Math.floor(
                          (new Date() - new Date(proposal.createdAt)) /
                            (1000 * 60 * 60 * 24)
                        )} days ago`}
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-2 rounded-full text-sm font-medium ${
                      proposal.status === "ACCEPTED"
                        ? "bg-green-600 text-white"
                        : proposal.status === "Pending"
                        ? "bg-yellow-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {proposal.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FaEye className="text-gray-400 hover:text-gray-200 cursor-pointer" />
                    <FaEdit className="text-gray-400 hover:text-gray-200 cursor-pointer" />
                    <FaTrashAlt className="text-red-500 hover:text-red-400 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proposals;
