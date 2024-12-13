import { Button } from "../button/Button"
import ThemeToggle from "../ThemeToggle"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 w-[90%] mx-auto bg-white rounded-full dark:bg-black dark:text-white dark:border border-gray-800">
        <div className="ml-8">
            {/* <h1 className="text-2xl text-blue-100">SmartGig</h1> */}
            <img src="/src/assets/logo.png" alt="logo" className="w-36 h-32"/>
        </div>
        <div className="mr-8">
            <ul className="flex items-center gap-16">
                <li className="text-blue-100">Home</li>
                <li>Find Work</li>
                <li>Find Freelancers</li>
                <li>Log In</li>
                <li>Sign Up</li>
                <li><Button text="Post a Project" variant="primary" className="rounded-3xl"/></li>
                <li><ThemeToggle /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar