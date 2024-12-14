import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter} from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center h-[400px] dark:bg-black dark:text-white">
      <div className="flex h-full w-full pt-20 border-">
        <div className="flex flex-col justify-center items-center w-1/4 border-t">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-blue-100 mb-3">Smart Gig</h1>
            <p className="text-[#252525] dark:text-white">
              Powerful Freelance Marketplace System with ability to change the
              Users (Freelancers & Clients)
            </p>
            <div className="flex gap-5 mt-4">
            <Instagram className=""/>
            <Twitter />
            <Facebook />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4 border-t">
          <div className="w-1/2">
            <h1 className="text-xl mb-5">For Client</h1>
            <ul className="text-[#252525] dark:text-white">
                <li>Find Freelancers</li>
                <li>Post Project</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4 border-t">
          <div className="w-1/2">
            <h1 className="text-xl mb-5">For Freelancers</h1>
            <ul className="text-[#252525] dark:text-white">
                <li>Find Work</li>
                <li>Create Account</li>
                <li>Login</li>
                <li>Help & Support</li>
            </ul>
          </div>
        </div>
      
        <div className="flex flex-col justify-center items-center w-1/4 border-t">
          <div className="w-1/2 h-[172px]">
                <h1 className="text-xl">Contact Us</h1>
                <p className="flex mt-4"><MapPin className="mr-4"/> India</p>
                <p className="flex mt-4"><PhoneCall className="mr-4"/> +91 8888800000</p>
                <p className="flex mt-4"><Mail className="mr-4"/> arshsomal100@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
