import { Sun, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {

  const [isUseMenu, setIsUseMenu] = useState(false);


  return (

    <header className="
    sticky top-0
    z-50
    bg-white
    shadow-sm
    ">


      <div className="
      mx-auto
      flex
      h-20
      max-w-7xl
      items-center
      justify-between
      px-6
      ">


        <div className="flex items-center gap-2">

          <Sun className="text-orange-500" />

          <h1 className="
          text-2xl
          font-bold
          text-blue-600
          ">

            Solar Source

          </h1>

        </div>



        {/* Desktop Menu */}

        <nav className="
        hidden
        gap-8
        md:flex
        ">

          <NavLink to="/">
            Home
          </NavLink>


          <NavLink to="/products">
            Products
          </NavLink>


          <NavLink to="/promotions">
            Promotions
          </NavLink>


          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/calculator">
            Calculator
          </NavLink>


        </nav>




        {/* Mobile Button */}

        <button className="
          md:hidden"
        >

          <Menu />

        </button>



        <NavLink
          to="/quote"

          className="
          rounded-xl
          bg-orange-500
          px-5
          py-3
          text-white
          "
        >

          Get Quote

        </NavLink>
      </div>

    </header>

  )

}