import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Briefcase,
  Clock,
  DollarSign,
} from "lucide-react";
import type { ClientProfile } from "../../../types/types";
import { Input } from "../../../components/ui/Input";

const initialProfile: ClientProfile = {
  name: "",
  companyName: "",
  position: "",
  location: "",
  industry: "",
  companySize: "small",
  website: "",
  projectDescription: "",
  projectType: "not-sure",
  estimatedDuration: "",
  requiredSkills: [],
  budget: {
    min: 0,
    max: 0,
  },
  startDate: "",
  preferredCommunication: "email",
  timezone: "",
  workingHours: {
    start: "09:00",
    end: "17:00",
  },
};

const ClientOnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<ClientProfile>(initialProfile);

  const updateProfile = (updates: Partial<ClientProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const handleSkillInput = (input: string) => {
    const skillsArray = input.split(",").map((skill) => skill.trim());
    updateProfile({ requiredSkills: skillsArray });
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Company Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <Input
                  type="text"
                  value={profile.companyName}
                onChange={(e) => updateProfile({ companyName: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Position
              </label>
              <Input
                  type="text"
                  placeholder="e.g (CEO, SDE)"
                  value={profile.position}
                    onChange={(e) => updateProfile({ position: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <Input
                  type="text"
                  value={profile.industry}
                onChange={(e) => updateProfile({ industry: e.target.value })}
                placeholder="e.g., Technology, Healthcare, Finance"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Size
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                value={profile.companySize}
                onChange={(e) =>
                  updateProfile({
                    companySize: e.target.value as ClientProfile["companySize"],
                  })
                }
              >
                <option value="startup">Startup (1-10 employees)</option>
                <option value="small">Small (11-50 employees)</option>
                <option value="medium">Medium (51-200 employees)</option>
                <option value="large">Large (201-1000 employees)</option>
                <option value="enterprise">Enterprise (1000+ employees)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Website
              </label>
              <Input
                  type="text"
                  value={profile.website}
                onChange={(e) => updateProfile({ website: e.target.value })}
                placeholder="https://example.com"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Project Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                rows={4}
                value={profile.projectDescription}
                onChange={(e) =>
                  updateProfile({ projectDescription: e.target.value })
                }
                placeholder="Describe your project and its goals..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Required Skills (comma-separated)
              </label>
              <Input
                  type="text"
                  value={profile.requiredSkills.join(", ")}
                onChange={(e) => handleSkillInput(e.target.value)}
                placeholder="React, Node.js, UI/UX Design"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estimated Duration
              </label>
              <Input
                  type="text"
                  value={profile.estimatedDuration}
                onChange={(e) =>
                  updateProfile({ estimatedDuration: e.target.value })
                }
                placeholder="e.g., 3 months, 6 months"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Communication Preferences
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Communication Method
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                value={profile.preferredCommunication}
                onChange={(e) =>
                  updateProfile({
                    preferredCommunication: e.target
                      .value as ClientProfile["preferredCommunication"],
                  })
                }
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="slack">Slack</option>
                <option value="teams">Microsoft Teams</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Timezone
              </label>
              <Input
                  type="text"
                  value={profile.timezone}
                  onChange={(e) => updateProfile({ timezone: e.target.value })}
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Working Hours Start
                </label>
                <Input
                  type="text"
                  value={profile.workingHours.start}
                  onChange={(e) =>
                    updateProfile({
                      workingHours: {
                        ...profile.workingHours,
                        start: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Working Hours End
                </label>
                <Input
                  type="text"
                  value={profile.workingHours.end}
                  onChange={(e) =>
                    updateProfile({
                      workingHours: {
                        ...profile.workingHours,
                        end: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted client profile:", profile);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Client Registration
            </h1>
            <p className="mt-2 text-gray-600">
              Tell us about your company and project needs
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[
                "Company Info",
                "Project Details",
                "Communication",
              ].map((label, index) => (
                <div
                  key={label}
                  className={`text-sm ${
                    step > index + 1
                      ? "text-blue-600"
                      : step === index + 1
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
              )}
              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Complete Registration
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientOnboardingForm;
