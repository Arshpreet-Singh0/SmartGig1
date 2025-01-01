import { Bell } from "lucide-react"

const Nav = () => {
  return (
    <div className="flex items-center justify-between h-20 bg-black-200 w-full px-6 text-white">
        <div>
            <h2 className="text-xl font-semibold">Dashbaord</h2>
        </div>
        <div className="flex justify-center items-center gap-10">
            <Bell className="opacity-60"/>

            <div className="h-10 w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav