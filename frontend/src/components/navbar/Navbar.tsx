import { useState, useEffect, useRef } from 'react';
import { LogOut, Search, User } from 'lucide-react';
// import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { useAppSelector } from '../../hooks/hook';
import { isUserLoggedIn } from '../../redux/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const isUserExist = useAppSelector(isUserLoggedIn);
  const { user } = useAppSelector(state => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event:any) => {

      //@ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex items-center gap-20 h-20 shadow bg-white dark:bg-[#171717] text-[#000] dark:text-white sticky top-0 z-50">
      <div className="flex items-center justify-between gap-40 w-1/2 ml-32">
        <img src="/src/assets/smartgig-removebg-preview (1).png" alt="logo" className="w-56 h-32" />
        {/* <div className="flex items-center">
          <Input
            placeholder="What service are you looking for today?"
            classname="w-96 bg-[#ECE6F0] rounded-full dark:bg-black dark:text-white"
          />
          <div className="relative right-14 dark:right-[60px] w-12 h-10 cursor-pointer">
            <Search className="text-black ml-3 mt-2 dark:text-white" />
          </div>
        </div> */}
      </div>
      <ul className="flex items-center gap-16 mr-8">
        <li className="opacity-80 hover:opacity-100 text-lg cursor-pointer"><Link to="/">Home</Link></li>
        <li className="opacity-80 hover:opacity-100 text-lg cursor-pointer"><Link to="/projects">Project</Link></li>
        {isUserExist ? (
          <>
          <li className="opacity-80 hover:opacity-100 text-lg cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
          <li className="opacity-80 hover:opacity-100 text-lg cursor-pointer">Messages</li>
          <li>
            <div ref={dropdownRef} className="relative">
              <img onClick={toggleDropdown} src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt='' className="h-12 rounded-full cursor-pointer"/>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white">
                  <div className="p-2">
                    <h1 className="text-lg text-center">{user?.name}</h1>
                  </div>
                  <div className="border-t border-gray-200">
                    <h2 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"><User className="mr-2"/><Link to="/profile">Profile</Link></h2>
                    <h2 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"><LogOut className="mr-2"/>Logout</h2>
                  </div>
                </div>
              )}
            </div>
          </li>
          </>
        ) : (
          <>
            <li className="opacity-80 hover:opacity-100 text-white text-lg cursor-pointer"><Link to="/signin">Sign in</Link></li>
            <Button text="Join" variant="outline" className="text-white border hover:bg-blue-100 duration-300 text-lg " onClick={() => navigate('/signup')} />
          </>
        )}
        <ThemeToggle />
      </ul>
    </div>
  );
};

export default Navbar;
