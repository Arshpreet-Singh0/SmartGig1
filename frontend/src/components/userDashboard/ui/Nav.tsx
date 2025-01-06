import { Bell } from "lucide-react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex items-center justify-between h-20 bg-black-200 w-full px-6 text-white sticky top-0 border-b border-gray-700">
        <div>
            <h2 className="text-xl font-semibold">Dashbaord</h2>
        </div>
        <div className="flex justify-center items-center gap-10">
            <Link to={'/projects'} >All Projects</Link>
            <Bell className="opacity-60"/>

            <div className="h-10 w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav