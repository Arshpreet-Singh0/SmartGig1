import { Search } from "lucide-react";
import { Input } from "../Input";
import { Button } from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center gap-20 h-20 s dark:shadow-white shadow dark:bg-black ">
      <div className="flex items-center justify-center gap-40 w-1/2 ml-32">
        <div className="">
          {/* <h1 className="text-2xl text-blue-100">SmartGig</h1> */}
          <img src="/src/assets/logo.png" alt="logo" className="w-36 h-32" />
        </div>
        <div className="flex items-center">
          <Input
            placeholder="what service you are looking for today?"
            classname="w-96 dark:bg-black dark:text-white"
          />
          <div className="relative right-14 dark:right-[60px] w-12 h-10 bg-black  rounded-r">
            <Search className="text-white ml-3 mt-2 " />
          </div>
        </div>
      </div>
      <div></div>
      <div className="mr-8">
        <ul className="flex items-center gap-16">
          {/* <li className="text-blue-100">Home</li>
          <li className="opacity-75 hover:opacity-100">Find Work</li>
          <li className="opacity-75 hover:opacity-100">Find Freelancers</li> */}
          <li className="opacity-50 hover:text-blue-100 hover:opacity-100 dark:text-white "><Link to={'/'}>Home</Link></li>
          <li className="opacity-50 hover:text-blue-100 hover:opacity-100 dark:text-white">Explore</li>
          <li className="opacity-50 hover:text-blue-100 hover:opacity-100 dark:text-white "><Link to={'/signin'}>Sign in</Link></li>
          <Button text="Join" variant="outline" className="dark:text-white border hover:bg-blue-100 duration-300" onClick={()=>navigate('/signup')}/>
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
