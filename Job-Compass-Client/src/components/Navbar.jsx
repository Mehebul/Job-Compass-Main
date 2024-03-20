import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
// import Login from '../auth/Login'
// import Register from '../auth/Register'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const handleMenuToggler = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems =[
        {path: "/", title: "Start A Search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "/salary", title: "Salary Estimate"},
        {path: "/post-job", title: "Post Jobs"},
    ]
  return (
    <header className="container px-4 mx-auto max-w-screen-2xl xl:px-24">
        <nav className="flex items-center justify-between py-6">
                <a href="/" className="flex items-center gap-2 text-2xl text-black"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
<circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
<circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/>
</svg> <span>Job Compass</span></a>
        {/* nav items for large devices */}
        <ul className="hidden gap-12 md:flex">
            {
                navItems.map(({path, title})=>(
                    <li key={path} className="text-base text-primary">
                  <NavLink
                    to={path}
                    className={({ isActive}) => isActive ? "active" : ""}
                  >
                    {title}
                  </NavLink>
                    </li>
                ))
            }
        </ul>

        {/* Login and signup button */}
        <div className="hidden space-x-5 text-base font-medium text-primary lg:block">
            <Link to="/Login" className="px-5 py-2 border rounded">Log in</Link>
            <Link to="/Register" className="px-5 py-2 text-white border rounded bg-blue">Sign Up</Link>
        </div>

        {/* mobile menu */}
        <div className="block md:hidden">
                <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>
                        }
                </button>
        </div>
        </nav>

        {/* navitems for mobiles */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                {
                navItems.map(({path, title})=>(
                    <li key={path} className="py-1 text-base text-white first:text-white">
                  <NavLink
                    to={path}
                    className={({ isActive}) => isActive ? "active" : ""}
                  >
                    {title}
                  </NavLink>
                    </li>
                ))
            }
            <li className="py-1 text-white"><Link to="/login">Log in</Link></li>
                </ul>
        </div>
    </header>
  )
}

export default Navbar