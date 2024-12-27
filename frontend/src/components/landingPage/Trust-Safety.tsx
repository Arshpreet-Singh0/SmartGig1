import {
  Check,
  FileText,
  Info,
  KeyRound,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../button/Button";

const TrustSafety = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center">Trust & Safety</h1>
      <p className="text-center mt-4 text-gray-400">
        We prioritize your security and peace of mind with industry-leading
        safety measures
      </p>

      <div className="flex gap-10 w-[70%] mx-auto mt-14 px-14">
        <div className="w-1/2">
          <Card
            icon={<ShieldCheck />}
            title="Secure Payments"
            text="Your payments are protected with industry-standard encryption and secure payment processing."
          />
          <Card
            icon={<KeyRound />}
            title="Identity Verification"
            text="All freelancers and clients undergo thorough verification processes to ensure authenticity."
          />
          <Card
            icon={<FileText />}
            title="Contract Protection"
            text="Legally binding contracts and agreements protect both parties throughout the project."
          />
        </div>
        <div className="w-1/2 h-[23rem]">
          <div className="bg-[#1e1e1e] mt-6 rounded-lg p-8">
            <h1 className="text-xl font-semibold">Our Safety Commitment</h1>

            <p className="flex items-center mt-5">
              <Check className="text-[#6366F1] mr-4" width={20} />
              24/7 Fraud Detection
            </p>
            <p className="flex items-center mt-5">
              <Check className="text-[#6366F1] mr-4" width={20} />
              Dispute Resolution
            </p>
            <p className="flex items-center mt-5">
              <Check className="text-[#6366F1] mr-4" width={20} />
              Data Encryption
            </p>
            <p className="flex items-center mt-5">
              <Check className="text-[#6366F1] mr-4" width={20} />
              Privacy Protection
            </p>

            <div className="flex gap-5 bg-[#2C2C49] p-4 rounded-lg mt-6">
              <div className="flex justify-center items-center ">
                <Info className="text-[#6366F1] " />
              </div>

              <p className="text-sm">
                Your security is our top priority. Learn more about our safety
                measures.
              </p>
            </div>
          </div>

          <div className="flex justify-between rounded-lg border border-gray-700 mt-5 px-4">
            <div className="flex items-center">
              <div className="flex justify-center items-center w-20 h-24">
                <Phone className=" w-12 h-12 rounded-full p-2 bg-[#292951] text-[#6366F1]" />
              </div>
              <div>
                <h1>Need Help?</h1>
                <p className="text-gray-600">Our support team is here 24/7</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button text="Contact Us" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;

interface props {
  icon: React.ReactElement;
  title: string;
  text: string;
}
const Card: React.FC<props> = ({ icon, title, text }) => {
  return (
    <div className="flex gap-5 border border-gray-700 p-6 rounded-lg mt-6">
      <div className="flex justify-center items-center w-12 h-12 bg-[#292951] text-[#6366F1] rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h1 className="text-lg">{title}</h1>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};
