import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to= "/" className= "w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">Principal</p>
        </NavLink>

        <nav className="flex text-lg  gap-7 font-medium">
            <NavLink to = "/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Acerca de Mi
            </NavLink>

            <NavLink to = "/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projectos
            </NavLink>

            <NavLink to = "/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Ayuda
            </NavLink>

        </nav>

    </header>
  )
}

export default Navbar