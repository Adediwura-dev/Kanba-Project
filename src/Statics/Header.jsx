
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { Trash, Menu } from "lucide-react"

const Header = () => {
    return (
        <div className="flex justify-between items-center py-10 px-10 font-bold text-xl items-center top-0 left-0 z-50  ">
            <div className="flex justify-between gap-6 items-center cursor-pointer ">
                <Menu className="font-bold text-xl hidden max-md:block h-10 w-10" />
                <div className="">
                    <img src={logo} className="max-w-[150px] min-h-[60px]" />
                </div>
                <div className="flex gap-6 items-center cursor-pointer max-md:hidden ">
                   <Link to="/" className="bg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">Home</Link>
                    <Link to="/about" className="bg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">About Us</Link>
                    <Link to="/kanban" className="bg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">Kanban Board</Link>
                </div>
            </div>
            <div className="flex justify-between gap-6 cursor-pointer">
                <Trash className="bg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded " />
                <div className="flex gap-5 cursor-pointer max-md:hidden">
                    <button className="cursor-pointerbg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">Sign Up</button> 
                    <button className="cursor-pointerbg-white-500 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Header