import { Bell } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { clearUser } from '../../../redux/authSlice' 
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const logout = ()=>{
      dispatch(clearUser());
      navigate('/signin?next=/dashboard');
  }
  return (
    <div className="flex items-center justify-between h-20 bg-black-200 w-full px-6 text-white sticky top-0 border-b border-gray-700">
        <div>
            <h2 className="text-xl font-semibold">Dashbaord</h2>
        </div>
        <div className="flex justify-center items-center gap-10">
            <Link to={'/projects'} >All Projects</Link>
            <Bell className="opacity-60"/>
            <p className="cursor-pointer" onClick={logout}>Logout</p>

            <div className="h-10 w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav