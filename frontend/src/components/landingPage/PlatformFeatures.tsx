import { ChartColumnDecreasing, Clock4, FileText, MessagesSquare, PersonStanding, ShieldCheck } from "lucide-react";
import { Card } from "./HowItWorks";
import { Button } from "../ui/Button";

const PlatformFeatures = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center">Platform Features</h1>
      <p className="text-center mt-4 text-gray-400">
        Powerful tools and features to make your freelancing experience seamless
        and <br /> successful
      </p>

      <div className="grid grid-cols-3 w-[70%] mx-auto gap-5 mt-20 px-14">
        <Card icon={<ShieldCheck className="text-[#6366F1]"/>} heading="Secure Payments" description="Protected payments and milestone-based release system for peace of mind"/>
        <Card icon={<PersonStanding className="text-[#6366F1]"/>} heading="Smart Matching" description="AI-powered matching system to connect you with the perfect clients or freelancers"/>
        <Card icon={<Clock4 className="text-[#6366F1]"/>} heading="Time Tracking" description="Built-in time tracking tools for accurate billing and project management"/>
        <Card icon={<MessagesSquare className="text-[#6366F1]"/>} heading="Collaboration Tools" description="Integrated chat, file sharing, and project management tools for seamless teamwork"/>
        <Card icon={<FileText className="text-[#6366F1]"/>} heading="Contract Management" description="Professional contract templates and e-signature capabilities for legal protection"/>
        <Card icon={<ChartColumnDecreasing className="text-[#6366F1]"/>} heading="Analytics Dashboard" description="Comprehensive analytics and reporting tools to track your success"/>

      </div>

      <div className="flex justify-between bg-[#1E1E1E] w-[64%] mx-auto mt-20 rounded-lg p-8">
        <div>
            <h1 className="text-2xl font-semibold">Ready to experience these features?
            </h1>
            <p className="text-gray-500 mt-2">Join thousands of successful freelancers and clients</p>
        </div>
        <div className="flex items-center gap-10">
            <Button text="Start Hiring" variant="secondary" className="py-3 px-4"/>
            <Button text="Start Freelancing" variant="outline" className="py-3 px-4"/>
        </div>
      </div>

      <div className="py-16"></div>
    </div>
  );
};

export default PlatformFeatures;
